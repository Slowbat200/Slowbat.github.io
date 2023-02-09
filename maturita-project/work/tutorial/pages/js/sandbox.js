
/* Getting the value of the textarea with the id of html, css, and js. */
function compile() {
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var code = document.getElementById("code").contentWindow.document;

  /* A function that is called when the user releases a key. */
  document.body.onkeyup = function () {
    code.open();
    code.writeln(
      html.value +
        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>"
    );
    code.close();
  };
}
/* Calling the function. */
compile();
