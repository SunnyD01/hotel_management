import SearchFilter from "./SearchFilter";
import { useLocation, useNavigate } from "react-router-dom";

const welcometitle = "Search For the Hotel you want here";

const CustomerPage = () => {
  const location = useLocation();
  const ssn = location.state?.ssn;
  const navigate = useNavigate();

  const handleBookingRentingHistoryClick = () => {
    navigate("/bookingHistory", { state: { ssn: ssn } });
  };

  const handleHomepageClick = () => {
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Welcome to your customer page, {ssn}</h1>
      <br />
      <h1>{welcometitle}</h1>
      <div
        style={{ marginBottom: "2rem", marginTop: "2rem", textAlign: "center" }}
      >
        <button onClick={handleHomepageClick}>Homepage</button>
        <button onClick={handleBookingRentingHistoryClick}>
          Booking Renting History
        </button>
      </div>
      <SearchFilter />
    </div>
  );
};

export default CustomerPage;
