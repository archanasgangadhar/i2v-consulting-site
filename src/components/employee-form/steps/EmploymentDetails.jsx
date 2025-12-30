import React from "react";

export default function EmploymentDetails({ formData, dispatch }) {
  const handleChange = (e, field) => dispatch({ type: "UPDATE_FIELD", field, value: e.target.value });
  const handleFileChange = (e, field) => dispatch({ type: "UPDATE_FIELD", field, value: e.target.files[0] });

  return (
    <fieldset>
      <legend>Employment Details</legend>

      <label>Total Experience</label>
      <input value={formData.experience} onChange={(e) => handleChange(e, "experience")} />

      <label>Last Company Name</label>
      <input value={formData.lastCompany} onChange={(e) => handleChange(e, "lastCompany")} />

      <label>Last Designation</label>
      <input value={formData.lastDesignation} onChange={(e) => handleChange(e, "lastDesignation")} />

      <label>Experience Letter</label>
      <input type="file" onChange={(e) => handleFileChange(e, "experienceLetter")} />

      <label>Last Payslip</label>
      <input type="file" onChange={(e) => handleFileChange(e, "lastPayslip")} />

      <label>Relieving Letter</label>
      <input type="file" onChange={(e) => handleFileChange(e, "relievingLetter")} />
    </fieldset>
  );
}
