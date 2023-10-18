import React from 'react';
import './cards.css';
import $ from 'jquery';


function ActivityCard({items, type}) {

    if(type=="search") {
        return (
            <ul>
            {items.map(item => (
            <div>
            
            <div className='courses-container'>
              <div className='course'>
                  <div className='course-preview'>
                      <h6>{item.name}</h6>
                      <h2>{item.creator}</h2>
                      <i onClick={()=>document.getElementById(item._id).toggleAttribute("hidden")} className='fas fa-chevron-right'>
                      <p id={item._id} hidden="true">{item.description}</p>
                      </i>
                  </div>
                  <div className='course-info'>
                      <div className='progress-container'>
                          <div className={"progress_"+ Math.ceil(item.participants_number / item.tot_participants *5)}></div>
                          <span className='progress-text'>{item.participants_number} / {item.tot_participants} </span>
                      </div>
                      <h6>{item.date}, {item.time} </h6>
                      <h2>{item.location}, {item.price}  </h2>
                      <button className='btn_join' onClick={()=>
                        $.ajax({
                            type: "POST",
                            url: "http://localhost:3000/activity/join",
                            data: JSON.stringify({ "username": document.getElementById("nameTv").innerHTML, "id": document.getElementById(item._id).id }),
                            contentType: "application/json",
                            success: function (result) {
                                window.location.reload(false);
                            },
                            error: function(jqXHR, textStatus, errorThrown) {
                                alert(errorThrown);
                            }
                          })
                    }>Join</button>
                  </div>
              </div>
            </div>
            </div>
            ))}
          </ul>     
        );
    }
    else if (type=="home") {
        return (
            <ul>
            {items.map(item => (
            <div>
            
            <div className='courses-container'>
              <div className='course'>
                  <div className='course-preview'>
                      <h6>{item.name}</h6>
                      <h2>{item.creator}</h2>
                      <i onClick={()=>document.getElementById(item._id).toggleAttribute("hidden")} className='fas fa-chevron-right'>
                      <p id={item._id} hidden="true">{item.description}</p>
                      </i>
                  </div>
                  <div className='course-info'>
                      <div className='progress-container'>
                          <div className={"progress_"+ Math.ceil(item.participants_number / item.tot_participants *5)}></div>
                          <span className='progress-text'>{item.participants_number} / {item.tot_participants} </span>
                      </div>
                      <h6>{item.date}, {item.time} </h6>
                      <h2>{item.location}, {item.price}  </h2>
                      <button className='btn' onClick={()=>
                        $.ajax({
                            type: "POST",
                            url: "http://localhost:3000/activity/forfeit",
                            data: JSON.stringify({ "username": document.getElementById("nameTv").innerHTML, "id": document.getElementById(item._id).id }),
                            contentType: "application/json",
                            success: function (result) {
                                window.location.reload(false);
                            },
                            error: function(jqXHR, textStatus, errorThrown) {
                                alert(errorThrown);
                            }
                          })}>Forfeit</button>
                  </div>
              </div>
            </div>
            </div>
            ))}
          </ul>     
        );
    }
}

export default ActivityCard;