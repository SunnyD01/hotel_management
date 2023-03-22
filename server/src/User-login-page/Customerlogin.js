import Navbar from "../Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const welcometitle = 'Welcome back Dear Customer. Please login your account with your SSN and password'

const Customerlogin = () => {
    
    const [SSN, setSSN] = useState('');
    const [password, setPass] = useState('');
    
    let navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(SSN)
        navigate("/customerpage")

    }
    return (
        <div>
            <h1>{welcometitle}</h1>
            <Navbar/>
            <form onSubmit={handleLogin}>
                <label for="SSN">SSN</label>
                <input value={SSN} onChange={(e) => setSSN(e.target.value)} type="SSN" placeholder="your SSN" id="SSN" name="SSN"/>
                <label for="password">password---</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="password" id="password" name="password"/>
                <button>Login</button>
            </form>
        </div>
    );
}
 
export default Customerlogin;

