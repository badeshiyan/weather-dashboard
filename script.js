function searchAPI(city) {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=b6888160cea1ac7e31cb37a7c245701a";

  $.ajax({
    method: "GET",
    url: queryURL,
  }).then(function (response) {
    console.log(response);
    var temperature = response.main.temp;
    console.log(temperature);
    var humidity = response.main.humidity;
    console.log(humidity);
    var wind = response.wind.speed;
    console.log(wind);

    $(".displaycurrentweather").append(temperature);
    $(".displaycurrentweather").append(humidity);
  });
}

$("#searchBtn").on("click", function () {
  var cityName = $("#searchCity").val();
  searchAPI(cityName);
});
