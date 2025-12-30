import React from "react";

export default function NomineeDetails({ formData, dispatch }) {
  const addNominee = () => dispatch({ type: "ADD_NOMINEE", value: { name: "", relationship: "", share: "" } });

  const handleNomineeChange = (index, field, value) =>
    dispatch({ type: "UPDATE_NOMINEE", index, value: { [field]: value } });

  const removeNominee = (index) => dispatch({ type: "REMOVE_NOMINEE", index });

  return (
    <fieldset>
      <legend>Nominee Details</legend>

      {formData.nominees.map((nominee, index) => (
        <fieldset key={index}>
          <legend>
            Nominee {index + 1}{" "} 
          </legend>

          <label>Name</label>
          <input value={nominee.name} onChange={(e) => handleNomineeChange(index, "name", e.target.value)} />

          <label>Relationship</label>
          <input value={nominee.relationship} onChange={(e) => handleNomineeChange(index, "relationship", e.target.value)} />

          <label>Percentage Share</label>
          <input value={nominee.share} onChange={(e) => handleNomineeChange(index, "share", e.target.value)} />
          <span><button type="button" onClick={() => removeNominee(index)}>Remove Nominee</button></span>
        </fieldset>
      ))}

      <button type="button" onClick={addNominee}>+ Add Nominee</button>
    </fieldset>
  );
}
