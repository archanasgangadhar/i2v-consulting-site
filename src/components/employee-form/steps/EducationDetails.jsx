import React from "react";

export default function EducationDetails({ formData, dispatch }) {
  const handleChange = (e, field) => dispatch({ type: "UPDATE_FIELD", field, value: e.target.value });
  const handleFileChange = (e, field) => dispatch({ type: "UPDATE_FIELD", field, value: e.target.files[0] });

  return (
    <fieldset>
      <legend>Education Details</legend>

      <label>Highest Qualification</label>
      <input value={formData.qualification} onChange={(e) => handleChange(e, "qualification")} />

      <label>Institution Name</label>
      <input value={formData.institution} onChange={(e) => handleChange(e, "institution")} />

      <label>Year of Passing</label>
      <input value={formData.year} onChange={(e) => handleChange(e, "year")} />

      <label>Education Certificate</label>
      <input type="file" onChange={(e) => handleFileChange(e, "educationCertificate")} />
    </fieldset>
  );
}
