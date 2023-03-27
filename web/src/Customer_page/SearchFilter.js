import {useEffect, useState} from "react"
import axios from "axios"

const SearchFilter = () => {
    
  const [city, setCity] = useState('');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [capacity, setCapacity] = useState(1);

  const [stars, setStars] = useState([]);
  const [price, setPrice] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [chain, setChain] = useState('');
  const [hotel, setHotel] = useState([]);

  const [results, setResults] = useState([]);

  /*useEffect(() => {
    const fetchData = async () => {
       const dataplace = await fetch('//the address that we want to get data from')
       const dataResult = await dataplace.json();

       setResults(dataResult)
    }

    fetchData()
  }, [])*/
  const handleFilterCityChange = (event) => {
    setCity(event.target.value);
  }

  const handleFilterCheckinChange = (event) => {
    setCheckin(event.target.value);
  }
  
  const handleFilterCheckoutChange = (event) => {
    setCheckout(event.target.value);
  }
  
  const handleFilterCapacityChange = (event) => {
    setCapacity(event.target.value);
  }
  
  const handleFilterPriceChange = (event) => {
    setPrice(event.target.value);
  }
  
  const handleFilterAmenityChange = (event) => {
    setAmenities(event.target.value);
  }
  
  const handleFilterChainChange = (event) => {
    setChain(event.target.value);
  }
  
  const handleFilterHotelChange = (event) => {
    setHotel(event.target.value);
  }
  

  const handleSearch = async () => {
    try {
      const response = await axios.get("/api's place", {
        city,
        checkin,
        checkout,
        capacity,
        price,
        amenities,
        chain,
        hotel,
      });
      setResults(response.data)
    } catch (error) {
      console.error(error)
    } 
    
  };
  
  const roomList = results.filter((results) => {
    return Object.keys(handleSearch).every(key => {
      return results[key] === handleSearch[key];
    })
  }).map((results) => {
    return (
      <div key={results.room_id}>
        <h2>{results.room_id}</h2>
        <p>Capacity: {results.capacity}</p>
      </div>
    );
  });
  
  return (
      
    <div>
      <label htmlFor="city">City:</label>
      <input type="text" id="city" defaultValue={city} onClick={handleFilterCityChange} required/>
      
      <label htmlFor="checkin">Check-in:</label>
      <input type="date" id="checkin" defaultValue={checkin} onChange={handleFilterCheckinChange} required/>

      <label htmlFor="checkout">Check-out:</label>
      <input type="date" id="checkout" defaultValue={checkout} onChange={handleFilterCheckoutChange} required/>
      
      <label htmlFor="capacity">Capacity minimum:</label>
      <input type="number" id="capacity" min="1" defaultValue={capacity} onChange={handleFilterCapacityChange} required/>
      
      <br/>

      <label htmlFor="stars">Minimum stars:</label>
      <select id="stars" defaultValue={stars} onChange={(e) => setStars(Array.from(e.target.selectedOptions, (option) => option.value))} multiple={true}>
        <option defaultValue="1">1 star</option>
        <option defaultValue="2">2 stars</option>
        <option defaultValue="3">3 stars</option>
        <option defaultValue="4">4 stars</option>
        <option defaultValue="5">5 stars</option>
      </select>

      <label htmlFor="price">Price range:</label>
      <input type="range" id="price" min="50" max="1000" onChange={handleFilterPriceChange}/> 

      <br/>

      <label htmlFor="amenities">Amenities:</label>
      <div id="amenities">
        <label>
          <input type="checkbox" name="pool" defaultValue="pool" onChange={handleFilterAmenityChange}/>
          Pool
        </label>
        <label>
          <input type="checkbox" name="gym" defaultValue="gym" onChange={handleFilterAmenityChange}/>
          Gym
        </label>
        <label>
          <input type="checkbox" name="spa" defaultValue="spa" onChange={handleFilterAmenityChange}/>
          Spa
        </label>
        <label>
          <input type="checkbox" name="tv" defaultValue="tv" onChange={handleFilterAmenityChange}/>
          TV
        </label>
        <label>
          <input type="checkbox" name="fridge" defaultValue="firdge" onChange={handleFilterAmenityChange}/>
          Fridge
        </label>
      </div>

      <label htmlFor="chain">Hotel chain:</label>
      <input type="text" id="chain" defaultValue="chain" onChange={handleFilterChainChange}/>

      <label htmlFor="hotel">Name of Hotel:</label>
      <input type="text" id="hotel" defaultValue="hotel" onChange={handleFilterHotelChange}/>
      
      <button onClick={handleSearch}>Search</button>

      {roomList}

    </div>
    );
}
 
export default SearchFilter;