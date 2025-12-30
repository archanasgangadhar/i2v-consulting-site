import React from "react";

export default function AddressDetails({ formData, dispatch }) {
  const handleChange = (e, field) => dispatch({ type: "UPDATE_FIELD", field, value: e.target.value });

  return (
    <fieldset>
      <legend>Address Details</legend>
      <label>Current Address</label>
      <input value={formData.currentAddress} onChange={(e) => handleChange(e, "currentAddress")} placeholder="Enter current address" />

      <label>Permanent Address</label>
      <input value={formData.permanentAddress} onChange={(e) => handleChange(e, "permanentAddress")} placeholder="Enter permanent address" />
    </fieldset>
  );
}
