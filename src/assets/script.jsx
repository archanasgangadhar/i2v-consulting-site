import React, { useState } from "react";

export default function script() {
  const [children, setChildren] = useState([]);
  const [nominees, setNominees] = useState([]);

  // Add new child
  const addChild = () => {
    setChildren([
      ...children,
      { name: "", dob: "", aadhaarFront: null, aadhaarBack: null, passportFront: null, passportBack: null, photo: null }
    ]);
  };

  // Add new nominee
  const addNominee = () => {
    setNominees([...nominees, { name: "", relationship: "", share: "" }]);
  };

  // Handle change for children fields
  const handleChildChange = (index, field, value) => {
    const updated = [...children];
    updated[index][field] = value;
    setChildren(updated);
  };

  // Handle change for nominee fields
  const handleNomineeChange = (index, field, value) => {
    const updated = [...nominees];
    updated[index][field] = value;
    setNominees(updated);
  };

  // Form submit
  const submitForm = (e) => {
    e.preventDefault();
    console.log("Children:", children);
    console.log("Nominees:", nominees);
    alert("Joining form submitted (Demo)");
  };

  return (
    <div className="container">
      <h1>Employee Joining Form</h1>
      <form onSubmit={submitForm}>
        {/* Children Section */}
        <fieldset>
          <legend>Children Details</legend>
          {children.map((child, index) => (
            <div key={index}>
              <h3>Child {index + 1}</h3>
              <label>Child Name</label>
              <input
                placeholder="Enter child name"
                value={child.name}
                onChange={(e) => handleChildChange(index, "name", e.target.value)}
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
              <label>Passport Front</label>
              <input type="file" onChange={(e) => handleChildChange(index, "passportFront", e.target.files[0])} />
              <label>Passport Back</label>
              <input type="file" onChange={(e) => handleChildChange(index, "passportBack", e.target.files[0])} />
              <label>Passport Size Photo</label>
              <input type="file" onChange={(e) => handleChildChange(index, "photo", e.target.files[0])} />
              <hr />
            </div>
          ))}
          <button type="button" onClick={addChild}>Add Child</button>
        </fieldset>

        {/* Nominee Section */}
        <fieldset>
          <legend>Nominee Details</legend>
          {nominees.map((nominee, index) => (
            <div key={index}>
              <h3>Nominee {index + 1}</h3>
              <label>Nominee Name</label>
              <input
                placeholder="Enter nominee name"
                value={nominee.name}
                onChange={(e) => handleNomineeChange(index, "name", e.target.value)}
              />
              <label>Relationship</label>
              <input
                placeholder="Enter relationship"
                value={nominee.relationship}
                onChange={(e) => handleNomineeChange(index, "relationship", e.target.value)}
              />
              <label>Percentage Share</label>
              <input
                placeholder="Enter percentage share"
                value={nominee.share}
                onChange={(e) => handleNomineeChange(index, "share", e.target.value)}
              />
              <hr />
            </div>
          ))}
          <button type="button" onClick={addNominee}>Add Nominee</button>
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
