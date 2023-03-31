import { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const welcometitle = "Welcome Back Valued Employee";

const Employeelogin = () => {
  const [SSN, setSSN] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        "http://localhost:8000/login_employee",
        {
          ssn: SSN,
        }
      );
      console.log(response.data);
      navigate("/landing");
    } catch (error) {
      console.log(error.message);
      if (error.response.status === 404) {
        setErrorMessage("SSN not registered");
      } else {
        setErrorMessage("An error occurred");
      }
    }
  };

  return (
    <div>
      <div
        className="header"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px",
        }}
      >
        <Link
          to="/"
          className="back-button"
          style={{
            backgroundColor: "#333",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
          }}
        >
          Go back
        </Link>
      </div>
      <h1>{welcometitle}</h1>
      <form onSubmit={handleLogin}>
        <label for="SSN">SSN</label>
        <input
          value={SSN}
          onChange={(e) => setSSN(e.target.value)}
          type="SSN "
          placeholder="your SSN"
          id="SSN"
          name="SSN"
          required
        />
        <button>login</button>
      </form>
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};

export default Employeelogin;
