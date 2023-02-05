import { useState } from "react";

const SearchParams = () => {
  //this is a hook. Generally, when you see the word hook, you are most probably dealing with a hook.
  //by convention, all hookes start with "use"
  const [location, setLocation] = useState("");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
