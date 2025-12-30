import React from "react";
import "../../../components/employee-form/style.css";
export default function Index() {
  let count = 0;
let countNominee = 0;
function addChild() {
  count++;
  const div = document.createElement("div");
  div.innerHTML = `
    <h3>Child ${count}</h3>
    <label for="childName${count}">Child Name</label><input id="childName${count}" name="childName${count}" placeholder="Enter child name">
    <label for="childDob${count}">Date of Birth</label><input id="childDob${count}" name="childDob${count}" type="date">
    <label>Aadhaar Front</label><input type="file" name="childAadhaarFront${count}">
    <label>Aadhaar Back</label><input type="file" name="childAadhaarBack${count}">
    <label>Passport Front</label><input type="file" name="childPassportFront${count}">
    <label>Passport Back</label><input type="file" name="childPassportBack${count}">
    <label>Passport Size Photo</label><input type="file" name="childPassportPhoto${count}">
    <hr>
  `;
  document.getElementById("children").appendChild(div);
}
function addNominee() {
  countNominee++;
  const div = document.createElement("div");
  div.innerHTML = `
    <h3>Nominee ${countNominee}</h3>
    <label for="nomineeName${countNominee}">Nominee Name</label><input id="nomineeName${countNominee}" name="nomineeName${countNominee}" placeholder="Enter nominee name">
    <label for="nomineeRelationship${countNominee}">Relationship</label><input id="nomineeRelationship${countNominee}" name="nomineeRelationship${countNominee}" placeholder="Enter relationship">
    <label for="nomineeShare${countNominee}">Percentage Share</label><input id="nomineeShare${countNominee}" name="nomineeShare${countNominee}" placeholder="Enter percentage share">
    <hr>
  `;
  document.getElementById("nominees").appendChild(div);
}
  return (
    <div className="container">
        <h1 className="text-2xl">Employee Joining Form</h1>
      <form 
      id="joiningForm" 
      method="post" 
      encType="multipart/form-data" 
      action="http://localhost:5000/api/employees/join">
            <fieldset><legend>Employee Basic Details</legend>
            <label htmlFor="fullName">Full Name</label>
            <input id="fullName" name="fullName" placeholder="Enter full name"/>
            <label htmlFor="dob">Date of Birth</label><input id="dob" name="dob" type="date"/>
            <label htmlFor="gender">Gender</label><select id="gender" name="gender"><option value="">Select Gender</option><option value="Male">Male</option><option value="Female">Female</option></select>
            <label htmlFor="maritalStatus">Marital Status</label><select id="maritalStatus" name="maritalStatus"><option value="">Select Marital Status</option><option value="Married">Married</option><option value="Unmarried">Unmarried</option></select>
            <label htmlFor="mobile">Mobile Number</label><input id="mobile" name="mobile" placeholder="Enter mobile number"/>
            <label htmlFor="email">Email</label><input id="email" name="email" placeholder="Enter email"/>
            <label htmlFor="bloodGroup">Blood Group</label><input id="bloodGroup" name="bloodGroup" placeholder="Enter blood group"/>
            </fieldset>

            <fieldset><legend>Address Details</legend>
            <label htmlFor="currentAddress">Current Address</label><input id="currentAddress" name="currentAddress" placeholder="Enter current address"/>
            <label htmlFor="permanentAddress">Permanent Address</label><input id="permanentAddress" name="permanentAddress" placeholder="Enter permanent address"/>
            </fieldset>

            <fieldset><legend>Employee KYC</legend>
            <label htmlFor="aadhaar">Aadhaar Number</label><input id="aadhaar" name="aadhaarNumber" placeholder="Enter Aadhaar number"/>
            <label>Aadhaar Front</label><input type="file" name="aadhaarFront"  />
            <label>Aadhaar Back</label><input type="file" name="aadhaarBack"/>
            <label htmlFor="pan">PAN Number</label><input id="pan" name="pan" placeholder="Enter PAN number"/>
            <label>PAN Front</label><input type="file" name="panFront"/>
            <label>PAN Back</label><input type="file" name="panBack"/>
            <label htmlFor="passport">Passport Number</label><input id="passport" name="passport" placeholder="Enter passport number"/>
            <label>Passport Front</label><input type="file" name="passportFront"/>
            <label>Passport Back</label><input type="file" name="passportBack"/>
            <label htmlFor="dl">Driving License Number</label><input id="dl" name="dl" placeholder="Enter driving license number"/>
            <label>DL Front</label><input type="file" name="dlFront"/>
            <label>DL Back</label><input type="file" name="dlBack"/>
            <label htmlFor="rationCard">Ration Card Number</label><input id="rationCard" name="rationCard" placeholder="Enter ration card number" />
            <label>Ration Card Front</label><input type="file" name="rationCardFront"/>
            <label>Ration Card Back</label><input type="file" name="rationCardBack"/>
            </fieldset>

            <fieldset><legend>Photo & Signature</legend>
            <label>Employee Photo</label><input type="file" name="employeePhoto"/>
            <label>Signature</label><input type="file" name="signature"/>
            </fieldset>

            <fieldset><legend>Father Details</legend>
            <label htmlFor="fatherName">Father Name</label><input id="fatherName" name="fatherName" placeholder="Enter father name"/>
            <label>Aadhaar Front</label><input type="file" name="fatherAadhaarFront"/>
            <label>Aadhaar Back</label><input type="file" name="fatherAadhaarBack"/>
            <label>PAN Front</label><input type="file" name="fatherPanFront"/>
            <label>PAN Back</label><input type="file" name="fatherPanBack"/>
            <label>Passport Size Photo</label><input type="file" name="fatherPassportPhoto"/>
            </fieldset>

            <fieldset><legend>Mother Details</legend>
            <label htmlFor="motherName">Mother Name</label><input id="motherName" name="motherName" placeholder="Enter mother name"/>
            <label>Aadhaar Front</label><input type="file" name="motherAadhaarFront"/>
            <label>Aadhaar Back</label><input type="file" name="motherAadhaarBack"/>
            <label>Passport Size Photo</label><input type="file" name="motherPassportPhoto"/>
            </fieldset>

            <fieldset><legend>Wife Details</legend>
            <label htmlFor="wifeName">Wife Name</label><input id="wifeName" name="wifeName" placeholder="Enter wife name"/>
            <label>Aadhaar Front</label><input type="file" name="wifeAadhaarFront"/>
            <label>Aadhaar Back</label><input type="file" name="wifeAadhaarBack"/>
            <label>Passport Size Photo</label><input type="file" name="wifePassportPhoto"/>
            <label>Marriage Certificate</label><input type="file" name="wifeMarriageCertificate"/>
            </fieldset>

            <fieldset>
            <legend>Children Details</legend>
            <div id="children"></div>
            <button className="button" type="button" onClick={addChild}>Add Child</button>
            </fieldset>

            <fieldset><legend>Bank & Statutory</legend>
            <label htmlFor="bankName">Bank Name</label><input id="bankName" name="bankName" placeholder="Enter bank name" />
            <label htmlFor="accountHolder">Account Holder Name</label><input id="accountHolder" name="accountHolder" placeholder="Enter account holder name" />
            <label htmlFor="accountNumber">Account Number</label><input id="accountNumber" name="accountNumber" placeholder="Enter account number" />
            <label htmlFor="ifsc">IFSC Code</label><input id="ifsc" name="ifsc" placeholder="Enter IFSC code" />
            <label>Bank Passbook/Cancelled Cheque/Bank Statement(Anyone doc)</label><input type="file" name="bankDocument" />
            <label htmlFor="uan">UAN Number</label><input id="uan" name="uan" placeholder="Enter UAN number" />
            <label htmlFor="esi">ESI Number</label><input id="esi" name="esi" placeholder="Enter ESI number"  />
            </fieldset>

            <fieldset><legend>Education Details</legend>
            <label htmlFor="qualification">Highest Qualification</label><input id="qualification" name="qualification" placeholder="Enter highest qualification"  />
            <label htmlFor="institution">Institution Name</label><input id="institution" name="institution" placeholder="Enter institution name" />
            <label htmlFor="year">Year of Passing</label><input id="year" name="year" placeholder="Enter year of passing" />
            <label>Education Certificate</label><input type="file" name="educationCertificate" />
            </fieldset>

            <fieldset><legend>Employment Details</legend>
            <label htmlFor="totalExperience">Total Experience</label><input id="totalExperience" name="totalExperience" placeholder="Enter total experience"  />
            <label htmlFor="lastCompany">Last Company Name</label><input id="lastCompany" name="lastCompany" placeholder="Enter last company name" />
            <label htmlFor="lastDesignation">Last Designation</label><input id="lastDesignation" name="lastDesignation" placeholder="Enter last designation" />
            <label>Experience Letter</label><input type="file" name="experienceLetter" />
            <label>Last Payslip</label><input type="file" name="lastPayslip" />
            <label>Relieving Letter</label><input type="file" name="relievingLetter" />
            </fieldset>

            <fieldset><legend>Nominee Details (Gratuity Form F) (PF Form 11) (ESI Form 1) and For all statutory purpose</legend>
            <div id="nominees"></div>
            <button className="button" type="button" onClick={addNominee}>Add Nominee(Click here)</button>
            </fieldset>

            <fieldset><legend>Emergency Contact</legend>
            <label htmlFor="emergencyContactName">Contact Name</label><input id="emergencyContactName" name="emergencyContactName" placeholder="Enter contact name" />
            <label htmlFor="emergencyRelationship">Relationship</label><input id="emergencyRelationship" name="emergencyRelationship" placeholder="Enter relationship" />
            <label htmlFor="emergencyMobile">Mobile Number</label><input id="emergencyMobile" name="emergencyMobile" placeholder="Enter mobile number" />
            </fieldset>

            <button className="navigation-buttons submit" type="submit" >
                Submit
            </button>
        </form>
    </div>
  );
}