import React, { useState } from "react";
import Axios from "axios";

function CreateCustomerAccount() {
  const [ssn, setSsn] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:8000/new/account", {
      ssn: ssn,
      fname: fname,
      lname: lname,
      address: address,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>Create Customer Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          SSN:
          <input
            type="text"
            value={ssn}
            onChange={(e) => setSsn(e.target.value)}
          />
        </label>
        <br />
        <label>
          First Name:
          <input
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default CreateCustomerAccount;
