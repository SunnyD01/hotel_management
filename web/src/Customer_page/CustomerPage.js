import SearchFilter from "./SearchFilter";
import Navbar from "../Navbar";

const welcometitle = "Search For the Hotel you want here"

const CustomerPage = () => {

    return (
        <div>
            <h1>{welcometitle}</h1>
            <Navbar/>
            <SearchFilter/>
        </div>
        
    );
}
 
export default CustomerPage;