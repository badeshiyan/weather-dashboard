function searchAPI(city) {
  //   console.log("i am here");
  var lat = 0;
  var lon = 0;
  // current weather block
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=b6888160cea1ac7e31cb37a7c245701a";
  //   console.log("i am here");
  $.ajax({
    method: "GET",
    url: queryURL,
    success: function (response) {
      //   var queryUV =
      //     "https://api.openweathermap.org/data/2.5/uvi?lat=" +
      //     lat +
      //     "&lon=" +
      //     lon +
      //     "&appid=b6888160cea1ac7e31cb37a7c245701a";

      //   $.ajax({
      //     method: "GET",
      //     url: queryUV,
      //     async: true,
      //   }).then(function (response) {
      //     console.log(response);
      //     var uvindex = response.value;
      //   });
      console.log("i am here");
    },
  }).then(function (response) {
    console.log(response);
    var temperature = response.main.temp;
    console.log("temperature: " + temperature);
    var humidity = response.main.humidity;
    console.log("humidity: " + humidity);
    var wind = response.wind.speed;
    console.log("wind speed: " + wind);
    lat = response.coord.lat;
    console.log("latitude: " + lat);
    lon = response.coord.lon;
    console.log("longitude: " + lon);

    $(".displaycurrentweather").append(
      "Temperature " + temperature + " &#8457;"
    );
    $(".displaycurrenthumidity").append("Humidity: " + humidity + "%");
    $(".displaycurrentwind").append("Wind Speed: " + wind + " mph");
  });
  //   console.log("i am here");
  //   console.log(lat);
  //   console.log(lon);

  var queryFiveDay =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&units=imperial&appid=b6888160cea1ac7e31cb37a7c245701a";

  $.ajax({
    method: "GET",
    url: queryFiveDay,
    async: true,
  }).then(function (response) {
    console.log(response);
    var DayOneTemp = response.list[0].main.temp;
    console.log("temperature: " + DayOneTemp);
    var DayOneHum = response.list[0].main.humidity;
    console.log("temperature: " + DayOneHum);
    $(".displaydayonetemp").append("Temp: " + DayOneTemp + " &#8457;");
    $(".displaydayonehum").append("Humidity: " + DayOneHum + "%");

    var DayTwoTemp = response.list[8].main.temp;
    console.log("temperature: " + DayTwoTemp);
    var DayTwoHum = response.list[8].main.humidity;
    console.log("temperature: " + DayTwoHum);
    $(".displaydaytwotemp").append("Temp: " + DayTwoTemp + " &#8457;");
    $(".displaydaytwohum").append("Humidity: " + DayTwoHum + "%");

    var DayThreeTemp = response.list[16].main.temp;
    console.log("temperature: " + DayThreeTemp);
    var DayThreeHum = response.list[16].main.humidity;
    console.log("temperature: " + DayThreeHum);
    $(".displaydaythreetemp").append("Temp: " + DayTwoTemp + " &#8457;");
    $(".displaydaythreehum").append("Humidity: " + DayTwoHum + "%");

    var DayFourTemp = response.list[24].main.temp;
    console.log("temperature: " + DayFourTemp);
    var DayFourHum = response.list[24].main.humidity;
    console.log("temperature: " + DayFourHum);
    $(".displaydayfourtemp").append("Temp: " + DayFourTemp + " &#8457;");
    $(".displaydayfourhum").append("Humidity: " + DayFourHum + "%");

    var DayFiveTemp = response.list[32].main.temp;
    console.log("temperature: " + DayFiveTemp);
    var DayFiveHum = response.list[32].main.humidity;
    console.log("temperature: " + DayFiveHum);
    $(".displaydayfivetemp").append("Temp: " + DayFiveTemp + " &#8457;");
    $(".displaydayfivehum").append("Humidity: " + DayFiveHum + "%");
  });
}

$("#searchBtn").on("click", function () {
  var cityName = $("#searchCity").val();
  searchAPI(cityName);
});
