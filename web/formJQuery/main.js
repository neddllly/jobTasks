$(document).ready(function () {
  $('#InputEmail, #InputPassword').on('input', function () {
    var email = $('#InputEmail').val();
    var password = $('#InputPassword').val();
    if (email !== "" && password !== "") {
      $('#buttonSubmit').prop("disabled", false);
    } else {
      $('#buttonSubmit').prop("disabled", true);
    }
  });
});
