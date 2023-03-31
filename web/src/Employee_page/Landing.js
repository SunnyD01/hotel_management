import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";

function Landing() {
  let navigate = useNavigate();
  let location = useLocation();

  const revertedAddress = new URLSearchParams(location.search).get("address");

  const toggleBooking = () => {
    const selectedHotel = dataArray.find(
      (item) => item.address === selectedAddress
    );
    if (selectedHotel) {
      const { hotel_id, address } = selectedHotel;
      navigate(
        `/booking?hotel_id=${hotel_id}&address=${encodeURIComponent(address)}`
      );
    }
  };

  const toggleRoom = () => {
    const selectedHotel = dataArray.find(
      (item) => item.address === selectedAddress
    );
    if (selectedHotel) {
      const { hotel_id, address } = selectedHotel;
      navigate(
        `/rooms?hotel_id=${hotel_id}&address=${encodeURIComponent(address)}`
      );
    }
  };

  const toggleRenting = () => {
    const selectedHotel = dataArray.find(
      (item) => item.address === selectedAddress
    );
    if (selectedHotel) {
      const { hotel_id, address } = selectedHotel;
      navigate(
        `/rentals?hotel_id=${hotel_id}&address=${encodeURIComponent(address)}`
      );
    }
  };

  const toggleArchives = () => {
    const selectedHotel = dataArray.find(
      (item) => item.address === selectedAddress
    );
    if (selectedHotel) {
      const { hotel_id, address } = selectedHotel;
      navigate(
        `/archived?hotel_id=${hotel_id}&address=${encodeURIComponent(address)}`
      );
    }
  };

  const createCustomerAccount = () => {
    navigate("/create-customer-account");
  };

  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/hotel")
      .then((response) => {
        setDataArray(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // Set initial value of selectedAddress to revertedAddress if it exists
    setSelectedAddress(revertedAddress || "");
  }, [revertedAddress]);

  const [selectedAddress, setSelectedAddress] = useState("");

  function handleAddressChange(event) {
    setSelectedAddress(event.target.value);
  }

  return (
    <div>
      <select value="selectedAddress" onChange={handleAddressChange}>
        <option>Select an address</option>
        {dataArray.map((item) => (
          <option key={item.hotel_id} value={item.address}>
            {item.address}
          </option>
        ))}
      </select>
      <h1>You selected: {selectedAddress}</h1>
      <button
        style={{ marginright: "100px", marginBottom: "100px" }}
        onClick={createCustomerAccount}
      >
        Create Customer Account
      </button>
      {selectedAddress && (
        <div>
          <button style={{ marginRight: "100px" }} onClick={toggleBooking}>
            View Bookings
          </button>
          <button style={{ marginRight: "100px" }} onClick={toggleRoom}>
            View Rooms
          </button>
          <button style={{ marginRight: "100px" }} onClick={toggleRenting}>
            View Rentings
          </button>
          <button style={{ marginRight: "100px" }} onClick={toggleArchives}>
            View Archives
          </button>
        </div>
      )}
    </div>
  );
}

export default Landing;
