import React from 'react';
import Navbar from "../components/Navbar";
import $ from 'jquery';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
 
const Profile = () => {

    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState();

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
                        <h1>Profile</h1>
                        <p className="p-large p-heading">Here you can change you Avatar!</p>
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
    <div className="container center">
    <h5>Upload ypur new Avatar</h5>

      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={()=>{}} id="sub" className='btn btn_join'>Submit</button>
        </div>
      )}

      <br />
      <br />
      
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
    </div>
    );
};
 
export default Profile;