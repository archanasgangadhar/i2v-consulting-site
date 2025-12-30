import React from "react";

export default function BankStatutory({ formData, dispatch }) {
  const handleChange = (e, field) => dispatch({ type: "UPDATE_FIELD", field, value: e.target.value });
  const handleFileChange = (e, field) => dispatch({ type: "UPDATE_FIELD", field, value: e.target.files[0] });

  return (
    <fieldset>
      <legend>Bank & Statutory</legend>

      <label>Bank Name</label>
      <input value={formData.bankName} onChange={(e) => handleChange(e, "bankName")} />

      <label>Account Holder Name</label>
      <input value={formData.accountHolder} onChange={(e) => handleChange(e, "accountHolder")} />

      <label>Account Number</label>
      <input value={formData.accountNumber} onChange={(e) => handleChange(e, "accountNumber")} />

      <label>IFSC Code</label>
      <input value={formData.ifsc} onChange={(e) => handleChange(e, "ifsc")} />

      <label>Bank Document</label>
      <input type="file" onChange={(e) => handleFileChange(e, "bankDocument")} />

      <label>UAN Number</label>
      <input value={formData.uan} onChange={(e) => handleChange(e, "uan")} />

      <label>ESI Number</label>
      <input value={formData.esi} onChange={(e) => handleChange(e, "esi")} />
    </fieldset>
  );
}
