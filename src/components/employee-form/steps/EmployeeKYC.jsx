import React from "react";

export default function EmployeeKYC({ formData, dispatch }) {
  const handleChange = (e, field) => dispatch({ type: "UPDATE_FIELD", field, value: e.target.value });
  const handleFileChange = (e, field) => dispatch({ type: "UPDATE_FIELD", field, value: e.target.files[0] });

  return (
    <fieldset>
      <legend>Employee KYC</legend>

      <label>Aadhaar Number</label>
      <input value={formData.aadhaar} onChange={(e) => handleChange(e, "aadhaar")} />

      <label>Aadhaar Front</label>
      <input type="file" onChange={(e) => handleFileChange(e, "aadhaarFront")} />

      <label>Aadhaar Back</label>
      <input type="file" onChange={(e) => handleFileChange(e, "aadhaarBack")} />

      <label>PAN Number</label>
      <input value={formData.pan} onChange={(e) => handleChange(e, "pan")} />

      <label>PAN Front</label>
      <input type="file" onChange={(e) => handleFileChange(e, "panFront")} />

      <label>PAN Back</label>
      <input type="file" onChange={(e) => handleFileChange(e, "panBack")} />

      <label>Passport Number</label>
      <input value={formData.passport} onChange={(e) => handleChange(e, "passport")} />

      <label>Passport Front</label>
      <input type="file" onChange={(e) => handleFileChange(e, "passportFront")} />

      <label>Passport Back</label>
      <input type="file" onChange={(e) => handleFileChange(e, "passportBack")} />

      <label>Driving License Number</label>
      <input value={formData.dl} onChange={(e) => handleChange(e, "dl")} />

      <label>DL Front</label>
      <input type="file" onChange={(e) => handleFileChange(e, "dlFront")} />

      <label>DL Back</label>
      <input type="file" onChange={(e) => handleFileChange(e, "dlBack")} />

      <label>Ration Card Number</label>
      <input value={formData.rationCard} onChange={(e) => handleChange(e, "rationCard")} />

      <label>Ration Card Front</label>
      <input type="file" onChange={(e) => handleFileChange(e, "rationCardFront")} />

      <label>Ration Card Back</label>
      <input type="file" onChange={(e) => handleFileChange(e, "rationCardBack")} />
    </fieldset>
  );
}
