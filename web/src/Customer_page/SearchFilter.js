import {useState} from "react"
import axios from "axios"


const SearchFilter = () => {
    
  const [city, setCity] = useState('');
  const [checkin, setCheckin] = useState([]);
  const [checkout, setCheckout] = useState([]);
  const [capacity, setCapacity] = useState(1);

  const [stars, setStars] = useState([]);
  const [price, setPrice] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [chain, setChain] = useState('');
  const [hotel, setHotel] = useState([]);
  const date = useState([]);

  const [results, setResults] = useState([]);
  //const customer_ssn = axios.get("http://localhost:8000/login/customer",{params: {ssn}} )

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
    const {value, checked} = event.target;
    if (checked) {
      setAmenities((prevState) => [...prevState, value]);
    } else {
      setAmenities((prevState) => prevState.filter((a) => a !== value));
    }
  }
  
  const handleFilterChainChange = (event) => {
    setChain(event.target.value);
  }
  
  const handleFilterHotelChange = (event) => {
    setHotel(event.target.value);
  }
  
  const filters = {
    city,
    checkin,
    checkout,
    capacity: Number(capacity),
    price: Number(price),
    amenities: amenities.reduce((o, amenity) => {
      o[amenity] = true;
      return o;
    }, {}),
    chain,
    hotel,
  };

  const filteredCity = (data, val) => {
    if (!Array.isArray(data)) {
      return [];
    }
    return data.filter(e => e.city === val)
  };

  const filteredCapacity = (data, val) => {
    return data.filter(e => e.capacity === val)
  };

  const filteredChain = (data, val) => {
    return data.filter(e => e.chain === val)
  };

  const filteredHotel = (data, val) => {
    return data.filter(e => e.hotel === val)
  };

  const filteredAmenities = (data, val) => {
    return data.filter(e => e.amenities === val)
  };

  const handleSearch = async () => {
    try {
      console.log(filters)
      const response = await axios.get('http://localhost:8000/room');
      
      const theCity = filteredCity(response, filters.city);
      const theCapacity = filteredCapacity(theCity, filters.capacity);
      const theChain = filteredChain(theCapacity, filters.chain);
      const theHotel = filteredHotel(theChain, filters.hotel);
      const theAmenities = filteredAmenities(theHotel, filters.amenities);
  
      const bookedDates = date.map((booking) => {
        return {
          start: new Date(booking.checkin),
          end: new Date(booking.checkout),
        };
      });
  
      const checkinDate = new Date(filters.checkin);
      const checkoutDate = new Date(filters.checkout);

      const isAvailable = bookedDates.every((dates) => {
        const isBefore = checkoutDate <= dates.start;
        const isAfter = checkinDate >= dates.end;
        return isBefore || isAfter;
      });
      if (isAvailable === false) {
        return false;
      }

      setResults(theAmenities);
      
    } catch (error) {
      console.error(error)
    } 
  };
  
  
  const roomList = results.map((room) => {
    return (
      <div key={room.room_id}>
        <h2>{room.room_id}</h2>
        <p>Capacity: {room.capacity}</p>
        <button onClick={() => handleBooking(room.room_id)}>Book now</button>
      </div>
    );
  });
  
  const handleBooking = async(room_id) => {  
   try {
    await axios.post("http://localhost:8000/new/booking", {
      booking_id: Math.floor(Math.random() * 1000000),
      room_id: room_id,
      exp_checkin: checkin,
      exp_checkout: checkout,
      time_of_booking: new Date().toISOString(),
      //customer_ssn: customer_ssn,

    });
    await axios.put("http://localhost:8000/room", {
      active: true
    });

    const update = results.filter((room) => room.room_id !== room_id);
    setResults(update);
   } catch (error) {
    console.log(error)
   }
  };

  return (
      
    <div>
      <label htmlFor="city">City:</label>
      <input type="text" id="city" value={city} onChange={handleFilterCityChange} required/>
      
      <label htmlFor="checkin">Check-in:</label>
      <input type="date" id="checkin" value={checkin} onChange={handleFilterCheckinChange} required/>

      <label htmlFor="checkout">Check-out:</label>
      <input type="date" id="checkout" value={checkout} onChange={handleFilterCheckoutChange} required/>
      
      <label htmlFor="capacity">Capacity minimum:</label>
      <input type="number" id="capacity" min="1" value={capacity} onChange={handleFilterCapacityChange} required/>
      
      <br/>

      <label htmlFor="stars">Minimum stars:</label>
      <select id="stars" value={stars} onChange={(e) => setStars(Array.from(e.target.selectedOptions, (option) => option.value))} multiple={true}>
        <option value="1">1 star</option>
        <option value="2">2 stars</option>
        <option value="3">3 stars</option>
        <option value="4">4 stars</option>
        <option value="5">5 stars</option>
      </select>

      <label htmlFor="price">Price range:</label>
      <input type="range" id="price" min="50" max="1000" onChange={handleFilterPriceChange}/> 

      <br/>

      <label htmlFor="amenities">Amenities:</label>
      <div id="amenities">
        <label>
          <input type="checkbox" name="pool" value="pool" onChange={handleFilterAmenityChange}/>
          Pool
        </label>
        <label>
          <input type="checkbox" name="gym" value="gym" onChange={handleFilterAmenityChange}/>
          Gym
        </label>
        <label>
          <input type="checkbox" name="spa" value="spa" onChange={handleFilterAmenityChange}/>
          Spa
        </label>
        <label>
          <input type="checkbox" name="tv" value="tv" onChange={handleFilterAmenityChange}/>
          TV
        </label>
        <label>
          <input type="checkbox" name="fridge" value="firdge" onChange={handleFilterAmenityChange}/>
          Fridge
        </label>
      </div>

      <label htmlFor="chain">Hotel chain:</label>
      <input type="text" id="chain" value={chain} onChange={handleFilterChainChange}/>

      <label htmlFor="hotel">Name of Hotel:</label>
      <input type="text" id="hotel" value={hotel} onChange={handleFilterHotelChange}/>
      
      <button onClick={handleSearch}>Search</button>

      {roomList}

    </div>
    );
}
 
export default SearchFilter;