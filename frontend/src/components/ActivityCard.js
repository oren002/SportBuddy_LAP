import React from 'react';
import './cards.css';
import $ from 'jquery';
import Favorites from '../pages/favorites';
import Rating from 'react-rating';

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
                      <h6>{item.date.substring(0, 10)}, {item.time} </h6>
                      <h2>{item.location}, {item.price+"€"}  </h2>
                    <button onLoad={$.ajax({
                            type: "POST",
                            url: "http://localhost:3000/user/isInFav",
                            data: JSON.stringify({ "username": document.getElementById("nameTv").innerHTML, "id": item._id}),
                            contentType: "application/json",
                            success: function (result) {
                              const data = JSON.stringify(result);
                              var json = JSON.parse(data);
                              const message = json["message"];
                            try{
                              if (message=="yes") {
                                document.getElementById(`addToFavBtn_${item._id}`).style.display = "none";
                                document.getElementById(`removeFromFavBtn_${item._id}`).style.display = "inline-block";
                              }
                            }catch{console.log("ccccc");}
                            },
                            error: function(jqXHR, textStatus, errorThrown) {
                                //alert(errorThrown);
                                console.log("o");
                            }
                          })}
                      className="btn btn_styled"
                      id={`addToFavBtn_${item._id}`}
                      onClick={() =>
                        $.ajax({
                          type: "POST",
                          url: "http://localhost:3000/user/addtofav",
                          data: JSON.stringify({
                            username: document.getElementById("nameTv").innerHTML,
                            id: document.getElementById(item._id).id,
                          }),
                          contentType: "application/json",
                          success: function (result) {
                            // Hide the Add to favorites button and show the Remove from favorites button
                            const addToFavBtn = document.getElementById(`addToFavBtn_${item._id}`);
                            const removeFromFavBtn = document.getElementById(
                              `removeFromFavBtn_${item._id}`
                            );
                            if (addToFavBtn && removeFromFavBtn) {
                              addToFavBtn.style.display = "none";
                              removeFromFavBtn.style.display = "inline-block"; // or "block" depending on your layout
                            }
                          },
                          error: function (jqXHR, textStatus, errorThrown) {
                            //alert(errorThrown);
                            console.log("ooo");
                          },
                        })
                      }
                    >
                      Add to favorites
                    </button>
                  
                    <button
                      className="btn btn_styled"
                      id={`removeFromFavBtn_${item._id}`}
                      style={{ display: "none" }}
                      onClick={() =>
                        $.ajax({
                          type: "POST",
                          url: "http://localhost:3000/user/rmvfromfav",
                          data: JSON.stringify({
                            username: document.getElementById("nameTv").innerHTML,
                            id: document.getElementById(item._id).id,
                          }),
                          contentType: "application/json",
                          success: function (result) {
                            // Hide the Remove from favorites button and show the Add to favorites button
                            const addToFavBtn = document.getElementById(`addToFavBtn_${item._id}`);
                            const removeFromFavBtn = document.getElementById(
                              `removeFromFavBtn_${item._id}`
                            );
                            if (addToFavBtn && removeFromFavBtn) {
                              addToFavBtn.style.display = "inline-block"; // or "block" depending on your layout
                              removeFromFavBtn.style.display = "none";
                            }
                          },
                          error: function (jqXHR, textStatus, errorThrown) {
                            //alert(errorThrown);
                            console.log("oo");
                          },
                        })
                      }
                    >
                      Remove from favorites
                    </button>

                    
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
                              console.log("oo");  
                              //alert(errorThrown);
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
                      <h6>{item.date.substring(0, 10)}, {item.time} </h6>
                      <h2>{item.location}, {item.price+"€"}  </h2>
                      
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
                                console.log("oo");  
                              //alert(errorThrown);
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
    else if (type=="my") {
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
                      <h6>{item.date.substring(0, 10)}, {item.time} </h6>
                      <h2>{item.location}, {item.price+"€"}  </h2>
                      <button className='btn' onClick={()=>
                        $.ajax({
                            type: "POST",
                            url: "http://localhost:3000/activity/cancel",
                            data: JSON.stringify({ "id": document.getElementById(item._id).id }),
                            contentType: "application/json",
                            success: function (result) {
                                window.location.reload(false);
                            },
                            error: function(jqXHR, textStatus, errorThrown) {
                              console.log("oo");  
                              //alert(errorThrown);
                            }
                          })}>Cancel</button>
                  </div>
              </div>
            </div>
            </div>
            ))}
          </ul>     
        );
    }
    else if(type=="fav") {
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
                      <h6>{item.date.substring(0, 10)}, {item.time} </h6>
                      <h2>{item.location}, {item.price+"€"}  </h2>
                      <button class="btn btn_styled" onClick={()=>
                        $.ajax({
                            type: "POST",
                            url: "http://localhost:3000/user/rmvfromfav",
                            data: JSON.stringify({ "username": document.getElementById("nameTv").innerHTML, "id": document.getElementById(item._id).id }),
                            contentType: "application/json",
                            success: function (result) {
                                document.getElementsByClassName("btn btn_styled")[0].disabled=true;
                                window.location.reload();
                            },
                            error: function(jqXHR, textStatus, errorThrown) {
                                //alert(errorThrown);
                                console.log("oo");
                            }
                          })}> Remove from favorites</button>
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
                                //alert(errorThrown);
                                console.log("oo");
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

    else if (type === "past") {

        return (
          <ul>
            {items.map(item => (
              <div key={item._id}>
                <div className='courses-container'>
                  <div className='course'>
                    <div className='course-preview'>
                      <h6>{item.name}</h6>
                      <h2>{item.creator}</h2>
                      <i
                        onClick={() => {document.getElementById(item._id).toggleAttribute("hidden")}}
                        className='fas fa-chevron-right'
                      >
                        <p id={item._id} hidden="true">{item.description}</p>
                      </i>
                    </div>
                    <div className='course-info'>
                      <div className='progress-container'>
                        <div className={"progress_" + Math.ceil(item.participants_number / item.tot_participants * 5)}></div>
                        <span className='progress-text'>{item.participants_number} / {item.tot_participants} </span>
                      </div>
                      <h6>{item.date.substring(0, 10)}, {item.time} </h6>
                      <h2>{item.location}, {item.price+"€"}  </h2>
                      <Rating onHover={()=>{$.ajax({
                        type: "POST",
                        url: "http://localhost:3000/user/rev",
                        data: JSON.stringify({ "name": document.getElementById("nameTv").innerHTML, "creator": item.creator }),
                        contentType: "application/json",
                        success: function (result) {
                          const data= JSON.stringify(result);
                          var json= JSON.parse(data);
                          const reviews = json["reviews"];
                          var index = reviews.findIndex(function(item, i){
                            return item.user === document.getElementById("nameTv").innerHTML;
                          });
                          if(index >= 0) {
                            const rate = reviews[index]["rate"];
                            document.getElementById(`rating_${item._id}`).innerHTML = " You rated "+item.creator+" "+rate+" stars";
                          } 
                          },
                          error: function(jqXHR, textStatus, errorThrown) {
                            console.log("oo");
                            //alert(errorThrown);
                          }
                        })}}
                        emptySymbol={<i className="far fa-star"></i>}
                        fullSymbol={<i className="fas fa-star" style={{ color: 'orange' }}></i>}
                        onChange={newRating => {
                          console.log(`User clicked the ${newRating} star(s) for activity with id ${item._id}`);
                          $.ajax({
                            type: "POST",
                            url: "http://localhost:3000/user/rate",
                            data: JSON.stringify({ "username": document.getElementById("nameTv").innerHTML, "creator": item.creator, "rating": newRating }),
                            contentType: "application/json",
                            success: function (result) {
                                //alert("done");
                                document.getElementById(`rating_${item._id}`).innerHTML = " You rated "+item.creator+" "+newRating+" stars";
                            },
                            error: function(jqXHR, textStatus, errorThrown) {
                              console.log("oo");  
                              //alert(errorThrown);
                            }
                          })
                        }     
                        }
                      />
                      <span id ={`rating_${item._id}`} ></span>
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

/** ADD TO FAVOURITES REMOVED FROM HOME AND MY ACTIVITIES
 <button class="btn btn_styled" onClick={()=>
                        $.ajax({
                            type: "POST",
                            url: "http://localhost:3000/user/addtofav",
                            data: JSON.stringify({ "username": document.getElementById("nameTv").innerHTML, "id": document.getElementById(item._id).id }),
                            contentType: "application/json",
                            success: function (result) {
                                document.getElementsByClassName("btn btn_styled")[0].disabled=true;
                            },
                            error: function(jqXHR, textStatus, errorThrown) {
                                alert(errorThrown);
                            }
                          })}> Add to favorites</button>
 */