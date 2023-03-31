import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const welcometitle =
  "Welcome back Dear Customer. Please login your account with your SSN";

const Customerlogin = () => {
  const [SSN, setSSN] = useState("");
  const [eMessage, setEMessage] = useState("");

  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!SSN) {
      setEMessage("Please enter your SSN");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8000/login", {
        ssn: SSN,
      });
      console.log(response.data);
      navigate("/customerpage", { state: { ssn: SSN } });
    } catch (error) {
      console.error(error.message);
      setEMessage("SSN or password is incorrect");
    }
  };

  const handleCreateAccountClick = () => {
    navigate("/create-customer-account");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1 style={{ marginBottom: "2rem" }}>{welcometitle}</h1>
      <br />
      <form onSubmit={handleLogin} style={{ textAlign: "center" }}>
        <label htmlFor="SSN">Please Enter SSN To Login</label>
        <br />
        <br />
        <input
          value={SSN}
          onChange={(e) => setSSN(e.target.value)}
          type="SSN"
          placeholder="Your SSN"
          id="SSN"
          name="SSN"
          required
        />
        <div style={{ marginTop: "2rem" }}>
          <button>Login</button>
          <button onClick={handleCreateAccountClick}>Create Account</button>
        </div>
      </form>
      {eMessage && <div>{eMessage}</div>}
    </div>
  );
};

export default Customerlogin;
