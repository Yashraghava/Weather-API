class Weather {
  constructor(city, country) {
    this.apiKey = "f06625586be28524eb4e33977617f1f6";
    this.city = city;
    this.country = country;
  }

  //Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`
    );

    const response2 = await response.json();
    console.log(response2);

    return response2;
  }

  //CHANGE WEATHER LOCATION
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
