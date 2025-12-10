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
  { id: "pr6", category: "process", label: "Complaint and grievance handling process" },
  { id: "pr7", category: "process", label: "Usage of CRM / field app for visit planning and tracking" },
  { id: "pr8", category: "process", label: "Documentation and traceability of activities and campaigns" },
  { id: "pr9", category: "process", label: "Review rhythm (weekly / monthly reviews with clear actions)" },
  { id: "pr10", category: "process", label: "Post-season review and learning capture" },

  // PRODUCT – 10
  { id: "pd1", category: "product", label: "Product efficacy versus competitors in target crops" },
  { id: "pd2", category: "product", label: "Clarity of product positioning among field staff" },
  { id: "pd3", category: "product", label: "Farmer satisfaction with product performance" },
  { id: "pd4", category: "product", label: "Farmer repeat usage of your products" },
  { id: "pd5", category: "product", label: "Brand visibility at retailer / distributor outlets" },
  { id: "pd6", category: "product", label: "Differentiation & uniqueness vs ‘me-too’ products" },
  { id: "pd7", category: "product", label: "Support materials (POP, leaflets, videos, demo kits)" },
  { id: "pd8", category: "product", label: "Packaging & ease of understanding for farmers" },
  { id: "pd9", category: "product", label: "Success rate of new product introductions" },
  { id: "pd10", category: "product", label: "Overall market reputation of your products" }
];

const STEPS = ["people", "process", "product"];

const AssessmentWizard = () => {

  // ------------------------------
  // STATE
  // ------------------------------
  const [answers, setAnswers] = useState(() => {
    const initial = {};
    QUESTIONS.forEach(q => (initial[q.id] = 5));
    return initial;
  });

  const [stepIndex, setStepIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const [contact, setContact] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [formValid, setFormValid] = useState(false);


  // ------------------------------
  // HANDLERS
  // ------------------------------
  const handleChange = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: Number(value) }));
  };

  const validateForm = (field, value) => {
    let newErrors = { ...errors };

    if (field === "name" && value.trim() === "") newErrors.name = "Name is required";
    else if (field === "name") delete newErrors.name;

    if (field === "company" && value.trim() === "") newErrors.company = "Company name is required";
    else if (field === "company") delete newErrors.company;

    if (field === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) newErrors.email = "Enter valid email";
      else delete newErrors.email;
    }

    if (field === "phone") {
      const phonePattern = /^[0-9]{10}$/;
      if (!phonePattern.test(value)) newErrors.phone = "Enter 10 digit phone";
      else delete newErrors.phone;
    }

    setErrors(newErrors);
    setFormValid(Object.keys(newErrors).length === 0);
  };

  const handleContactChange = (field, value) => {
    setContact({ ...contact, [field]: value });
    validateForm(field, value);
  };


  // ------------------------------
  // COMPUTE SCORES
  // ------------------------------
  const currentCategory = STEPS[stepIndex];
  const currentQuestions = QUESTIONS.filter(q => q.category === currentCategory);

  const { peopleScore, processScore, productScore } = useMemo(() => {
    const p = QUESTIONS.filter(q => q.category === "people").map(q => answers[q.id]);
    const pr = QUESTIONS.filter(q => q.category === "process").map(q => answers[q.id]);
    const pd = QUESTIONS.filter(q => q.category === "product").map(q => answers[q.id]);

    const avg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

    return {
      peopleScore: avg(p),
      processScore: avg(pr),
      productScore: avg(pd)
    };
  }, [answers]);


  // ------------------------------
  // TRIANGLE POSITION
  // ------------------------------
 const markerPosition = useMemo(() => {
  const top = { x: 50, y: 5 };
  const left = { x: 5, y: 85 };
  const right = { x: 95, y: 85 };

  const total = peopleScore + processScore + productScore;

  return {
    x: (peopleScore * top.x + processScore * left.x + productScore * right.x) / total,
    y: (peopleScore * top.y + processScore * left.y + productScore * right.y) / total
  };
}, [peopleScore, processScore, productScore]);



  // ------------------------------
  // RECOMMENDATION ENGINE
  // ------------------------------
  const recommendation = useMemo(() => {
    const p = peopleScore;
    const pr = processScore;
    const pd = productScore;

    const min = Math.min(p, pr, pd);

    if (p >= 7 && pr >= 7 && pd >= 7) {
      return {
        title: "Balanced & Strong Organisation",
        text: "Your organisation demonstrates strong balance across People, Process, and Product. Continue scaling best practices and invest in data-driven decision-making."
      };
    }

    if (p <= 4 && pr <= 4 && pd <= 4) {
      return {
        title: "Immediate Action Required",
        text: "Scores indicate structural gaps across all three pillars. Strengthen field capability, standardise processes, and sharpen product positioning urgently."
      };
    }

    if (min === p) {
      return {
        title: "Focus Area: People",
        text: "People capability is the weakest link. Improve field training, leadership involvement, and coaching rhythms. Strengthen adoption of digital tools and data tracking."
      };
    }

    if (min === pr) {
      return {
        title: "Focus Area: Process",
        text: "Process discipline needs strengthening. Standardise planning, reporting, demo execution, CRM usage, and review cycles."
      };
    }

    if (min === pd) {
      return {
        title: "Focus Area: Product",
        text: "Product differentiation and positioning need work. Conduct better demos, capture structured feedback, and sharpen product value proposition."
      };
    }

    return {
      title: "Balanced but Needs Improvement",
      text: "Your organisation has strengths in some areas and opportunities in others. Prioritise the weakest pillar to maximise impact."
    };
  }, [peopleScore, processScore, productScore]);


  
  // ------------------------------
// BACKEND (AZURE API MODE)
// ------------------------------
const submitFullAssessment = async () => {
  const payload = {
    name: contact.name,
    company: contact.company,
    email: contact.email,
    phone: contact.phone,
    message: contact.message,
    people_score: peopleScore,
    process_score: processScore,
    product_score: productScore,
    answers: answers,
  };

  try {
    const API_BASE = "https://assesmentinterview.azurewebsites.net";
    const res = await fetch(`${API_BASE}/api/assessment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    console.log("AZURE API RESPONSE:", data);

    // Show results page
    setSubmitted(true);
    setShowContactForm(false);

  } catch (err) {
    console.error("AZURE API ERROR:", err);
   alert("Could not submit your data. Please try again.");
    // Still show results even if backend fails
    setSubmitted(true);
    setShowContactForm(false);
  }
};


  // ------------------------------
  // NAVIGATION
  // ------------------------------
  const handleNext = () => {
    if (stepIndex < STEPS.length - 1) setStepIndex(prev => prev + 1);
    else setShowContactForm(true);
  };

  const handleBack = () => {
    if (stepIndex > 0) setStepIndex(prev => prev - 1);
  };


  // ------------------------------
  // RENDER
  // ------------------------------
  return (
    <div className="wizard-page">

      <h2><center><b><u>Business Maturity Assessment</u></b></center></h2>

      {/* Step Indicator */}
      <div className="wizard-steps">
        {STEPS.map((cat, i) => (
          <div
            key={cat}
            className={`wizard-step ${i === stepIndex ? "active" : ""} ${i < stepIndex ? "completed" : ""}`}
          >
            <div className="step-circle">{i + 1}</div>
            <span>{cat.toUpperCase()}</span>
          </div>
        ))}
      </div>

      {/* QUESTION SECTION */}
      {!showContactForm && !submitted && (
        <div className="wizard-content">
          <h2>{currentCategory.toUpperCase()} QUESTIONS</h2>

          {currentQuestions.map(q => (
            <div className="question-block" key={q.id}>
              <label>{q.label}</label>

              <div className="slider-row">
                <input
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

          <div className="wizard-nav">
            <button className="btn secondary" disabled={stepIndex === 0} onClick={handleBack}>Back</button>
            <button className="btn primary" onClick={handleNext}>
              {stepIndex < STEPS.length - 1 ? "Next" : "Finish"}
            </button>
          </div>
        </div>
      )}

      {/* CONTACT FORM */}
      {showContactForm && !submitted && (
        <section className="contact-form-section">

          <div className="contact-form-card">
            <h2 className="form-title">Tell Us About You</h2>
            <p className="form-subtitle">Enter your details to view results.</p>

            <div className="form-row">
              <label>Name *</label>
              <input
                type="text"
                value={contact.name}
                onChange={(e) => handleContactChange("name", e.target.value)}
                className={errors.name ? "input-error" : ""}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-row">
              <label>Company *</label>
              <input
                type="text"
                value={contact.company}
                onChange={(e) => handleContactChange("company", e.target.value)}
                className={errors.company ? "input-error" : ""}
              />
              {errors.company && <span className="error-text">{errors.company}</span>}
            </div>

            <div className="form-row">
              <label>Email *</label>
              <input
                type="email"
                value={contact.email}
                onChange={(e) => handleContactChange("email", e.target.value)}
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-row">
              <label>Phone *</label>
              <input
                type="tel"
                value={contact.phone}
                onChange={(e) => handleContactChange("phone", e.target.value)}
                className={errors.phone ? "input-error" : ""}
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>

            <div className="form-row">
              <label>Message (Optional)</label>
              <textarea
                value={contact.message}
                onChange={(e) => handleContactChange("message", e.target.value)}
              />
            </div>

            <button
              className="btn primary submit-btn"
              disabled={!formValid}
              onClick={submitFullAssessment}
            >
              Submit & View Results
            </button>
          </div>
        </section>
      )}

      {/* FINAL RESULTS + TRIANGLE + RECOMMENDATION */}
      {submitted && (
        <div className="results-section">

          <h2>Your Assessment Results</h2>

          <div className="scores-card">
            <p>People Score: {peopleScore.toFixed(1)}</p>
            <p>Process Score: {processScore.toFixed(1)}</p>
            <p>Product Score: {productScore.toFixed(1)}</p>
          </div>

         <svg
  className="triangle-svg"
  viewBox="0 0 100 90"
  preserveAspectRatio="xMidYMid meet"
>

  {/* Triangle */}
  <polygon points="50,5 5,85 95,85" className="triangle-outline" />

  {/* Labels */}
  <text
    x="50"
    y="3"
    textAnchor="middle"
    className="triangle-label"
  >
    People
  </text>

  <text
    x="0"
    y="88"
    textAnchor="start"
    className="triangle-label"
  >
    Process
  </text>

  <text
    x="100"
    y="88"
    textAnchor="end"
    className="triangle-label"
  >
    Product
  </text>

  {/* Marker */}
  <g transform={`translate(${markerPosition.x}, ${markerPosition.y})`}>
    <circle r="4" className="logo-marker-bg" />
    <circle r="2" className="logo-marker-inner" />
  </g>

</svg>


          {/* RECOMMENDATION BLOCK */}
          <div className="recommendation-card">
            <h2>{recommendation.title}</h2>
            <p>{recommendation.text}</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default AssessmentWizard;
