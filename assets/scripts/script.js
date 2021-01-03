$(document).ready(function () {
  // Initialize AOS
  AOS.init();

  // Variable Declarations
  var isExpandedAbt;
  var isExpandedContact;
  var width;
  var height;

  $(window).resize(function () {
    console.log(wrapper.width());
    width = wrapper.width();
  });

  // +++++++++++++++++
  //   $(document).on("scroll", onScroll);

  //   //smoothscroll
  //   $('a[href^="#"]').on('click', function (e) {
  //       e.preventDefault();
  //       $(document).off("scroll");

  //       $('a').each(function () {
  //           $(this).removeClass('active');
  //       })
  //       $(this).addClass('active');

  //       var target = this.hash,
  //           menu = target;
  //       $target = $(target);
  //       $('html, body').stop().animate({
  //           'scrollTop': $target.offset().top+2
  //       }, 500, 'swing', function () {
  //           window.location.hash = target;
  //           $(document).on("scroll", onScroll);
  //       });
  //   });
  // });

  // // Use Your Class or ID For Selection 

  // function onScroll(event){
  //   var scrollPos = $(document).scrollTop();
  //   $('#menu-center a').each(function () {
  //       var currLink = $(this);
  //       var refElement = $(currLink.attr("href"));
  //       if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
  //           $('#menu-center ul li a').removeClass("active");
  //           currLink.addClass("active");
  //       }
  //       else{
  //           currLink.removeClass("active");
  //       }
  //   });
  // }

  // function isScrolledIntoView(elem) {
  //   var docViewTop = $(window).scrollTop();
  //   var docViewBottom = docViewTop + $(window).height();
  //   var elemTop = $(elem).offset().top;
  //   var elemBottom = elemTop + $(elem).height();
  //   return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  // }
  // +++++++++++++++++++++++++++++++++++++++++++



  $(window).scroll(function () {
    if ($(this).scrollTop() > 750) {
      // $(".navbar").fadeIn(500);
      $(".navbar").addClass("bg-dark");
    } else {
      // $(".navbar").fadeOut(500);
      $(".navbar").removeClass("bg-dark");
    }
    // console.log(isScrolledIntoView($('#projects')));
    // if (isScrolledIntoView($('#projects'))) {
    //   alert("projetc");
    // }
    if ($(this).scrollTop() >= $('#home').position().top) {
      // console.log('I have been reached');
      // $(".navbtn").addClass("active");
      var navBtn = document.getElementsByClassName("navbtn");
      // console.log(navBtn);
      for (var i = 0; i < navBtn.length; i++) {
        if (navBtn[i].dataset.nav === "home") {
          $("#navHome").addClass("active");
          $("#navAbout").removeClass("active");
          $("#navProjects").removeClass("active");
          $("#navWork").removeClass("active");
          $("#navContact").removeClass("active");
        }
      }
    }
    if ($(this).scrollTop() >= $('#about').position().top) {
      // console.log('I have been reached');
      // $(".navbtn").addClass("active");
      var navBtn = document.getElementsByClassName("navbtn");
      // console.log(navBtn);
      for (var i = 0; i < navBtn.length; i++) {
        if (navBtn[i].dataset.nav === "about") {
          $("#navAbout").addClass("active");
          $("#navHome").removeClass("active");
          $("#navProjects").removeClass("active");
          $("#navWork").removeClass("active");
          $("#navContact").removeClass("active");
        }
      }
    }
    if ($(this).scrollTop() >= $('#projects').position().top) {
      // console.log('I have been reached');
      // $(".navbtn").addClass("active");
      var navBtn = document.getElementsByClassName("navbtn");
      // console.log(navBtn);
      for (var i = 0; i < navBtn.length; i++) {
        if (navBtn[i].dataset.nav === "projects") {
          $("#navProjects").addClass("active");
          $("#navHome").removeClass("active");
          $("#navAbout").removeClass("active");
          $("#navWork").removeClass("active");
          $("#navContact").removeClass("active");
        }
      }
    }
    if ($(this).scrollTop() >= $('#workExperience').position().top) {
      // console.log('I have been reached');
      // $(".navbtn").addClass("active");
      var navBtn = document.getElementsByClassName("navbtn");
      // console.log(navBtn);
      for (var i = 0; i < navBtn.length; i++) {
        if (navBtn[i].dataset.nav === "work") {
          $("#navWork").addClass("active");
          $("#navHome").removeClass("active");
          $("#navAbout").removeClass("active");
          $("#navProjects").removeClass("active");
          $("#navContact").removeClass("active");
        }
      }
    }
    if ($(this).scrollTop() >= $('#contact').position().top) {
      // console.log('I have been reached');
      // $(".navbtn").addClass("active");
      var navBtn = document.getElementsByClassName("navbtn");
      // console.log(navBtn);
      for (var i = 0; i < navBtn.length; i++) {
        if (navBtn[i].dataset.nav === "contact") {
          $("#navContact").addClass("active");
          $("#navHome").removeClass("active");
          $("#navAbout").removeClass("active");
          $("#navProjects").removeClass("active");
          $("#navWork").removeClass("active");
        }
      }
    }
  });

  // function isScrolledIntoView(elem) {
  //   var docViewTop = $(window).scrollTop();
  //   var docViewBottom = docViewTop + $(window).height();
  //   var elemTop = $(elem).offset().top;
  //   var elemBottom = elemTop + $(elem).height();
  //   return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  // }
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
    height = Math.floor(width / projects[i].ratio);
    if (i % 2 === 0) {
      var rowDiv = $("<div>");
      addClassValue(rowDiv, "row");
      var col1Div = $("<div>");
      addClassValue(col1Div, "col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1");
      var col2Div = $("<div>");
      addClassValue(col2Div, "col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5");
      addAttribute(col2Div, "data-aos", "flip-up");
      addAttribute(col2Div, "data-aos-duration", "1000");
      var wrapper = $("<div>");
      addClassValue(wrapper, "wrapper");
      var img1Tag = $("<img>");
      addAttribute(img1Tag, "src", projects[i].image);
      // addAttribute(img1Tag, "width", "570px");
      addAttribute(img1Tag, "width", width);
      addAttribute(img1Tag, "height", height);
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
      col3Div.addClass("col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5");
      addAttribute(col3Div, "data-aos", "flip-up");
      addAttribute(col3Div, "data-aos-duration", "1000");
      var col4Div = $("<div>");
      col4Div.addClass("col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1");
      var wrapper = $("<div>");
      addClassValue(wrapper, "wrapper");
      var img2Tag = $("<img>");
      addAttribute(img2Tag, "src", projects[i].image);
      // addAttribute(img2Tag, "width", "570px");
      // addAttribute(img2Tag, "width", "643px");
      addAttribute(img2Tag, "width", width);
      addAttribute(img2Tag, "height", height);
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
    addAttribute(rowDiv, "data-aos", "fade-up");
    addAttribute(rowDiv, "data-aos-duration", "1000");
    var col1Div = $("<div>");
    addClassValue(col1Div, "col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2");
    var col2Div = $("<div>");
    addClassValue(col2Div, "col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1");
    var col3Div = $("<div>");
    addClassValue(col3Div, "col-7 col-sm-7 col-md-7 col-lg-7 col-xl-7");
    var col4Div = $("<div>");
    addClassValue(col4Div, "col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2");
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