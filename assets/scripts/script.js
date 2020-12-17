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

    // if(isExpandedContact === "false") {
    //     isExpandedAbt = "true";
    //     $(".col2").addClass("col");
    //     $(".col1").removeClass("col");
    // }
    // else{
    //     isExpandedContact = "true";
    //     $(".col1").addClass("col");
    //     $(".col2").removeClass("col");
    // }

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
  // Hook projects dom
  var newDiv = $("<div>");
  newDiv.addClass("row");
  // $("#projects").append(newDiv);
  var childDiv = $("<div>");
  childDiv.addClass("col-md-2");
  newDiv.append(childDiv);
  for (var i = 0; i < 3; i++) {
    var innerChildDiv = $("<div>");
    innerChildDiv.addClass("col-md-3");
    var imgTag = $("<img>");
    imgTag.attr("src", "..");
    imgTag.attr("alt", "Image");
    innerChildDiv.append(imgTag);
    newDiv.append(innerChildDiv);
  }
  var childDiv = $("<div>");
  childDiv.addClass("col-md-1");
  newDiv.append(childDiv);
  $("#projects").append(newDiv);
})