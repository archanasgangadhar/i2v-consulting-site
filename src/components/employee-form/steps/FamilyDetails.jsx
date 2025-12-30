import React from "react";

export default function FamilyDetails({ formData, dispatch }) {
  const handleChange = (e, field) =>
    dispatch({ type: "UPDATE_FIELD", field, value: e.target.value });

  const handleFileChange = (e, field) =>
    dispatch({ type: "UPDATE_FIELD", field, value: e.target.files[0] });

  // Children
  const addChild = () =>
    dispatch({
      type: "ADD_CHILD",
      value: { name: "", dob: "", aadhaarFront: null, aadhaarBack: null, passportSizePhoto: null },
    });

  const handleChildChange = (index, field, value) =>
    dispatch({ type: "UPDATE_CHILD", index, value: { [field]: value } });

  const removeChild = (index) => dispatch({ type: "REMOVE_CHILD", index });

  return (
    <section>
      {/* Father */}
      {formData.showFather && (
        <fieldset className="family-section">
          <legend>Father Details</legend>
          <label>Father Name</label>
          <input value={formData.fatherName} onChange={(e) => handleChange(e, "fatherName")} />
          <label>Aadhaar Front</label>
          <input type="file" onChange={(e) => handleFileChange(e, "fatherAadhaarFront")} />
          <label>Aadhaar Back</label>
          <input type="file" onChange={(e) => handleFileChange(e, "fatherAadhaarBack")} />
          <label>PAN Front</label>
          <input type="file" onChange={(e) => handleFileChange(e, "fatherPanFront")} />
          <label>PAN Back</label>
          <input type="file" onChange={(e) => handleFileChange(e, "fatherPanBack")} />
          <label>Passport Size Photo</label>
          <input type="file" onChange={(e) => handleFileChange(e, "fatherPhoto")} />
        </fieldset>
      )}

      {/* Mother */}
      {formData.showMother && (
        <fieldset className="family-section">
          <legend>Mother Details</legend>
          <label>Mother Name</label>
          <input value={formData.motherName} onChange={(e) => handleChange(e, "motherName")} />
          <label>Aadhaar Front</label>
          <input type="file" onChange={(e) => handleFileChange(e, "motherAadhaarFront")} />
          <label>Aadhaar Back</label>
          <input type="file" onChange={(e) => handleFileChange(e, "motherAadhaarBack")} />
          <label>Passport Size Photo</label>
          <input type="file" onChange={(e) => handleFileChange(e, "motherPhoto")} />
        </fieldset>
      )}

      {/* Wife */}
      {formData.gender === "Male" && formData.maritalStatus === "Married" && (
        <fieldset className="family-section">
          <legend>Wife Details</legend>
          <label>Wife Name</label>
          <input value={formData.wifeName} onChange={(e) => handleChange(e, "wifeName")} />
          <label>Aadhaar Front</label>
          <input type="file" onChange={(e) => handleFileChange(e, "wifeAadhaarFront")} />
          <label>Aadhaar Back</label>
          <input type="file" onChange={(e) => handleFileChange(e, "wifeAadhaarBack")} />
          <label>Passport Size Photo</label>
          <input type="file" onChange={(e) => handleFileChange(e, "wifePhoto")} />
          <label>Marriage Certificate</label>
          <input type="file" onChange={(e) => handleFileChange(e, "marriageCertificate")} />
        </fieldset>
      )}

      {/* Husband */}
      {formData.gender === "Female" && formData.maritalStatus === "Married" && (
        <fieldset className="family-section">
          <legend>Husband Details</legend>
          <label>Husband Name</label>
          <input value={formData.husbandName} onChange={(e) => handleChange(e, "husbandName")} />
          <label>Aadhaar Front</label>
          <input type="file" onChange={(e) => handleFileChange(e, "husbandAadhaarFront")} />
          <label>Aadhaar Back</label>
          <input type="file" onChange={(e) => handleFileChange(e, "husbandAadhaarBack")} />
          <label>Passport Size Photo</label>
          <input type="file" onChange={(e) => handleFileChange(e, "husbandPhoto")} />
          <label>Marriage Certificate</label>
          <input type="file" onChange={(e) => handleFileChange(e, "marriageCertificate")} />
        </fieldset>
      )}

      {/* Children */}
      {formData.maritalStatus === "Married" && (
        <fieldset className="family-section">
          <legend>Children</legend>
          {(formData.children || []).map((child, index) => (
            <fieldset key={index} className="child-entry">
              <legend>
                Child {index + 1}{" "}
                
              </legend>
              <label>Name</label>
              <input
                value={child.name}
                onChange={(e) => handleChildChange(index, "name", e.target.value)}
              />
              <label>DOB</label>
              <input
                type="date"
                value={child.dob}
                onChange={(e) => handleChildChange(index, "dob", e.target.value)}
              />
              <label>Aadhaar Front</label>
              <input
                type="file"
                onChange={(e) => handleChildChange(index, "aadhaarFront", e.target.files[0])}
              />
              <label>Aadhaar Back</label>
              <input
                type="file"
                onChange={(e) => handleChildChange(index, "aadhaarBack", e.target.files[0])}
              />
              <label>Passport Size Photo</label>
              <input
                type="file"
                onChange={(e) =>
                  handleChildChange(index, "passportSizePhoto", e.target.files[0])
                }
              />
              <span>
                <button type="button" onClick={() => removeChild(index)}>
                  Remove Child
                </button>
              </span>
            </fieldset>
          ))}
          <button type="button" onClick={addChild}>
            + Add Child
          </button>
        </fieldset>
      )}
    </section>
  );
}
