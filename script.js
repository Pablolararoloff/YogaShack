"use strict";

(function ($) {
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");

    $(".gallery-controls ul li").on("click", function () {
      $(".gallery-controls ul li").removeClass("active");
      $(this).addClass("active");
    });

    if ($(".gallery-filter").length > 0) {
      var containerEl = document.querySelector(".gallery-filter");
      var mixer = mixitup(containerEl);
    }

    $(".blog-gird").masonry({
      itemSelector: ".grid-item",
      columnWidth: ".grid-sizer",
    });
  });

  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
    $(this).css("background-size", "cover");
  });

  $(".header-section .nav-menu .mainmenu ul li").on("mouseenter", function () {
    $(this).addClass("active");
  });

  $(".header-section .nav-menu .mainmenu ul li").on("mouseleave", function () {
    $(this).removeClass("active");
  });

  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  $(".image-popup").magnificPopup({
    type: "image",
  });

  $(".show-result-select").niceSelect();

  $(".timetable-controls ul li").on("click", function () {
    var tsfilter = $(this).data("tsfilter");
    $(".timetable-controls ul li").removeClass("active");
    $(this).addClass("active");

    if (tsfilter === "all") {
      $(".classtime-table").removeClass("filtering");
      $(".ts-item").removeClass("show");
    } else {
      $(".classtime-table").addClass("filtering");
    }

    $(".ts-item").each(function () {
      $(this).removeClass("show");
      if ($(this).data("tsmeta") === tsfilter) {
        $(this).addClass("show");
      }
    });
  });

  $(".navbar-collapse a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  $(".navbar-toggler").on("click", function () {
    var target = $(this).data("target");
    $(target).toggleClass("in");
  });

  AOS.init({
    disable: "mobile",
    duration: 800,
    anchorPlacement: "center-bottom",
  });

  $(function () {
    $(".navbar a, .hero-text a").on("click", function (event) {
      var $anchor = $(this);
      var target = $($anchor.attr("href"));

      if(target.length) {
        $("html, body").stop().animate({
          scrollTop: target.offset().top - 49
        }, 1000);
        event.preventDefault();
      }
    });
  });

  $(function () {
    var $navbar = $('.navbar');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $navbar.addClass('navbar-blur');
      } else {
        $navbar.removeClass('navbar-blur');
      }
    });
  });
})(jQuery);
