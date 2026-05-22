let p = fetch("https://goweather.herokuapp.com/weather/Ny");
p.then((response) => {
  console.log(response.status);
  console.log(response.ok);
  console.log(response.headers);
  console.log(response.type);
  console.log(response.url);
  return response.json();
}).then((value) => {
  console.log(value);
});
let res = fetch("https://goweather.herokuapp.com/weather/Ny", {
  headers: {
    Authentication: "Secret",
  },
});
