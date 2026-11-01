$(document).ready(function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  $(".main-nav a").each(function () {
    if ($(this).attr("href") === currentPage) {
      $(this).addClass("active").attr("aria-current", "page");
    }
  });

  if ($("#ready-message").length) {
    console.log("jQuery is ready!");
    $("#ready-message").text("jQuery is ready!");
  }

  $("#log-ready").on("click", function () {
    console.log("jQuery is ready!");
    $("#ready-message").text("jQuery is ready! Check the browser console too (Urooooooo)");
  });

  $("#select-by-id").on("click", function () {
    $("#selector-id").text("Selected with an ID selector: #selector-id");
  });
  $("#select-by-class").on("click", function () {
    $(".selector-class").text("Selected with a class selector: .selector-class");
  });
  $("#select-by-tag").on("click", function () {
    $("#selector-stage p").text("Selected paragraph tags inside the demo stage (:///)");
  });
  $("#use-html").on("click", function () {
    $("#html-target").html("This content contains <strong>HTML markup</strong>");
  });
  $("#use-css").on("click", function () {
    $("#css-target").css({ color: "#2c7564", fontSize: "1.15rem" });
  });

  $("#hide-paragraph").on("click", function () {
    $("#visibility-target").hide();
  });
  $("#show-paragraph").on("click", function () {
    $("#visibility-target").show();
  });
  $("#toggle-paragraph").on("click", function () {
    $("#visibility-target").toggle();
  });

  $("#fade-in").on("click", function () {
    $("#fade-image").fadeIn(350);
  });
  $("#fade-out").on("click", function () {
    $("#fade-image").fadeOut(350);
  });
  $("#fade-toggle").on("click", function () {
    $("#fade-image").fadeToggle(350);
  });

  $("#slide-up").on("click", function () {
    $("#slide-panel").slideUp(300);
  });
  $("#slide-down").on("click", function () {
    $("#slide-panel").slideDown(300);
  });
  $("#slide-toggle").on("click", function () {
    $("#slide-panel").slideToggle(300);
  });

  let itemNumber = $("#demo-list li").length;
  $("#append-item").on("click", function () {
    itemNumber += 1;
    $("#demo-list").append("<li>Appended item " + itemNumber + "</li>");
  });
  $("#prepend-item").on("click", function () {
    itemNumber += 1;
    $("#demo-list").prepend("<li>Prepended item " + itemNumber + "</li>");
  });
  $("#remove-item").on("click", function () {
    $("#demo-list li:last").remove();
  });

  $("#change-image").on("click", function () {
    const currentSrc = $("#attribute-image").attr("src");
    const nextSrc = currentSrc.indexOf("1.jpg") >= 0
      ? "assets/images/2.jpg"
      : "assets/images/1.jpg";
    const nextAlt = currentSrc.indexOf("1.jpg") >= 0
      ? "just sweet cat"
      : "cat with helmet";
    $("#attribute-image").attr("src", nextSrc).attr("alt", nextAlt);
  });
  $("#change-link").on("click", function () {
    const link = $("#demo-link");
    const isJqueryHome = link.attr("href") === "https://jquery.com/";
    if (isJqueryHome) {
      link.attr("href", "https://api.jquery.com/").text("Open the jQuery API");
    } else {
      link.attr("href", "https://jquery.com/").text("Open the jQuery website");
    }
  });

  $("#live-name, #live-email").on("input", function () {
    $("#name-preview").text($("#live-name").val() || "Your name will appear here (just give me a cookie)");
    $("#email-preview").text($("#live-email").val() || "Your email will appear here (give me pls a tea)");
  });

  $("#animate-basic").on("click", function () {
    $("#basic-box").stop(true).animate({
      width: "108px",
      height: "108px",
      left: "145px"
    }, 600);
  });
  $("#reset-basic").on("click", function () {
    $("#basic-box").stop(true).css({
      width: "64px",
      height: "64px",
      left: "12px",
      top: "12px",
      opacity: 1
    });
  });

  $("#animate-sequence").on("click", function () {
    const box = $("#sequence-box");
    box.stop(true).css({
      width: "64px",
      height: "64px",
      left: "12px",
      top: "12px",
      opacity: 1
    });
    box.animate({ left: "145px" }, 350)
      .animate({ top: "112px" }, 350)
      .animate({ width: "34px", height: "34px" }, 350)
      .animate({ left: "12px", top: "12px", width: "64px", height: "64px" }, 350);
  });
  $("#reset-sequence").on("click", function () {
    $("#sequence-box").stop(true).css({
      width: "64px",
      height: "64px",
      left: "12px",
      top: "12px"
    });
  });

  $("#animate-combined").on("click", function () {
    $("#combined-box").stop(true).animate({
      left: "150px",
      top: "85px",
      width: "100px",
      height: "100px",
      opacity: 0.45
    }, 700);
  });
  $("#reset-combined").on("click", function () {
    $("#combined-box").stop(true).css({
      width: "64px",
      height: "64px",
      left: "12px",
      top: "12px",
      opacity: 1
    });
  });

  $(".accordion-trigger").on("click", function () {
    const button = $(this);
    const panel = button.next(".accordion-panel");
    const isExpanded = button.attr("aria-expanded") === "true";
    panel.slideToggle(250);
    button.attr("aria-expanded", String(!isExpanded));
    button.find(".accordion-icon").text(isExpanded ? "+" : "-");
  });
});
