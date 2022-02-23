
let APIKey = "97d601c7b787e33bb03a501818bbfb9a"
let country;
let city;
let fetchButton = document.getElementById('searchButton')





function getApi() {
  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q={city}&appid=97d601c7b787e33bb03a501818bbfb9a"

  fetch(queryURL)
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
      for (var i =0; i < data.length; i++) {
          var listItem = document.createElement('li');
          listItem.textContent = data[i].html_url;
          repoList.appendChild(listItem);
      }
  });
}

fetchButton.addEventListener('click', getApi);








// I WANT to see the weather outlook for multiple cities 

// 1. WHEN I search for a city
//      THEN I am presented with current and future conditions for that city and that city is added to the search history

// 2. WHEN I view current weather conditions for that city
//      THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

// 3. WHEN I view the UV index
//      THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

// 4. WHEN I view future weather conditions for that city
//      THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// 5. WHEN I click on a city in the search history
//      THEN I am again presented with current and future conditions for that city