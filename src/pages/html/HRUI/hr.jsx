
export default function Hr() {
  function downloadZip() {
  const employeeId = document.getElementById("employeeId").value;
  const status = document.getElementById("status");

  if (!employeeId) {
    status.textContent = "Please enter Employee ID";
    return;
  }

  status.textContent = "Preparing ZIP, please wait...";

  // Trigger browser download
  window.location.href = `http://localhost:5000/api/employees/employee/${employeeId}/zip`;

  setTimeout(() => {
    status.textContent = "";
  }, 3000);
}
  return (
  <div className="container">
    <h2>Employee Document Download</h2>

    <label htmlFor="employeeId">Employee ID</label>
    <input type="number" id="employeeId" placeholder="Enter Employee ID"/>
   <div className="grid md:grid-cols-2 gap-10">
    
    <button className="inline-block px-10 py-3 bg-[#D32F2F] text-white font-semibold rounded-full hover:bg-[#B71C1C] transition"
          onClick={downloadZip}>Download All Documents <p id="status"></p></button>

    
    <a className="inline-block px-10 py-3 bg-[#D32F2F] text-white font-semibold rounded-full hover:bg-[#B71C1C] transition"
          href="http://localhost:5000/api/employees/hr/export/excel">
      <button>Download Full Employee Excel</button>
    </a>
    </div> 
    
  </div>

  
);
}
