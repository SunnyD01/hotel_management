import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function Landing() {
  let navigate = useNavigate();

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

  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/hotel")
      .then((response) => {
        setDataArray(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      {selectedAddress && (
        <div>
          <button onClick={toggleBooking}>Book Now</button>
          <button onClick={toggleRoom}>View Rooms</button>
        </div>
      )}
    </div>
  );
}

export default Landing;
