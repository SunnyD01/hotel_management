import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchFilter = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [roomCapacity, setRoomCapacity] = useState("");
  const [area, setArea] = useState("");
  const [hotelChain, setHotelChain] = useState("");
  const [hotelCategory, setHotelCategory] = useState("");
  const [rooms, setRooms] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8000/Search/Rooms?startDate=${startDate}&endDate=${endDate}&roomCapacity=${roomCapacity}&area=${area}&hotelChain=${hotelChain}&hotelCategory=${hotelCategory}&minPrice=${minPrice}&maxPrice=${maxPrice}`
      );

      setRooms(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBookNowClick = (room) => {
    const roomString = encodeURIComponent(JSON.stringify(room));
    navigate(`/bookingPage?room=${roomString}`);
  };

  return (
    <div>
      <h1>Search Filter</h1>
      <form onSubmit={handleSearch}>
        <label htmlFor="startDate">Start date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <label htmlFor="endDate">End date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <label htmlFor="roomCapacity">Room capacity:</label>
        <input
          type="number"
          id="roomCapacity"
          value={roomCapacity}
          onChange={(e) => setRoomCapacity(e.target.value)}
        />

        <label htmlFor="area">Area:</label>
        <input
          type="text"
          id="area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />

        <label htmlFor="hotelChain">Hotel chain:</label>
        <input
          type="text"
          id="hotelChain"
          value={hotelChain}
          onChange={(e) => setHotelChain(e.target.value)}
        />

        <label htmlFor="hotelCategory">Hotel category:</label>
        <select
          id="hotelCategory"
          value={hotelCategory}
          onChange={(e) => setHotelCategory(e.target.value)}
        >
          <option value="">All categories</option>
          <option value="1">1 star</option>
          <option value="2">2 stars</option>
          <option value="3">3 stars</option>
          <option value="4">4 stars</option>
          <option value="5">5 stars</option>
        </select>

        <label htmlFor="minPrice">Min price:</label>
        <input
          type="number"
          id="minPrice"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <label htmlFor="maxPrice">Max price:</label>
        <input
          type="number"
          id="maxPrice"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {rooms.map((room) => (
          <li
            key={room.room_id}
            style={{
              border: "1px solid black",
              backgroundColor:
                selectedRoomId == room.room_id ? "yellow" : "white",
            }}
            onClick={() =>
              setSelectedRoomId((prevSelectedRoomId) =>
                prevSelectedRoomId === room.room_id ? null : room.room_id
              )
            }
          >
            <h2>{room.room_id}</h2>
            <p>Capacity: {room.capacity}</p>
            <p>Type of View: {room.type_of_view}</p>
            <p>Amenities: {room.amenities}</p>
            <p>Extension: {room.ext ? "Yes" : "No"}</p>
            <p>Price: {room.price}</p>
            <button
              style={{ marginTop: "10px" }}
              onClick={() => handleBookNowClick(room)}
            >
              Book Now
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
