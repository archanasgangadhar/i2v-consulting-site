import React from "react";

export default function PhotoSignature({ formData, dispatch }) {
  const handleFileChange = (e, field) =>
    dispatch({ type: "UPDATE_FIELD", field, value: e.target.files[0] });

  return (
    <fieldset>
      <legend>Photo & Signature</legend>
      <label>Employee Photo</label>
      <input type="file" onChange={(e) => handleFileChange(e, "employeePhoto")} />

      <label>Signature</label>
      <input type="file" onChange={(e) => handleFileChange(e, "signature")} />
    </fieldset>
  );
}
