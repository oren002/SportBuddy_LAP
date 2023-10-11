import React from 'react';
import './cards.css';

function ActivityCard({items}) {


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
                      <div className='progress_1'></div>
                      <span className='progress-text'>{item.participants} / {item.tot_participants} </span>
                  </div>
                  <h6>{item.date} , {item.time} </h6>
                  <h2>{item.location}, {item.price}  </h2>
                  <button className='btn' onClick={()=>{}}>Forfeit</button>
              </div>
          </div>
        </div>
        </div>
        ))}
      </ul>     
    );
}

export default ActivityCard;