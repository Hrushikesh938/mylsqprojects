import React, { useState, useEffect } from "react";
import { fetchWeather } from '../API/fetchWeather';
import { DisplayWeather } from "./DisplayWeather";

const SearchWeather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState([]);
  const [input, setInput] = useState("Hyderabad");
  const [error, setError] = useState(null);
  let componentMounted = true;

  //useEffect hook used to run the function inside when the render completes
  useEffect(() => {
    //Function to invoke Fetch weather function and which will set state with response data after enter key is pressed.
    const search = async () => {
      try {
        const data = await fetchWeather(input);
        if (componentMounted) {
          setWeather(data);
          console.log(data);
          setQuery("");
          setError(null);
        }
        return () => {
          componentMounted = false;
        }
      }
      catch (error) {
        console.log(error.message);
        setError(error.message);
      }
    }
    search();
  }, [input]);


  //Function to check if search value is passed by pressing enter key and then update the state used for search
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && query !== "" && isNaN(query)) {
      event.preventDefault();
      setInput(query);
    }
    else if (event.key === "Enter" && (query === "" || !(isNaN(query)))) {
      setError("Provide a valid input");
      console.log("Invalid input");
    }

  }

  if (Object.getOwnPropertyNames(weather).length<=1) {
    return (
      <div className="app" style={{ fontSize: 20, color: 'red' }} >
        {error && (<p>{error}</p>)}
      </div>
    );
  }
  else{
    return (
      <div className="app" style={{ backgroundImage: `url(https://source.unsplash.com/1600x900/?${weather[0].main})` }}>
        <div className="navbar">
          <i><strong>Weather</strong>Accurate</i>
        </div>
        <main>
          {/*Div block for search box to input data*/}
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Enter a City.."
              /*Default value of text box can be assigned here */
              value={query}
              /*If user inputs any data the state is updated */
              onChange={(e) => setQuery(e.target.value)}
              /*After giving input if enter key is pressed then the function will be invoked */
              onKeyPress={handleKeyPress}
              required
            />
            {error && (<div role="alert" style={{ color: 'red' }}>
              <p style={{ color: 'red', fontSize: 15, fontWeight: 700 }}>{error}</p>
            </div>)}
          </div>
          {/*Child function is called by passing state data, which handles the data to be displayed */}
          <DisplayWeather weather={weather} city={input} />
        </main>
      </div>
    );
  }
  }


export default SearchWeather;