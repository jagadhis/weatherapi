var input = document.querySelector(".input_text");
var main = document.querySelector("#name");
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");
var clouds = document.querySelector(".clouds");
var button = document.querySelector(".submit");
var wind = document.querySelector(".wind");
var toggle = document.querySelector('.toggle-theme input[type="checkbox"]');

button.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&appid=5a6af944fef7a5547e36e6ac745b10b1"
  )
    .then((response) => response.json())
    .then((data) => {
      var tempValue = data["main"]["temp"];
      var nameValue = data["name"];
      var descValue = data["weather"][0]["description"];
      var windvalue = data["wind"]["speed"];

      main.innerHTML = nameValue;
      desc.innerHTML = "Desc - " + descValue;
      temp.innerHTML = "Temp - " + tempValue;
      wind.innerHTML = "Wind - " + windvalue;
      input.value = "";
    })

    .catch((err) => alert("Wrong city name!"));
});

function toggleTheme(event) {
  if (event.target.checked) {
    document.body.className = "switch";
  } else {
    document.body.className = "";
  }
}
toggle.addEventListener("click", toggleTheme);
