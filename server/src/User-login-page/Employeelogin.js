import Navbar from "../Navbar";
import { useState } from "react";

const welcometitle = 'Welcome back Employee No.1'

const Employeelogin = () => {
    
    const [SSN, setSSN] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(SSN)
    }
    
    
    return (
        <div>
            <h1>{welcometitle}</h1>
            <Navbar/>
            <form onSubmit={handleLogin}>
                <label for="SSN">SSN</label>
                <input value={SSN} onChange={(e) => setSSN(e.target.value)} type="SSN " placeholder="your SSN" id="SSN" name="SSN"/>
                <button>login</button>
            </form>
        </div>
    );
}
 
export default Employeelogin;
