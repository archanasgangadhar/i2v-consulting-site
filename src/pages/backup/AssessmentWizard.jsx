import React, { useState, useMemo } from "react";
import "./AssessmentWizard.css";

const QUESTIONS = [
  // PEOPLE – 10
  { id: "p1", category: "people", label: "Field team’s ability to explain product benefits to farmers" },
  { id: "p2", category: "people", label: "Quality of interaction between sales team and retailers" },
  { id: "p3", category: "people", label: "Leadership involvement in field and market activities" },
  { id: "p4", category: "people", label: "Knowledge of crop issues (pest, disease, nutrition) across team" },
  { id: "p5", category: "people", label: "Capability to conduct effective farmer meetings / demos" },
  { id: "p6", category: "people", label: "Adoption of digital tools / apps by field staff" },
  { id: "p7", category: "people", label: "Supervisor’s ability to coach and guide field officers" },
  { id: "p8", category: "people", label: "Team collaboration between marketing, sales and field staff" },
  { id: "p9", category: "people", label: "Consistency of performance across different territories" },
  { id: "p10", category: "people", label: "Investment in training and capability building for team" },

  // PROCESS – 10
  { id: "pr1", category: "process", label: "Effectiveness of seasonal planning (Kharif / Rabi / Zaid)" },
  { id: "pr2", category: "process", label: "Clarity of territory and coverage planning (villages, dealers, demos)" },
  { id: "pr3", category: "process", label: "Consistency of daily / weekly reporting by field staff" },
  { id: "pr4", category: "process", label: "Standardisation of demo plot process (before/after, data capture)" },
  { id: "pr5", category: "process", label: "Retailer / distributor profiling and follow-up process" },
  { id: "pr6", category: "process", label: "Complaint and grievance handling process for farmers / trade" },
  { id: "pr7", category: "process", label: "Usage of CRM / field app for visit planning and tracking" },
  { id: "pr8", category: "process", label: "Documentation and traceability of activities and campaigns" },
  { id: "pr9", category: "process", label: "Review rhythm (weekly / monthly reviews with clear actions)" },
  { id: "pr10", category: "process", label: "Post-season review and learning capture for next season" },

  // PRODUCT – 10
  { id: "pd1", category: "product", label: "Product efficacy versus key competitors in target crops" },
  { id: "pd2", category: "product", label: "Clarity of product positioning in the minds of field staff" },
  { id: "pd3", category: "product", label: "Farmer satisfaction with product performance and yield impact" },
  { id: "pd4", category: "product", label: "Rate of farmer repeat usage / repurchase of your products" },
  { id: "pd5", category: "product", label: "Brand visibility and presence at retailer / distributor outlets" },
  { id: "pd6", category: "product", label: "Differentiation and uniqueness versus ‘me-too’ products" },
  { id: "pd7", category: "product", label: "Support materials (POP, leaflets, videos, demo kits) for products" },
  { id: "pd8", category: "product", label: "Packaging, labelling and ease of understanding for farmers" },
  { id: "pd9", category: "product", label: "New product introduction success rate in last 2–3 seasons" },
  { id: "pd10", category: "product", label: "Overall market reputation of your product portfolio" }
];

const STEPS = ["people", "process", "product"];

const AssessmentWizard = () => {
  // default all answers to 5 (neutral)
  const [answers, setAnswers] = useState(() => {
    const initial = {};
    QUESTIONS.forEach((q) => (initial[q.id] = 5));
    return initial;
  });

  const [stepIndex, setStepIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: Number(value) }));
  };

  const currentCategory = STEPS[stepIndex];

  const currentQuestions = useMemo(
    () => QUESTIONS.filter((q) => q.category === currentCategory),
    [currentCategory]
  );

  // category averages
  const { peopleScore, processScore, productScore } = useMemo(() => {
    const byCat = { people: [], process: [], product: [] };
    QUESTIONS.forEach((q) => {
      byCat[q.category].push(answers[q.id] || 0);
    });
    const avg = (arr) => (arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0);

    return {
      peopleScore: avg(byCat.people),
      processScore: avg(byCat.process),
      productScore: avg(byCat.product),
    };
  }, [answers]);

  // triangle position for marker (using weighted centroid)
  const markerPosition = useMemo(() => {
    const top = { x: 150, y: 20 };   // People
    const left = { x: 40, y: 230 };  // Process
    const right = { x: 260, y: 230 };// Product

    const wPeople = peopleScore || 1;
    const wProcess = processScore || 1;
    const wProduct = productScore || 1;
    const total = wPeople + wProcess + wProduct;

    const x = (wPeople * top.x + wProcess * left.x + wProduct * right.x) / total;
    const y = (wPeople * top.y + wProcess * left.y + wProduct * right.y) / total;
    return { x, y };
  }, [peopleScore, processScore, productScore]);

  // recommendation based on weakest area
  const recommendation = useMemo(() => {
    const p = peopleScore;
    const pr = processScore;
    const pd = productScore;

    const min = Math.min(p, pr, pd);
    const max = Math.max(p, pr, pd);

    if (p >= 7 && pr >= 7 && pd >= 7) {
      return {
        title: "Balanced & Strong Foundation",
        body:
          "Your organisation shows a healthy balance across People, Process and Product. " +
          "Focus on scaling what already works: deepen data-driven decision making, replicate best practices across territories, and invest in advanced analytics and digital tools."
      };
    }

    if (p <= 4 && pr <= 4 && pd <= 4) {
      return {
        title: "Urgent Transformation Required",
        body:
          "Scores indicate foundational gaps across People, Process and Product. " +
          "Start with quick wins: clarify GTM strategy, conduct intensive field team training, strengthen planning and reporting discipline, and focus product efforts on 1–2 flagship solutions."
      };
    }

    if (min === p) {
      return {
        title: "Priority Area: People",
        body:
          "People capabilities appear to be the weakest link. Focus on field team training, leadership involvement in the field, coaching of supervisors and adoption of simple digital tools. " +
          "Build clear KPIs, regular reviews and recognition systems to drive behaviour change."
      };
    }

    if (min === pr) {
      return {
        title: "Priority Area: Process",
        body:
          "Your processes need strengthening. Standardise coverage planning, demo execution, CRM usage and reporting. " +
          "Introduce simple SOPs, checklists and dashboards so that every season and every territory runs with discipline and predictability."
      };
    }

    if (min === pd) {
      return {
        title: "Priority Area: Product",
        body:
          "Product positioning and market impact require focus. Revisit your value proposition, sharpen differentiation versus competitors and increase high-quality demos and trials. " +
          "Capture structured farmer feedback to refine messaging and portfolio prioritisation."
      };
    }

    // fallback
    return {
      title: "Insights Available",
      body:
        "Your scores show a mixed picture across People, Process and Product. " +
        "Review the detailed scores and focus on closing the biggest gaps first while protecting your strongest area."
    };
  }, [peopleScore, processScore, productScore]);

  const handleNext = () => {
    if (stepIndex < STEPS.length - 1) {
      setStepIndex((prev) => prev + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    if (stepIndex > 0) setStepIndex((prev) => prev - 1);
  };

  const stepTitle =
    currentCategory === "people"
      ? "People"
      : currentCategory === "process"
      ? "Process"
      : "Product";

  return (
    <div className="wizard-page">
      <header className="wizard-header">
        <h1>Agri Business Maturity Assessment</h1>
        <p>
          Rate your organisation on <strong>People</strong>, <strong>Process</strong> and <strong>Product</strong> (1–10).{" "}
          Each question carries equal weight. At the end, you’ll see your scores,
          your position in the People–Process–Product triangle, and tailored recommendations.
        </p>
      </header>

      {/* Step indicator */}
      <div className="wizard-steps">
        {STEPS.map((cat, idx) => (
          <div
            key={cat}
            className={
              "wizard-step" +
              (idx === stepIndex ? " active" : "") +
              (idx < stepIndex ? " completed" : "")
            }
          >
            <div className="step-circle">{idx + 1}</div>
            <span>
              {cat === "people" && "People"}
              {cat === "process" && "Process"}
              {cat === "product" && "Product"}
            </span>
          </div>
        ))}
      </div>

      {/* Current step questions */}
      <section className="wizard-content">
        <h2>{stepTitle} – Questions</h2>
        <p className="step-hint">
          Move the slider for each question from <strong>1 (very weak)</strong> to{" "}
          <strong>10 (very strong)</strong>.
        </p>

        <div className="questions-list">
          {currentQuestions.map((q) => (
            <div className="question-block" key={q.id}>
              <label htmlFor={q.id}>{q.label}</label>
              <div className="slider-row">
                <input
                  id={q.id}
                  type="range"
                  min="1"
                  max="10"
                  value={answers[q.id]}
                  onChange={(e) => handleChange(q.id, e.target.value)}
                />
                <span className="slider-value">{answers[q.id]}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="wizard-nav">
          <button
            type="button"
            onClick={handleBack}
            disabled={stepIndex === 0}
            className="btn secondary"
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="btn primary"
          >
            {stepIndex < STEPS.length - 1 ? "Next" : "Finish & View Results"}
          </button>
        </div>
      </section>

      {/* Results section */}
      {submitted && (
        <section className="results-section">
          <div className="results-layout">
            <div className="scores-card">
              <h2>Your Scores</h2>
              <div className="score-line">
                <span>People</span>
                <strong>{peopleScore.toFixed(1)}</strong>
              </div>
              <div className="score-line">
                <span>Process</span>
                <strong>{processScore.toFixed(1)}</strong>
              </div>
              <div className="score-line">
                <span>Product</span>
                <strong>{productScore.toFixed(1)}</strong>
              </div>
            </div>

            <div className="triangle-card">
              <h2>People · Process · Product Triangle</h2>
              <svg viewBox="0 0 300 260" className="triangle-svg">
                {/* Triangle */}
                <polygon
                  points="150,20 40,230 260,230"
                  className="triangle-outline"
                />
                {/* Labels */}
                <text x="150" y="15" textAnchor="middle" className="triangle-label">
                  People
                </text>
                <text x="20" y="245" textAnchor="start" className="triangle-label">
                  Process
                </text>
                <text x="280" y="245" textAnchor="end" className="triangle-label">
                  Product
                </text>

                {/* Marker (logo placeholder) */}
                <g transform={`translate(${markerPosition.x}, ${markerPosition.y})`}>
                 {/* <circle r="13" className="logo-marker-bg" />
                  <circle r="8" className="logo-marker-inner" />*/}
                  {/* To use logo instead of circles:*/}
                  <image href="/assets/images/logo2.jpg" x={-12} y={-12} width={24} height={24} />
                  
                </g>
              </svg>
              <p className="triangle-caption">
                The marker indicates where your <strong>company logo</strong> would sit
                based on your relative strength in People, Process and Product.
              </p>
            </div>
          </div>

          <div className="recommendation-card">
            <h2>{recommendation.title}</h2>
            <p>{recommendation.body}</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default AssessmentWizard;
