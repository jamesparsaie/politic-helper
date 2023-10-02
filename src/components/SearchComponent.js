import { useState } from "react";

function SearchComponent(){
    const [query, setQuery] = useState(''); // to hold the user input
  
    const handleSearch = () => {
        // Make API call with the user's query here
    };

    return (
        <div>
        <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your address..."
        />
        <button onClick={handleSearch}>Search</button>
        </div>
    );
    }

  export default SearchComponent;