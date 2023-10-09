import React from "react";
import $ from 'jquery';
import './register.css';
import {useNavigate} from 'react-router-dom';
 
const Register = () => {

    const navigate = useNavigate();

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
                    navigate('/home');
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    alert(JSON.stringify(jqXHR));
                    alert("AJAX error: " + textStatus + ' : ' + errorThrown);
                }
              });
    
        }
    }

    return (
    
        <div data-spy="scroll" data-target=".fixed-top">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-5">
             <div className="card">
               <h2 className="card-title text-center">Register on SportBuddy </h2>
                <div id="reg" className="card-body py-md-4">
                    <div className="form-group">
                       <input type="text" className="form-control" id="name" placeholder="Nickname"/>
                  </div>
                  <div className="form-group">
                       <input type="email" className="form-control" id="email" placeholder="Email"/>
                        </div>
                              
                            
             <div className="form-group">
               <input type="password" className="form-control" id="password" placeholder="Password"/>
             </div>
             <div className="mt-5 d-flex flex-row align-items-center justify-content-between">
                                  <button className="btn btn-primary" onClick={createAccount}>Create Account</button>
                </div>
                </div>
                </div>
        </div>
        </div>
        </div>
        </div>
    );
};
 
export default Register;