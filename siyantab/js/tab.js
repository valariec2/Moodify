$(document).ready(function () {
  //Gradients
  const Gradients = [
    "repeating-conic-gradient(#585559 0%,rgb(108, 87, 103)  10%,rgb(80, 68, 89) 20%)", // new background
    "#585559" // original background
  ];
  let Index = 0;

  // button on change background
  $(".change-background").on('click', function (e) {
    e.preventDefault();
    Index = (Index + 1) % Gradients.length;
    $("body").css("background", Gradients[Index]);
  });
});