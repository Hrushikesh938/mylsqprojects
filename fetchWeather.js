import axios from "axios";

//Method to make API GET request using an api key and query which is the location string and finally return the response data to parent component SearchWeather function
export const fetchWeather = async (query) => {

  //Function to get the dates from the object array
    const getDayIndices = (data) => {
        let dayIndices = [];
        dayIndices.push(0);
    
        let index = 0;
        let tmp = data.list[index].dt_txt.slice(8, 10);
    
        for (let i = 0; i < 4; i++) {
          while (
            tmp === data.list[index].dt_txt.slice(8, 10) ||
            data.list[index].dt_txt.slice(11, 13) !== '15'
          ) {
            index++;
          }
          dayIndices.push(index);
          tmp = data.list[index].dt_txt.slice(8, 10);
        }
        return dayIndices;
      };

    const updateData = (data) => {
        const days = [];
        const dayIndices = getDayIndices(data);

        for (let i = 0; i < 5; i++) {
            days.push({
                main: data.list[dayIndices[i]].weather[0].main,
                date: data.list[dayIndices[i]].dt_txt,
                weather_desc: data.list[dayIndices[i]].weather[0].description,
                icon: data.list[dayIndices[i]].weather[0].icon,
                temp: data.list[dayIndices[i]].main.temp,
                temp_min: data.list[dayIndices[i]].main.temp_min,
                temp_max: data.list[dayIndices[i]].main.temp_max,
                wind: data.list[dayIndices[i]].wind.speed,
                humidity: data.list[dayIndices[i]].main.humidity,
                visibility: data.list[dayIndices[i]].visibility,
            });
        }
        return days;
    }
    //axios library used to make api call using the parameters which are passed here to the URL
    const { data } = await axios.get(process.env.REACT_APP_BASE_URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: process.env.REACT_APP_API_KEY,
        }
    });
    if (data.cod === '200') {
      //Passing response data to the function which returns the object array of 5 days forecast data.
        const days=updateData(data);
        //Returning the response data to the parent function
        return days;
    }
}