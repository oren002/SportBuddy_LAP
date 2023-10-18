import React from 'react';
import Navbar from "../components/Navbar";
import $ from 'jquery';
import { useEffect } from 'react';
 
const Profile = () => {

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
	    				document.getElementById("nameTv").innerHTML=username;
            	    },
            	    error: function(jqXHR, textStatus, errorThrown) {
            	        alert(errorThrown);
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
                        <h1>Profile</h1>
                        <p className="p-large p-heading">This is your profile</p>
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

    </div>
    );
};
 
export default Profile;