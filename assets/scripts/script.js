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

  // Hook projects dom
  for (var i = 0; i < projects.length; i++) {
    if (i % 2 === 0) {
      var rowDiv = $("<div>");
      addClassValue(rowDiv, "row");
      var col1Div = $("<div>");
      addClassValue(col1Div, "col-md-1 col-lg-1");
      var col2Div = $("<div>");
      addClassValue(col2Div, "col-md-5 col-lg-5");
      var wrapper = $("<div>");
      addClassValue(wrapper, "wrapper");
      var img1Tag = $("<img>");
      addAttribute(img1Tag, "src", projects[i].image);
      addAttribute(img1Tag, "width", "570px");
      addAttribute(img1Tag, "height", "460px");
      addClassValue(img1Tag, "image");
      var overlayDiv = $("<div>");
      addClassValue(overlayDiv, "overlay");
      var textDiv = $("<div>");
      addClassValue(textDiv, "textOverlay");
      var textDiv1 = $("<div>");
      addClassValue(textDiv1, "textOverlay1");
      var textDiv2 = $("<div>");
      addClassValue(textDiv2, "textOverlay2");
      textDiv.text(projects[i].name);
      textDiv1.append(`<button type='button' class='btn btn-outline-light learnMore' data-toggle='modal'
       data-target='#modal' data-id=${projects[i].id}> Learn More! </button>`);
      textDiv1.prepend("<hr style='border-top: 3px solid white'/>");
      textDiv2.append('<i class="fas fa-project-diagram"></i>');
      appendElement(textDiv, "<hr style='border-top: 3px solid white'/>");
      appendElement(overlayDiv, textDiv);
      appendElement(overlayDiv, textDiv1);
      appendElement(overlayDiv, textDiv2);
      appendElement(wrapper, img1Tag);
      appendElement(wrapper, overlayDiv);
      appendElement(col2Div, wrapper);
      appendElement(rowDiv, col1Div);
      appendElement(rowDiv, col2Div);
    } else {
      var col3Div = $("<div>");
      col3Div.addClass("col-md-5 col-lg-5");
      var col4Div = $("<div>");
      col4Div.addClass("col-md-1 col-lg-1");
      var wrapper = $("<div>");
      addClassValue(wrapper, "wrapper");
      var img2Tag = $("<img>");
      addAttribute(img2Tag, "src", projects[i].image);
      addAttribute(img2Tag, "width", "570px");
      addAttribute(img2Tag, "height", "460px");
      addClassValue(img2Tag, "image");
      var overlayDiv = $("<div>");
      addClassValue(overlayDiv, "overlay");
      var textDiv = $("<div>");
      addClassValue(textDiv, "textOverlay");
      textDiv.text(projects[i].name);
      var textDiv1 = $("<div>");
      addClassValue(textDiv1, "textOverlay1");
      var textDiv2 = $("<div>");
      addClassValue(textDiv2, "textOverlay2");
      textDiv.text(projects[i].name);
      textDiv1.append(`<button type='button' class='btn btn-outline-light learnMore' data-toggle='modal' 
      data-target='#modal' data-id=${projects[i].id}> Learn More! </button>`);
      textDiv1.prepend("<hr style='border-top: 3px solid white'/>");
      textDiv2.append('<i class="fas fa-project-diagram"></i>');
      appendElement(textDiv, "<hr style='border-top: 3px solid white'/>");
      appendElement(overlayDiv, textDiv);
      appendElement(overlayDiv, textDiv1);
      appendElement(overlayDiv, textDiv2);
      appendElement(wrapper, img2Tag);
      appendElement(wrapper, overlayDiv);
      appendElement(col3Div, wrapper);
      appendElement(rowDiv, col3Div);
      appendElement(rowDiv, col4Div);
    }
    $("#projects").append(rowDiv);
  }
  console.log(workExperience);
  // Hook work experience to dom
  for (var i = 0; i < workExperience.length; i++) {
    var rowDiv = $("<div>");
    addClassValue(rowDiv, "row");
    var col1Div = $("<div>");
    addClassValue(col1Div, "col-md-2 col-lg-2");
    var col2Div = $("<div>");
    addClassValue(col2Div, "col-md-1 col-lg-1");
    var col3Div = $("<div>");
    addClassValue(col3Div, "col-md-7 col-lg-7");
    var col4Div = $("<div>");
    addClassValue(col4Div, "col-md-2 col-lg-2");
    var verticalDiv = $("<div>");
    addClassValue(verticalDiv, "bulletVl");
    var ulTag = $("<ul>");
    for (var j = 0; j < workExperience[i].responsibilities.length; j++) {
      ulTag.append("<li>" + workExperience[i].responsibilities[j] + "</li>");
    }
    appendElement(col2Div, "<i class='fas fa-dot-circle'></i>");
    appendElement(col2Div, verticalDiv);
    appendElement(col3Div, "<h1>" + workExperience[i].startDate.toUpperCase() + " - " + workExperience[i].endDate.toUpperCase() + "</h1>");
    appendElement(col3Div, "<h2>" + workExperience[i].companyName + "</h2>");
    appendElement(col3Div, "<h3>" + workExperience[i].role + "</h3>");
    appendElement(col3Div, ulTag);
    appendElement(rowDiv, col1Div);
    appendElement(rowDiv, col2Div);
    appendElement(rowDiv, col3Div);
    appendElement(rowDiv, col4Div);
    $("#workExperience").append(rowDiv);
    $("#workExperience").append("<br>");
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

  // active class
  $(".navbtn").on("click", function () {
    var target = $(this).data("nav");

    if (target === "home") {
      $(this).addClass("active");
      $(this).parent().siblings().children().removeClass("active");
    } else if (target === "work") {
      $(this).addClass("active");
      $(this).parent().siblings().children().removeClass("active");
    } else if (target === "about") {
      $(this).addClass("active");
      $(this).parent().siblings().children().removeClass("active");
    } else if (target === "projects") {
      $(this).addClass("active");
      $(this).parent().siblings().children().removeClass("active");
    } else if (target === "contact") {
      $(this).addClass("active");
      $(this).parent().siblings().children().removeClass("active");
    }
  });

  // Generate modal
  $(".learnMore").on("click", function (event) {
    event.preventDefault();
    console.log("Inside learn more button click funtion");
    var id = $(this).data("id");
    var name;
    var desc;
    var link;
    var repoLink;
    console.log(id);
    for (var i = 0; i < projects.length; i++) {
      if (id === projects[i].id) {
        name = projects[i].name;
        desc = projects[i].desc;
        link = projects[i].link;
        repoLink = projects[i].repoLink;
      }
    }
    console.log(name);
    $("#modalHeader").text(name);
    $("#modalBody").text(desc);
    $("#link").empty();
    $("#link").append("<a href=" + link + " " + "target=_blank>Deployed Link<a/>&nbsp&nbsp&nbsp");
    $("#link").append("<a href=" + repoLink + " " + "target=_blank>Repository<a/>");
    $("#modal").show();
  });
})