const SearchFilter = () => {
    return (
        <div>
      <label htmlFor="stars">Minimum stars:</label>
      <select id="stars">
        <option value="1">1 star</option>
        <option value="2">2 stars</option>
        <option value="3">3 stars</option>
        <option value="4">4 stars</option>
        <option value="5">5 stars</option>
      </select>

      <label htmlFor="price">Price range:</label>
      <input type="range" id="price" min="50" max="1000" />

      <label htmlFor="numRooms">Number of rooms:</label>
      <input type="number" id="numRooms" min="1" max="10" />

      <label htmlFor="amenities">Amenities:</label>
      <div id="amenities">
        <label>
          <input type="checkbox" name="pool" value="pool" />
          Pool
        </label>
        <label>
          <input type="checkbox" name="gym" value="gym" />
          Gym
        </label>
        <label>
          <input type="checkbox" name="spa" value="spa" />
          Spa
        </label>
      </div>

      <label htmlFor="chain">Hotel chain:</label>
      <select id="chain">
        <option value="">Any</option>
        <option value="Marriott">Marriott</option>
        <option value="Hilton">Hilton</option>
        <option value="Hyatt">Hyatt</option>
        <option value="Accor">Accor</option>
      </select>
    </div>
    );
}
 
export default SearchFilter;