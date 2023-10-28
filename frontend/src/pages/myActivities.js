import React from 'react';
import Navbar from "../components/Navbar";
import $ from 'jquery';
import { useState, useEffect } from 'react';
import ActivityCard from "../components/ActivityCard";
import {useNavigate} from 'react-router-dom';
 
const MyActivities = () => {

    const navigate = useNavigate();
    const [items, setItems] = useState();

    useEffect(() => {
        var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
        let auth = getCookie("auth");
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
  	    	if (auth != undefined) {
	    		$.ajax({
            	    type: "GET",
            	    url: "http://localhost:3000/user/profile",
	    			headers: { 'Authorization': "Bearer "+auth },
            	    success: function (result) {
	    				const data= JSON.stringify(result);
                    	var json = JSON.parse(data);
                    	const username = json["username"];
	    				const email = json["email"];
	    				const avatar = json["avatar"];
                        const reviews = json["reviews"];
                        var i; var tot=0;
                        for (i=0; i<reviews.length; i++) {
                            tot += reviews[i]["rate"];
                        }
                        const mean = Math.floor(tot/reviews.length);
                        var j;
                        for (j=1; j<=mean; j++) {
                            document.getElementById(j).className += " checked";
                        }
	    				document.getElementById("nameTv").innerHTML=username;
                        $.ajax({
                            type: "POST",
                            url: "http://localhost:3000/activity/myact",
                            data: JSON.stringify({ "username": username }),
                            contentType: "application/json",
                            success: function (result) {
                                setItems(result);
                            },
                            error: function(jqXHR, textStatus, errorThrown) {
                                //alert(errorThrown);
                            }
                          });
            	    },
            	    error: function(jqXHR, textStatus, errorThrown) {
            	        //alert(errorThrown);
            	    }
            	  });
	    	} else navigate('/');
      }, []);

    return (
        <div data-spy="scroll" data-target=".fixed-top">

        <Navbar />

    <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-container">
                        <h1>My Activities</h1>
                        <p className="p-large p-heading">These are your activities! </p>
                    </div> 
                </div>
            </div>
        </div> 
        <div className="deco-white-circle-1">
            <img src="../images/decorative-white-circle.svg" alt="alternative" />
        </div> 
        <div className="deco-white-circle-2">
            <img src="../images/decorative-white-circle.svg" alt="alternative" />
        </div>
        <div className="deco-blue-circle">
            <img src="../images/decorative-blue-circle.svg" alt="alternative" />
        </div> 
        <div className="deco-yellow-circle">
            <img src="../images/decorative-yellow-circle.svg" alt="alternative" />
        </div>
        <div className="deco-green-diamond">
            <img src="../images/decorative-green-diamond.svg" alt="alternative" />
        </div> 
    </header> 

        {items && <ActivityCard items={items} type="my" />}

    </div>
    );
};
 
export default MyActivities;