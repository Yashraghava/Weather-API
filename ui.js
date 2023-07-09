class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.dewpoint = document.getElementById("w-dewpoint");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    console.log(weather);
    this.location.textContent = weather.name + " " + weather.sys.country;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = (weather.main.temp - 273).toFixed(2) + " C";
    console.log(weather.main.temp);
    this.icon.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    console.log(
      `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
    // this.dewpoint.textContent = `Dew Point: ${weather.main.humidity}`;
    this.wind.textContent = `Wind: ${weather.wind.speed}`;
  }
}
