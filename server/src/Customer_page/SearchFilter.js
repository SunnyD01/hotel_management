import {useState} from "react"
//import axios from "axios"

const SearchFilter = () => {
    
  const [city, setCity] = useState('');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [capacity, setCapacity] = useState(1);

  const [stars, setStars] = useState([]);
  const [price, setPrice] = useState([]);
  const [numRooms, setNumRooms] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [chain, setChain] = useState('');

  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get("/api/search", {
        city,
        checkin,
        checkout,
        capacity,
        stars,
        price,
        numRooms,
        amenities,
        chain,
      });
      setResults(response.data)
    } catch (error) {
      console.error(error)
    } 
    
  };

  /*const hotelList = hotel.map((hotel) => {
    return (
      <div key={hotel.hotel_id}>
        <h2>{hotel.hotel_id}</h2>
        <p>Address: {hotel.address}</p>
        <p>Capacity: {hotel.capacity}</p>
      </div>
    );
  });*/
  
  return (
      
    <div>
      <label htmlFor="city">City:</label>
      <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} required/>
      
      <label htmlFor="checkin">Check-in:</label>
      <input type="date" id="checkin" value={checkin} onChange={(e) => setCheckin(e.target.value)} required/>

      <label htmlFor="checkout">Check-out:</label>
      <input type="date" id="checkout" value={checkout} onChange={(e) => setCheckout(e.target.value)} required/>
      
      <label htmlFor="capacity">Capacity minimum:</label>
      <input type="number" id="capacity" min="1" value={capacity} onChange={(e) => setCapacity(e.target.value)} required/>
      
      <br/>

      <label htmlFor="stars">Minimum stars:</label>
      <select id="stars" value={stars} onChange={(e) => setStars(Array.from(e.target.selectedOptions, (option) => option.value))}>
        <option value="1">1 star</option>
        <option value="2">2 stars</option>
        <option value="3">3 stars</option>
        <option value="4">4 stars</option>
        <option value="5">5 stars</option>
      </select>

      <label htmlFor="price">Price range:</label>
      <input type="range" id="price" min="50" max="1000" onChange={(e) => setPrice(e.target.value)}/>
      
      <label htmlFor="numRooms">Number of rooms:</label>
      <input type="number" id="numRooms" min="1" max="10" onChange={(e) => setNumRooms(e.target.value)}/>

      <br/>

      <label htmlFor="amenities">Amenities:</label>
      <div id="amenities">
        <label>
          <input type="checkbox" name="pool" value="pool" onChange={(e) => setAmenities(e.target.value)}/>
          Pool
        </label>
        <label>
          <input type="checkbox" name="gym" value="gym" onChange={(e) => setAmenities(e.target.value)}/>
          Gym
        </label>
        <label>
          <input type="checkbox" name="spa" value="spa" onChange={(e) => setAmenities(e.target.value)}/>
          Spa
        </label>
        <label>
          <input type="checkbox" name="tv" value="tv" onChange={(e) => setAmenities(e.target.value)}/>
          TV
        </label>
        <label>
          <input type="checkbox" name="fridge" value="firdge" onChange={(e) => setAmenities(e.target.value)}/>
          Fridge
        </label>
      </div>

      <label htmlFor="chain">Hotel chain:</label>
      <select id="chain" onChange={(e) => setChain(e.target.value)}>
        <option value="">Any</option>
        <option value="Marriott">Marriott</option>
        <option value="Hilton">Hilton</option>
        <option value="Hyatt">Hyatt</option>
        <option value="Accor">Accor</option>
      </select>
      
      <button onClick={handleSearch}>Search</button>

    </div>
    );
}
 
export default SearchFilter;