$(document).ready(function () {

  // Variable Declarations
  var isExpandedAbt;
  var isExpandedContact;

  $(window).scroll(function () {
    if ($(this).scrollTop() > 750) {
      // $(".navbar").fadeIn(500);
      $(".navbar").addClass("bg-dark");
    } else {
      // $(".navbar").fadeOut(500);
      $(".navbar").removeClass("bg-dark");
    }
  })
  // On click of skills button
  $("#learnOne").on("click", function (event) {
    isExpandedAbt = $("#learnOne").attr("aria-expanded");
    updateClass();
  })
  // On click of contact me button
  $("#learnTwo").on("click", function (event) {
    isExpandedContact = $("#learnTwo").attr("aria-expanded");
    updateClass();
  })
  // Function that updates classes for collapsed elements
  function updateClass() {
    console.log(`About : ${isExpandedAbt}`);
    console.log(`Contact : ${isExpandedContact}`);

    if ((isExpandedContact === "false") && (isExpandedAbt === "false")) {
      $(".col1").addClass("col animated rotateIn");
      $(".col2").addClass("col animated rotateIn");
    }
    else if ((isExpandedAbt === "false") && ((isExpandedContact === "true") || isExpandedContact === undefined)) {
      $(".col1").addClass("col animated rotateIn");
      $(".col2").removeClass("col animated rotateIn");
    }
    else if ((isExpandedContact === "false") && ((isExpandedAbt === "true") || isExpandedAbt === undefined)) {
      $(".col2").addClass("col animated rotateIn");
      $(".col1").removeClass("col animated rotateIn");
    }
  }
  console.log(projects);
  // Hook projects dom
  for (var i = 0; i < projects.length; i++) {
    if (i % 2 === 0) {
      var rowDiv = $("<div>");
      rowDiv.addClass("row");
      var col1Div = $("<div>");
      col1Div.addClass("col-md-1 col-lg-1");
      var col2Div = $("<div>");
      col2Div.addClass("col-md-5 col-lg-5");
      var img1Tag = $("<img>");
      img1Tag.attr("src", projects[i].image);
      img1Tag.attr("width", "570px");
      img1Tag.attr("height", "460px");
      col2Div.append(img1Tag);
      rowDiv.append(col1Div);
      rowDiv.append(col2Div);

    } else {
      var col3Div = $("<div>");
      col3Div.addClass("col-md-5 col-lg-5");
      var col4Div = $("<div>");
      col4Div.addClass("col-md-1 col-lg-1");
      var img2Tag = $("<img>");
      img2Tag.attr("src", projects[i].image);
      img2Tag.attr("width", "570px");
      img2Tag.attr("height", "460");
      col3Div.append(img2Tag);
      rowDiv.append(col3Div);
      rowDiv.append(col4Div);
    }
    $("#projects").append(rowDiv);
  }
})