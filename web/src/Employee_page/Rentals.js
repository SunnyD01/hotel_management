import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Rentals() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const selectedAddress = decodeURIComponent(params.get("address"));
  const hotelId = params.get("hotel_id");

  const [rentings, setRentings] = useState([]);
  const [archivedRentingIds, setArchivedRentingIds] = useState([]);

  useEffect(() => {
    async function fetchRentings() {
      try {
        const response = await axios.get(
          `http://localhost:8000/rentings/hotels/${hotelId}`
        );
        setRentings(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRentings();
  }, [hotelId]);

  async function handleArchiveRenting(rentingId) {
    try {
      await axios.put(`http://localhost:8000/rentings/${rentingId}`, {
        archive: true,
      });
      setRentings((prevRentings) =>
        prevRentings.map((renting) =>
          renting.renting_id === rentingId
            ? { ...renting, archive: true }
            : renting
        )
      );
      setArchivedRentingIds((prevArchivedRentingIds) => [
        ...prevArchivedRentingIds,
        rentingId,
      ]);
    } catch (error) {
      console.error(error);
    }
  }

  const handleGoBack = () => {
    navigate(`/landing?address=${selectedAddress}`);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px",
        }}
      >
        <button onClick={handleGoBack}>Go Back</button>
      </div>
      <h1>Hotel ID: {hotelId}</h1>
      <h1>Address: {selectedAddress}</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {rentings.map((renting) => (
          <li
            key={renting.renting_id}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            <h2 style={{ marginBottom: "5px" }}>Room {renting.room_id}</h2>
            <p style={{ margin: 0 }}>
              Check-in: {new Date(renting.checkin_date).toLocaleDateString()}
            </p>
            <p style={{ margin: 0 }}>
              Check-out: {new Date(renting.checkout_date).toLocaleDateString()}
            </p>
            <p style={{ margin: 0 }}>Customer SSN: {renting.customer}</p>
            <p style={{ margin: 0 }}>Payment Method: {renting.payment}</p>
            {archivedRentingIds.includes(renting.renting_id) ? (
              <button disabled>Renting Archived</button>
            ) : (
              <button onClick={() => handleArchiveRenting(renting.renting_id)}>
                Archive Renting
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rentals;
