// function search() {
//   var city = "london";
//   $.ajax({
//     method: "GET",
//     url: "https://api.api-ninjas.com/v1/worldtime?city=" + city,
//     headers: { "X-Api-Key": "b9dil7Myn45Gj9h8wiAnpQ==zRj4y153iTlpd6Pj" },
//     contentType: "application/json",
//     success: function (result) {
//       console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//       console.error("Error: ", jqXHR.responseText);
//     },
//   });
// }
export default function disp_TZ() {

  tz = "Asia/Kolkata";
  str = new Date().toLocaleString("en-NZ", {
    timeZone: tz,
    timeZoneName: "short",
  });
  document.getElementById("time").innerHTML = str + " " + tz;

}
