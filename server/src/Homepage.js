import {useNavigate} from 'react-router-dom'
const Homepage = () => {
    
    let navigate = useNavigate();

    const handleClickCustomer = () => {
        navigate("/customerlogin")
    }
    
    const handleClickEmployee = () => {
        navigate("/employeelogin")
    }
    
    
    return (  
        <div classroom="homepage">
            <h1>Login</h1>
            <button onClick={handleClickCustomer}>Login as a Customer</button>
            <button onClick={handleClickEmployee}>Login as a Employee</button>
        </div>
    );
}
 
export default Homepage;