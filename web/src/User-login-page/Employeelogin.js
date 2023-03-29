import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

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
      setErrorMessage("SSN not registered");
    }
  };

  return (
    <div>
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
