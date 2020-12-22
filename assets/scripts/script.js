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
      addClassValue(rowDiv, "row");
      var col1Div = $("<div>");
      addClassValue(col1Div, "col-md-1 col-lg-1");
      var col2Div = $("<div>");
      addClassValue(col2Div, "col-md-5 col-lg-5");
      var img1Tag = $("<img>");
      addAttribute(img1Tag, "src", projects[i].image);
      addAttribute(img1Tag, "width", "570px");
      addAttribute(img1Tag, "height", "460px");
      addClassValue(img1Tag, "image");
      appendElement(col2Div, img1Tag);
      appendElement(rowDiv, col1Div);
      appendElement(rowDiv, col2Div);
    } else {
      var col3Div = $("<div>");
      col3Div.addClass("col-md-5 col-lg-5");
      var col4Div = $("<div>");
      col4Div.addClass("col-md-1 col-lg-1");
      var img2Tag = $("<img>");
      addAttribute(img2Tag, "src", projects[i].image);
      addAttribute(img2Tag, "width", "570px");
      addAttribute(img2Tag, "height", "460px");
      addClassValue(img2Tag, "image");
      appendElement(col3Div, img2Tag);
      appendElement(rowDiv, col3Div);
      appendElement(rowDiv, col4Div);
    }
    $("#projects").append(rowDiv);
  }

  // Function to append an element
  function appendElement(parent, child) {
    parent.append(child);
  }

  // Function to add attribute
  function addAttribute(element, key, value) {
    element.attr(key, value);
  }

  // Function to add class
  function addClassValue(element, value) {
    element.addClass(value);
  }
})