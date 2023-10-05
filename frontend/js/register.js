function createAccount() {

    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var psw = document.getElementById("password").value;

    if ((email=="") || (psw=="")) {
        alert("Inserire email e password prima di continuare.");
    } else {
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/auth/register",
            data: JSON.stringify({ "username": username, "email" : email, "password" : psw, "avatar" : "" }),
            contentType: "application/json",
            success: function (result) {
                window.location.replace("home.html");
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert(JSON.stringify(jqXHR));
                alert("AJAX error: " + textStatus + ' : ' + errorThrown);
            }
          });

    }
}