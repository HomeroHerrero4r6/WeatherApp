import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <div className="container col-md-4 offset-md-4">

        <div className={`col`}>
        <input
          className={`form-control`}
          type="text"
          placeholder="City..."
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        </div>
        <div className={`col mt-3`}>
        <input type="submit" value="Add" className={`btn btn-primary`} />  
        </div>
      </div>

    </form>
  );
}
