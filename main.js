$(function () {
  var cross = `<svg class= "crossB" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="m336 776 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56Zm144 200q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`;
  function checkEmpty() {
    console.log("object");
    if ($(".mainBox__upper--buttons button").length == 0) {
      $(".mainBox__upper p").css("display", "block");
    } else {
      $(".mainBox__upper p").css("display", "none");
    }

    if ($(".mainBox__lower ul li").length == 0) {
      $(".mainBox__lower p").css("display", "block");
    } else {
      $(".mainBox__lower p").css("display", "none");
    }
  }

  $(".mainBox__lower ul").on("click", "li", function () {
    $(".mainBox__upper--buttons").append(
      "<button " +
        "id='" +
        $(this).attr("id") +
        "'" +
        ">" +
        $(this).text() +
        cross +
        "</button>"
    );
    $(this).remove();
    console.log($(".mainBox__upper--buttons button").length);
    checkEmpty();
  });
  $(document).on("click", ".crossB", function () {
    $(".mainBox__lower ul").prepend(
      "<li " +
        "id='" +
        $(this).parent().attr("id") +
        "'" +
        ">" +
        $(this).parent().text() +
        "</li>"
    );
    $(this).parent().remove();
    console.log($(".mainBox__upper--buttons button").length);

    checkEmpty();
  });
});
