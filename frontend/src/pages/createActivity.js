import React from 'react';
import $ from 'jquery';
import {useNavigate} from 'react-router-dom';
import { useEffect,useState } from 'react';

 
const CreateActivity = () => {

    const navigate = useNavigate();

    function publishEvent() {
        var creator = localStorage.getItem("username");
        var date = document.getElementById("ev-date").value;
        var time = document.getElementById("ev-time").value;
        var name = document.getElementById("ev-name").value;
        var desc = document.getElementById("ev-desc").value;
        var place = document.getElementById("ev-place").value;
        var max_part = document.getElementById("ev-part").value;
        var price = document.getElementById("ev-price").value;
    
        if ((date=="") || (time=="") || (name=="") || (desc=="") || (place=="") || (max_part=="") || (price=="")) {
          alert("All fields are Mandatory! Fill them to contiue.");
        } else {
            $.ajax({
                type: "POST",
                url: "http://localhost:3000/activity/create",
                data: JSON.stringify({ "creator": creator, "name" : name, "description" : desc, "date" : date, "time" : time, "location" : place, "tot_participants" : max_part, "price" : price }),
                contentType: "application/json",
                success: function (result) {
                    navigate("/home");
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    alert(JSON.stringify(jqXHR));
                    alert("AJAX error: " + textStatus + ' : ' + errorThrown);
                }
              });
    
        }
    }

    return (
      <div className="container">
      <div className="row justify-content-center">
      <div className="col-md-10">
      <div className="card">
         <h2 className="card-title text-center"> Create a New Activity </h2>
        <div className="card-body py-md-4">
        <div className="form-group">
          <p>Date</p>
          <input id="ev-date" className="form-control" type="date" name="bdate" />
          <i className="fas fa-calendar-alt"></i>
        </div>
        <div className="form-group">
          <p>Time</p>
          <input id="ev-time" className="form-control" type="text" name="bdate" />
          <i className="fas fa-calendar-alt"></i>
        </div>
        <div className="form-group">
            <p>Activity Name</p>
          <input id="ev-name" className="form-control" type="text" name="name"/>
        </div>
        <div className="form-group">
          <p>Activity Description</p>
          <textarea id="ev-desc" className="form-control" rows="3" ></textarea>
        </div>
        <div className="itform-groupem">
          <p>Location</p>
          <input id="ev-place" className="form-control" type="text" name="name"/>
        </div>
        <div className="form-group">
          <p>Requested Number of Participants</p>
          <input id="ev-part" className="form-control" type="number" name="name"/>
        </div>
        <div className="form-group">
          <p>Price (in euros) </p>
          <input id="ev-price" className="form-control" type="number" name="name"/>
          </div>
        
      </div>
      <div className="mt-5 btn-block">
          <button className="btn btn-primary" onClick={publishEvent}>PUBLISH</button>
        </div>
    </div>
    </div>
    </div>
    </div>
    );
};
 
export default CreateActivity;