import React from "react";

export default function EmployeeBasic({ formData, dispatch }) {
  const handleChange = (e, field) => {
    dispatch({ type: "UPDATE_FIELD", field, value: e.target.value });
  };

  return (
    <fieldset>
      <legend>Employee Basic Details</legend>
      <label>Full Name</label>
      <input value={formData.fullName} onChange={(e) => handleChange(e, "fullName")} />

      <label>Date of Birth</label>
      <input type="date" value={formData.dob} onChange={(e) => handleChange(e, "dob")} />

      <label>Gender</label>
      <select value={formData.gender} onChange={(e) => handleChange(e, "gender")}>
        <option value="">Select</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <label>Marital Status</label>
      <select value={formData.maritalStatus} onChange={(e) => handleChange(e, "maritalStatus")}>
        <option value="">Select</option>
        <option>Married</option>
        <option>Unmarried</option>
      </select>

      <label>Mobile</label>
      <input value={formData.mobile} onChange={(e) => handleChange(e, "mobile")} />

      <label>Email</label>
      <input value={formData.email} onChange={(e) => handleChange(e, "email")} />

      <label>Blood Group</label>
      <input value={formData.bloodGroup} onChange={(e) => handleChange(e, "bloodGroup")} />
    </fieldset>
  );
}
