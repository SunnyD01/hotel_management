import SearchFilter from "./SearchFilter";
import Navbar from "../Navbar";

const welcometitle = "Search For the Hotel you want here"

const CustomerPage = () => {

    return (
        <div>
            <h1>{welcometitle}</h1>
            <Navbar/>
            <SearchFilter/>


            <p1 c>Searching results is below</p1>
        </div>
        
    );
}
 
export default CustomerPage;