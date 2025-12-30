import React from "react";

export default function EmergencyContact({ formData, dispatch }) {
  const handleChange = (e, field) => dispatch({ type: "UPDATE_FIELD", field, value: e.target.value });

  return (
    <fieldset>
      <legend>Emergency Contact</legend>

      <label>Contact Name</label>
      <input value={formData.contactName} onChange={(e) => handleChange(e, "contactName")} />

      <label>Relationship</label>
      <input value={formData.contactRelationship} onChange={(e) => handleChange(e, "contactRelationship")} />

      <label>Mobile Number</label>
      <input value={formData.contactMobile} onChange={(e) => handleChange(e, "contactMobile")} />
    </fieldset>
  );
}
