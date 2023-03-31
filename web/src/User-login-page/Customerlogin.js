import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const welcometitle = 'Welcome back Dear Customer. Please login your account with your SSN and password'

const Customerlogin = () => {
    
    const [SSN, setSSN] = useState('');
    const [eMessage, setEMessage] = useState('')
    
    let navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/login/customer", {SSN});
            console.log(response.data);
            navigate("/customerpage");
        } catch (error) {
            console.error(error.message);
            setEMessage("SSN or isn't correct");
        }
        
        

    }
    return (
        <div>
            <h1>{welcometitle}</h1>
            <form onSubmit={handleLogin}>
                <label for="SSN">SSN</label>
                <br></br>
                <input value={SSN} onChange={(e) => setSSN(e.target.value)} type="SSN" placeholder="your SSN" id="SSN" name="SSN" required/>
                <button>Login</button>
            </form>
            {eMessage && <div>{eMessage}</div> }
        </div>
    );
}
 
export default Customerlogin;

