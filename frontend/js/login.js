function login() {

    var user = document.getElementById("username-login").value;
    var psw = document.getElementById("psw-login").value;

    if ((user=="") || (psw=="")) {
        alert("Fields Username and Password cannot be empty");
    } else {
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/auth/login",
            data: JSON.stringify({ "username": user, "password" : psw }),
            contentType: "application/json",
            success: function (result) { 
                const t = JSON.stringify(result);
                var json = JSON.parse(t);
                const token = json["token"];
                document.cookie = 'auth='+token+'; max-age=3600; path=/';
                window.location.replace("pages/home.html");
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert(errorThrown);
            }
          });

    }

}