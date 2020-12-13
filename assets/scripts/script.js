$(document).ready(function () {
  // Variable Declarations
  var isExpandedAbt;
  var isExpandedContact;

  // $(window).scroll(function () {
  //   if($(this).scrollTop() > 200) {
  //     $(".navbar").fadeIn(500);
  //   } else {
  //     $(".navbar").fadeOut(500);
  //   }
  // })
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

      if((isExpandedContact === "false") && (isExpandedAbt === "false")) {
          $(".col1").addClass("col animated rotateIn");
          $(".col2").addClass("col animated rotateIn");
      }
      else if((isExpandedAbt === "false") && ((isExpandedContact === "true") || isExpandedContact === undefined)) {
          $(".col1").addClass("col animated rotateIn");
          $(".col2").removeClass("col animated rotateIn");
      }
      else if((isExpandedContact === "false") && ((isExpandedAbt === "true") || isExpandedAbt === undefined)) {
          $(".col2").addClass("col animated rotateIn");
          $(".col1").removeClass("col animated rotateIn");
      }
  }
})