import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "e95fbe1c6d2749dbe04a84179cb0aebf";

class App extends React.Component { 

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunset: undefined,
    error: undefined
  }
  
    gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if(city) {
const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

const data = await api_url.json();

  let sunset = data.sys.sunset;
  let date = new Date();
  date.setTime(sunset);
  let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  this.setState({
  temp: data.main.temp,
  city: data.name,
  country: data.sys.country,
  sunset: sunset_date,
  error: ""

  });
 }
}

render() {
  return (
    <div className= "wrapper">
      <div className="main-block">
     <Info/>
     <Form weatherMethod={this.gettingWeather}/>
     <div className="main-indicators">
     <Weather 
     temp={this.state.temp}
     city={this.state.city}
     country={this.state.country}
     sunset={this.state.sunset}/>
     </div>
      </div>
    </div>
  );
}
}

export default App;