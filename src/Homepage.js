const homepage = () => {
    
    const handleClickCustomer = () => {
        //head to customer login page
    }
    
    const handleClickEmployee = () => {
        //head to employee login page
    }
    
    
    return (  
        <div classroom="homepage">
            <h1>Login</h1>
            <button onClick={handleClickCustomer}>Login as a Customer</button>
            <button onClick={handleClickEmployee}>Login as a Employee</button>
        </div>
    );
}
 
export default homepage;