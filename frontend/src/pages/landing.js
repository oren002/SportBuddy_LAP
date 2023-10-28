import React from "react";
import $ from 'jquery';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

const Landing = () => {

    const navigate = useNavigate();
      
      useEffect(() => {
        var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
		function getCookie(cName) {
			const name = cName + "=";
			const cDecoded = decodeURIComponent(document.cookie); //to be careful
			const cArr = cDecoded.split('; ');
			let res;
			cArr.forEach(val => {
			  if (val.indexOf(name) === 0) res = val.substring(name.length);
			})
			return res
		}
		let auth = getCookie("auth");
  		if (auth != undefined) {
			$.ajax({
        	    type: "GET",
        	    url: "http://localhost:3000/user/profile",
        	    headers: { 'Authorization': "Bearer "+auth },
        	    success: function (result) {
        	        navigate("/home");
        	    },
        	    error: function(jqXHR, textStatus, errorThrown) {
        	        alert(errorThrown);
        	    }
        	  });
		}
      }, []);

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
                    navigate('/home');
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    alert(errorThrown);
                }
              });
    
        }
    }

     return (
    <div data-spy="scroll" data-target=".fixed-top">
    <a name="init"></a>

	<div className="spinner-wrapper">
        <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    </div>
  
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container">
            <a className="navbar-brand logo-text page-scroll" href="index.html">SportPlanner</a> 
            
          
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-awesome fas fa-bars"></span>
                <span className="navbar-toggler-awesome fas fa-times"></span>
            </button>
          

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link page-scroll" >CREATE AN ACCOUNT OR LOG-IN IF YOU ALREADY HAVE ONE<span className="sr-only"></span></a>
                    </li>
                </ul>
                <span className="nav-item">
                    <button className="btn-outline-sm page-scroll" onClick={()=>navigate('/register')} >REGISTER</button>
                </span>
                <span className="nav-item m-auto">
                    <button className="btn-outline-sm page-scroll" onClick={login}>LOGIN</button>
                </span>
                <div className="bg-body rounded log text-center">
                        <div className="form-group">
                            <div id="log"></div>
                            <input type="text" id="username-login" name="username-login" className="form-control" placeholder="Username"/>
                            <br/>
                            <input type="password" id="psw-login" name="psw-login" className="form-control" placeholder="Password"/>
                        </div>
                </div>
            </div>
        </div> 
    </nav> 
    
    <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-container">
                        <h1>Keep you passion alive</h1>
                        <p className="p-large p-heading">Plan your favorite sport events and find teammates around you whenever you need them</p>
                    </div> 
                </div> 
            </div> 
        </div> 
        <div className="deco-white-circle-1">
            <img src="images/decorative-white-circle.svg" alt="alternative"/>
        </div> 
        <div className="deco-white-circle-2">
            <img src="images/decorative-white-circle.svg" alt="alternative"/>
        </div> 
        <div className="deco-blue-circle">
            <img src="images/decorative-blue-circle.svg" alt="alternative"/>
        </div>
        <div className="deco-yellow-circle">
            <img src="images/decorative-yellow-circle.svg" alt="alternative"/>
        </div> 
        <div className="deco-green-diamond">
            <img src="images/decorative-green-diamond.svg" alt="alternative"/>
        </div> 
    </header> 
   

   
    <div id="description" className="basic-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="image-container">
                        <img className="img-fluid" src="images/description-1-app.png" alt="alternative"/>
                    </div> 
                </div> 
                <div className="col-lg-6">
                    <div className="text-container">
                        <h2>Organize and Plan you favourite activities</h2>
                        <ul className="list-unstyled li-space-lg">
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Connect with other people to create your own Events</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Join public Ads to find your sportsmates</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Leave an get reviews after participating</div>
                            </li>
                        </ul>
                    </div> 
                </div> 
            </div>
        </div>
    </div> 
    

    <div className="tabs">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="tabs-container">

                        
                        <ul className="nav nav-tabs" id="cedoTabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link" id="nav-tab-2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false"><i className="fas fa-list"></i>Tracking</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="nav-tab-3" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false"><i className="far fa-calendar-alt"></i>Organize</a>
                            </li>
                        </ul>
                       
                        
                    
                        <div className="tab-content" id="cedoTabsContent">
                          
                            <div className="tab-pane fade show active" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                                <p><strong>Keep track of everything</strong> and evaluate your experiences while using SportBuddy. Each activity can be monitored and reviewed </p>
                                <p><strong>Anyone can enjoy the app</strong> no matter their gender, age, occupation or location in the world.</p>
                            </div> 
                        
                            <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
                                <p><strong>Use the power of social interactivity</strong> to keep you motivated and active.</p>
                                <ul className="list-unstyled li-space-lg">
                                    <li className="media">
                                        <i className="far fa-check-square"></i>
                                        <div className="media-body">All the activities you join are easly managable through your own Agenda</div>
                                    </li>
                                    <li className="media">
                                        <i className="far fa-check-square"></i>
                                        <div className="media-body">No more frustrations of having to personally gather people for your Events; SportBuddy takes care of everything</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="image-container">
                        <img className="img-fluid" src="images/description-2-app.png" alt="alternative"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
        </div>
     );
    };
export default Landing;