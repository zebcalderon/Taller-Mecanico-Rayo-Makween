$(document).ready(function() {

    $('#user-select').change(function() {
      var username = $(this).val();
      var password = 'Duoc@123';
      if ('cevans eolsen tholland sjohansson cpratt mruffalo super'.includes(username)) {
        password = '123';
      };
      $('#id_username').val(username);
      $('#id_password').val(password);
    });
  
});
  