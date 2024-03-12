var tzstr = document.getElementById("tz-string");
var btn = document.getElementById("tz-search");
var tText = document.getElementById("time-text");

const fetchApiData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    tText.innerHTML = data.datetime;
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener("click", () => {
  var API = "http://worldtimeapi.org/api/timezone/" + tzstr.value;
  setInterval(fetchApiData(API), 1000);
});
