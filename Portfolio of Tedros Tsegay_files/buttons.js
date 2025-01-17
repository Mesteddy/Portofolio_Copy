$("#ncrpbutton").attr("data-buttonlink", "https://ncrp.app");

$("#ncrpbutton").click(function () {
  const buttonlink = $("#ncrpbutton").data("buttonlink");

  window.open(buttonlink);
});

$("#ncrpgithubbutton").attr(
  "data-buttonlink",
  "https://github.com/Negative-Carbon-Reforestation-Project/openlayers-springboot-react-demo"
);

$("#ncrpgithubbutton").click(function () {
  const buttonlink = $("#ncrpgithubbutton").data("buttonlink");

  window.open(buttonlink);
});
$("#linkedin").attr(
  "data-buttonlink",
  "https://www.linkedin.com/in/tedros-t-8499a4140/"
);

$("#linkedin").click(function () {
  const buttonlink = $("#linkedin").data("buttonlink");
  window.open(buttonlink);
});

$("#github").attr(
  "data-buttonlink",
  "https://github.com/ttsega06/2022-GardenMonitoring"
);

$("#github").click(function () {
  const buttonlink = $("#github").data("buttonlink");

  window.open(buttonlink);
});

$("#resume").attr("data-buttonlink", "/Resume.pdf");

$("#resume").click(function () {
  const buttonlink = $("#resume").data("buttonlink");

  window.open(buttonlink);
});
