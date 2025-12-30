import React, { useReducer, useState } from "react";
import "./style.css";

// Import all steps
import EmployeeBasic from "./steps/EmployeeBasic";
import AddressDetails from "./steps/AddressDetails";
import EmployeeKYC from "./steps/EmployeeKYC";
import PhotoSignature from "./steps/PhotoSignature";
import FamilyDetails from "./steps/FamilyDetails";
import BankStatutory from "./steps/BankStatutory";
import EducationDetails from "./steps/EducationDetails";
import EmploymentDetails from "./steps/EmploymentDetails";
import NomineeDetails from "./steps/NomineeDetails";
import EmergencyContact from "./steps/EmergencyContact";
import Index from "../../pages/html/USERUI/index";

// Initial state for reducer
const initialState = {
  fullName: "",
  dob: "",
  gender: "",
  maritalStatus: "",
  mobile: "",
  email: "",
  bloodGroup: "",
  currentAddress: "",
  permanentAddress: "",
  aadhaar: "",
  aadhaarFront:null,
  aadhaarBack:null,
  pan: "",
  panFront:null,
  panBack:null,
  passport: "",
  passportFront:null,
  passportBack:null,
  dl: "",
  dlFront:null,
  dlBack:null,
  rationCard: "",
  rationCardFront:null,
  rationCardBack:null,
  employeePhoto: null,
  signature: null,
  showFather: true,
  fatherName: "",
  fatherAadhaarFront: null,
  fatherAadhaarBack:null,
  fatherPanFront:null,
  fatherPanBack:null,
  fatherPhoto:null,
  showMother: true,
  motherName: "",
  motherAadhaarFront: null,
  motherAadhaarBack:null,
  motherPhoto:null,
  wifeName: "",
  wifeAadhaarFront:null,
  wifeAadhaarBack:null,
  wifePhoto:null,
  husbandName: "",
  husbandAadhaarFront:null,
  husbandAadhaarBack:null,
  husbandPhoto:null,
  marriageCertificate:null,
  children: [],
  nominees: [],
  bankName: "",
  accountHolder: "",
  accountNumber: "",
  ifsc: "",
  bankDocument: null,
  uan: "",
  esi: "",
  qualification: "",
  institution: "",
  year: "",
  educationCertificate: null,
  experience: "",
  lastCompany: "",
  lastDesignation: "",
  experienceLetter: null,
  lastPayslip: null,
  relievingLetter: null,
  contactName: "",
  contactRelationship: "",
  contactMobile: "",
};

// Reducer function
function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "ADD_CHILD":
      return { ...state, children: [...state.children, action.value] };
    case "UPDATE_CHILD":
      const updatedChildren = state.children.map((child, idx) =>
        idx === action.index ? { ...child, ...action.value } : child
      );
      return { ...state, children: updatedChildren };
    case "REMOVE_CHILD":
      return {
        ...state,
        children: state.children.filter((_, idx) => idx !== action.index),
      };
    case "ADD_NOMINEE":
      return { ...state, nominees: [...state.nominees, action.value] };
    case "UPDATE_NOMINEE":
      const updatedNominees = state.nominees.map((nominee, idx) =>
        idx === action.index ? { ...nominee, ...action.value } : nominee
      );
      return { ...state, nominees: updatedNominees };
    case "REMOVE_NOMINEE":
      return {
        ...state,
        nominees: state.nominees.filter((_, idx) => idx !== action.index),
      };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
}

export default function EmployeeJoiningWizard() {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { title: "Employee Basic", component: <EmployeeBasic formData={formData} dispatch={dispatch} /> },
    { title: "Address Details", component: <AddressDetails formData={formData} dispatch={dispatch} /> },
    { title: "Employee KYC", component: <EmployeeKYC formData={formData} dispatch={dispatch} /> },
    { title: "Photo & Signature", component: <PhotoSignature formData={formData} dispatch={dispatch} /> },
    { title: "Family Details", component: <FamilyDetails formData={formData} dispatch={dispatch} /> },
    { title: "Bank & Statutory", component: <BankStatutory formData={formData} dispatch={dispatch} /> },
    { title: "Education Details", component: <EducationDetails formData={formData} dispatch={dispatch} /> },
    { title: "Employment Details", component: <EmploymentDetails formData={formData} dispatch={dispatch} /> },
    { title: "Nominee Details", component: <NomineeDetails formData={formData} dispatch={dispatch} /> },
    { title: "Emergency Contact", component: <EmergencyContact formData={formData} dispatch={dispatch} /> },
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const data = new FormData();

    for (const key in formData) {
      if (formData[key] instanceof File || formData[key] instanceof Blob) {
        data.append(key, formData[key]);
      } else {
        data.append(key, formData[key]);
      }
    }

    data.append("children", JSON.stringify(formData.children));
    data.append("nominees", JSON.stringify(formData.nominees));

    console.log("Form Submitted:", formData);
    alert("Form submitted! Check console for details.");
  };

  return (
    false?(
    <div className="wizard-container">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        ></div>
      </div>

      <div className="step-indicator">
        Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
      </div>

      <div className="container">
        <form onSubmit={submitForm}>
          {steps[currentStep].component}

          <div className="navigation-buttons">
            <button type="button" onClick={prevStep} disabled={currentStep === 0}>
              Previous
            </button>
            {currentStep < steps.length - 1 && (
              <button type="button" onClick={nextStep}>
                Next
              </button>
            )}
            {currentStep === steps.length - 1 && <button type="submit">Submit</button>}
          </div>
        </form>
      </div>
    </div>):(<div className="wizard-container">
    <Index/>
    </div>)
  );
}
