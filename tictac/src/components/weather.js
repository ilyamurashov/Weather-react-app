import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
      Город: {this.props.city} <br/>
      Температура: {this.props.temp} <br/>
      Страна: {this.props.country} <br/>
      Заход солнца: {this.props.sunset} 
      </div>
    );
  }
}

export default Weather ;