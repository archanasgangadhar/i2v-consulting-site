import React, { useState } from "react";
import "../../src/assets/kyc.css";

export default function EmployeeJoiningForm() {
  const [formData, setFormData] = useState({
    // Employee basic
    fullName: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    mobile: "",
    email: "",
    bloodGroup: "",
    currentAddress: "",
    permanentAddress: "",
    // KYC
    aadhaar: "",
    pan: "",
    passport: "",
    dl: "",
    rationCard: "",
    employeePhoto: null,
    signature: null,
    // Family
    fatherName: "",
    motherName: "",
    wifeName: "",
    // Bank & Statutory
    bankName: "",
    accountHolder: "",
    accountNumber: "",
    ifsc: "",
    uan: "",
    esi: "",
    // Education
    qualification: "",
    institution: "",
    year: "",
    educationCertificate: null,
    // Employment
    experience: "",
    lastCompany: "",
    lastDesignation: "",
    experienceLetter: null,
    lastPayslip: null,
    relievingLetter: null,
    // Emergency Contact
    contactName: "",
    contactRelationship: "",
    contactMobile: "",
  });
  const [showFather, setShowFather] = useState(true);
  const [showMother, setShowMother] = useState(true);
  const [showWife, setShowWife] = useState(false); // optional by default

  const [children, setChildren] = useState([]);
  const [nominees, setNominees] = useState([]);

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file input changes
  const handleFileChange = (e, field) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.files[0] }));
  };

  const resetFather = () => {
  setFormData((prev) => ({
    ...prev,
    fatherName: "",
    fatherAadhaarFront: null,
    fatherAadhaarBack: null,
    fatherPanFront: null,
    fatherPanBack: null,
    fatherPhoto: null,
  }));
  setShowFather(false);
};

const resetMother = () => {
  setFormData((prev) => ({
    ...prev,
    motherName: "",
    motherAadhaarFront: null,
    motherAadhaarBack: null,
    motherPhoto: null,
  }));
  setShowMother(false);
};

const resetWife = () => {
  setFormData((prev) => ({
    ...prev,
    wifeName: "",
    wifeAadhaarFront: null,
    wifeAadhaarBack: null,
    wifePhoto: null,
    marriageCertificate: null,
  }));
  setShowWife(false);
};

  
  // Children
  const addChild = () => {
    setChildren([
      ...children,
      { name: "", dob: "", aadhaarFront: null, aadhaarBack: null, passportFront: null, passportBack: null, photo: null },
    ]);
  };

  const handleChildChange = (index, field, value) => {
    const updated = [...children];
    updated[index][field] = value;
    setChildren(updated);
  };

  const removeChild = (index) => {
    const updated = [...children];
    updated.splice(index, 1);
    setChildren(updated);
  };

  // Nominees
  const addNominee = () => {
    setNominees([...nominees, { name: "", relationship: "", share: "" }]);
  };

  const handleNomineeChange = (index, field, value) => {
    const updated = [...nominees];
    updated[index][field] = value;
    setNominees(updated);
  };

  const removeNominee = (index) => {
    const updated = [...nominees];
    updated.splice(index, 1);
    setNominees(updated);
  };

  // Submit
  const submitForm = (e) => {
    e.preventDefault();

    // Here you can prepare FormData to upload files
    const data = new FormData();
    for (const key in formData) {
      if (formData[key] instanceof File) {
        data.append(key, formData[key]);
      } else {
        data.append(key, formData[key]);
      }
    }

    // Add children and nominees
    data.append("children", JSON.stringify(children));
    data.append("nominees", JSON.stringify(nominees));

    console.log("Form Data:", formData);
    console.log("Children:", children);
    console.log("Nominees:", nominees);
    alert("Form submitted! Check console for data.");
  };

  return (
    <div className="container">
      <h1>Employee Joining Form</h1>
      <form onSubmit={submitForm}>
        {/* Employee Basic Details */}
        <fieldset>
          <legend>Employee Basic Details</legend>
          <label>Full Name</label>
          <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter full name" />
          <label>Date of Birth</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <label>Marital Status</label>
          <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
            <option value="">Select Marital Status</option>
            <option value="Married">Married</option>
            <option value="Unmarried">Unmarried</option>
          </select>
          <label>Mobile Number</label>
          <input name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter mobile number" />
          <label>Email</label>
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
          <label>Blood Group</label>
          <input name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} placeholder="Enter blood group" />
        </fieldset>

        {/* Address Details */}
        <fieldset>
          <legend>Address Details</legend>
          <label>Current Address</label>
          <input name="currentAddress" value={formData.currentAddress} onChange={handleChange} placeholder="Enter current address" />
          <label>Permanent Address</label>
          <input name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} placeholder="Enter permanent address" />
        </fieldset>

        {/* Employee KYC */}
        <fieldset>
          <legend>Employee KYC</legend>
          <label>Aadhaar Number</label>
          <input name="aadhaar" value={formData.aadhaar} onChange={handleChange} placeholder="Enter Aadhaar number" />
          <label>Aadhaar Front</label>
          <input type="file" onChange={(e) => handleFileChange(e, "aadhaarFront")} />
          <label>Aadhaar Back</label>
          <input type="file" onChange={(e) => handleFileChange(e, "aadhaarBack")} />
          <label>PAN Number</label>
          <input name="pan" value={formData.pan} onChange={handleChange} placeholder="Enter PAN number" />
          <label>PAN Front</label>
          <input type="file" onChange={(e) => handleFileChange(e, "panFront")} />
          <label>PAN Back</label>
          <input type="file" onChange={(e) => handleFileChange(e, "panBack")} />
          <label>Passport Number</label>
          <input name="passport" value={formData.passport} onChange={handleChange} placeholder="Enter passport number" />
          <label>Passport Front</label>
          <input type="file" onChange={(e) => handleFileChange(e, "passportFront")} />
          <label>Passport Back</label>
          <input type="file" onChange={(e) => handleFileChange(e, "passportBack")} />
          <label>Driving License Number</label>
          <input name="dl" value={formData.dl} onChange={handleChange} placeholder="Enter driving license number" />
          <label>DL Front</label>
          <input type="file" onChange={(e) => handleFileChange(e, "dlFront")} />
          <label>DL Back</label>
          <input type="file" onChange={(e) => handleFileChange(e, "dlBack")} />
          <label>Ration Card Number</label>
          <input name="rationCard" value={formData.rationCard} onChange={handleChange} placeholder="Enter ration card number" />
          <label>Ration Card Front</label>
          <input type="file" onChange={(e) => handleFileChange(e, "rationCardFront")} />
          <label>Ration Card Back</label>
          <input type="file" onChange={(e) => handleFileChange(e, "rationCardBack")} />
        </fieldset>

        {/* Photo & Signature */}
        <fieldset>
          <legend>Photo & Signature</legend>
          <label>Employee Photo</label>
          <input type="file" onChange={(e) => handleFileChange(e, "employeePhoto")} />
          <label>Signature</label>
          <input type="file" onChange={(e) => handleFileChange(e, "signature")} />
        </fieldset>

        {/* Father */}
        {showFather && (
  <fieldset>
    <legend>Father Details</legend>

    <label>Father Name</label>
    <input
      name="fatherName"
      value={formData.fatherName}
      onChange={handleChange}
      placeholder="Enter father name"
    />

    <label>Aadhaar Front</label>
    <input type="file" onChange={(e) => handleFileChange(e, "fatherAadhaarFront")} />

    <label>Aadhaar Back</label>
    <input type="file" onChange={(e) => handleFileChange(e, "fatherAadhaarBack")} />

    <label>PAN Front</label>
    <input type="file" onChange={(e) => handleFileChange(e, "fatherPanFront")} />

    <label>PAN Back</label>
    <input type="file" onChange={(e) => handleFileChange(e, "fatherPanBack")} />

    <label>Passport Size Photo</label>
    <input type="file" onChange={(e) => handleFileChange(e, "fatherPhoto")} />

    <button type="button" className="remove-btn" onClick={resetFather}>
      Remove Father Details
    </button>
  </fieldset>
)}


        {/* Mother */}
        {showMother && (
  <fieldset>
    <legend>Mother Details</legend>

    <label>Mother Name</label>
    <input
      name="motherName"
      value={formData.motherName}
      onChange={handleChange}
      placeholder="Enter mother name"
    />

    <label>Aadhaar Front</label>
    <input type="file" onChange={(e) => handleFileChange(e, "motherAadhaarFront")} />

    <label>Aadhaar Back</label>
    <input type="file" onChange={(e) => handleFileChange(e, "motherAadhaarBack")} />

    <label>Passport Size Photo</label>
    <input type="file" onChange={(e) => handleFileChange(e, "motherPhoto")} />

    <button type="button" className="remove-btn" onClick={resetMother}>
      Remove Mother Details
    </button>
  </fieldset>
)}


        {/* Wife */}
        {showWife ? (
  <fieldset>
    <legend>Wife Details</legend>

    <label>Wife Name</label>
    <input
      name="wifeName"
      value={formData.wifeName}
      onChange={handleChange}
      placeholder="Enter wife name"
    />

    <label>Aadhaar Front</label>
    <input type="file" onChange={(e) => handleFileChange(e, "wifeAadhaarFront")} />

    <label>Aadhaar Back</label>
    <input type="file" onChange={(e) => handleFileChange(e, "wifeAadhaarBack")} />

    <label>Passport Size Photo</label>
    <input type="file" onChange={(e) => handleFileChange(e, "wifePhoto")} />

    <label>Marriage Certificate</label>
    <input type="file" onChange={(e) => handleFileChange(e, "marriageCertificate")} />

    <button type="button" className="remove-btn" onClick={resetWife}>
      Remove Wife Details
    </button>
  </fieldset>
) : (
  <button type="button" onClick={() => setShowWife(true)}>
    + Add Wife Details
  </button>
)}



        {/* Children Section */}
        <fieldset>
          <legend>Children Details</legend>
          {children.map((child, index) => (
            <div key={index} className="child-entry">
              <h3>Child {index + 1}</h3>
              <label>Child Name</label>
              <input
                value={child.name}
                onChange={(e) => handleChildChange(index, "name", e.target.value)}
                placeholder="Enter child name"
              />
              <label>Date of Birth</label>
              <input
                type="date"
                value={child.dob}
                onChange={(e) => handleChildChange(index, "dob", e.target.value)}
              />
              <label>Aadhaar Front</label>
              <input type="file" onChange={(e) => handleChildChange(index, "aadhaarFront", e.target.files[0])} />
              <label>Aadhaar Back</label>
              <input type="file" onChange={(e) => handleChildChange(index, "aadhaarBack", e.target.files[0])} />
              <button type="button" onClick={() => removeChild(index)}>Remove Child</button>
              <hr />
            </div>
          ))}
          <button type="button" onClick={addChild}>Add Child</button>
        </fieldset>

        {/* Bank & Statutory */}
        <fieldset>
          <legend>Bank & Statutory</legend>
          <label>Bank Name</label>
          <input name="bankName" value={formData.bankName} onChange={handleChange} placeholder="Enter bank name" />
          <label>Account Holder Name</label>
          <input name="accountHolder" value={formData.accountHolder} onChange={handleChange} placeholder="Enter account holder name" />
          <label>Account Number</label>
          <input name="accountNumber" value={formData.accountNumber} onChange={handleChange} placeholder="Enter account number" />
          <label>IFSC Code</label>
          <input name="ifsc" value={formData.ifsc} onChange={handleChange} placeholder="Enter IFSC code" />
          <label>Bank Document</label>
          <input type="file" onChange={(e) => handleFileChange(e, "bankDocument")} />
          <label>UAN Number</label>
          <input name="uan" value={formData.uan} onChange={handleChange} placeholder="Enter UAN number" />
          <label>ESI Number</label>
          <input name="esi" value={formData.esi} onChange={handleChange} placeholder="Enter ESI number" />
        </fieldset>

        {/* Education */}
        <fieldset>
          <legend>Education Details</legend>
          <label>Highest Qualification</label>
          <input name="qualification" value={formData.qualification} onChange={handleChange} placeholder="Enter highest qualification" />
          <label>Institution Name</label>
          <input name="institution" value={formData.institution} onChange={handleChange} placeholder="Enter institution name" />
          <label>Year of Passing</label>
          <input name="year" value={formData.year} onChange={handleChange} placeholder="Enter year of passing" />
          <label>Education Certificate</label>
          <input type="file" onChange={(e) => handleFileChange(e, "educationCertificate")} />
        </fieldset>

        {/* Employment */}
        <fieldset>
          <legend>Employment Details</legend>
          <label>Total Experience</label>
          <input name="experience" value={formData.experience} onChange={handleChange} placeholder="Enter total experience" />
          <label>Last Company Name</label>
          <input name="lastCompany" value={formData.lastCompany} onChange={handleChange} placeholder="Enter last company name" />
          <label>Last Designation</label>
          <input name="lastDesignation" value={formData.lastDesignation} onChange={handleChange} placeholder="Enter last designation" />
          <label>Experience Letter</label>
          <input type="file" onChange={(e) => handleFileChange(e, "experienceLetter")} />
          <label>Last Payslip</label>
          <input type="file" onChange={(e) => handleFileChange(e, "lastPayslip")} />
          <label>Relieving Letter</label>
          <input type="file" onChange={(e) => handleFileChange(e, "relievingLetter")} />
        </fieldset>

        {/* Nominees */}
        <fieldset>
          <legend>Nominee Details</legend>
          {nominees.map((nominee, index) => (
            <div key={index} className="nominee-entry">
              <h3>Nominee {index + 1}</h3>
              <label>Name</label>
              <input
                value={nominee.name}
                onChange={(e) => handleNomineeChange(index, "name", e.target.value)}
                placeholder="Enter nominee name"
              />
              <label>Relationship</label>
              <input
                value={nominee.relationship}
                onChange={(e) => handleNomineeChange(index, "relationship", e.target.value)}
                placeholder="Enter relationship"
              />
              <label>Percentage Share</label>
              <input
                value={nominee.share}
                onChange={(e) => handleNomineeChange(index, "share", e.target.value)}
                placeholder="Enter percentage share"
              />
              <button type="button" onClick={() => removeNominee(index)}>Remove Nominee</button>
              <hr />
            </div>
          ))}
          <button type="button" onClick={addNominee}>Add Nominee</button>
        </fieldset>

        {/* Emergency Contact */}
        <fieldset>
          <legend>Emergency Contact</legend>
          <label>Contact Name</label>
          <input name="contactName" value={formData.contactName} onChange={handleChange} placeholder="Enter contact name" />
          <label>Relationship</label>
          <input name="contactRelationship" value={formData.contactRelationship} onChange={handleChange} placeholder="Enter relationship" />
          <label>Mobile Number</label>
          <input name="contactMobile" value={formData.contactMobile} onChange={handleChange} placeholder="Enter mobile number" />
        </fieldset>

        <button type="submit" className="btn submit">Submit</button>
      </form>
    </div>
  );
}
