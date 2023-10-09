import React from 'react';
import './cards.css';

function ActivityCard() {

    function forfeitEvent() {

    }

    function descEvent() {

    }

    return (
    <div>
    <div className="modal fade" id="desc" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticRatingLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="descLabel"></h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="rounded  mt-5 mb-5 text-center">
            <p id="descText"></p>
            </div><h5 className="text-center">PARTICIPANTS</h5>
            <div className="rounded  mt-5 mb-5 text-center">
            <p id="descPart"></p>
            </div>  
            </div>
            </div>
            </div>
        
    <div className='courses-container'>
            <div className='course'>
                <div className='course-preview'>
                    <h6>Event</h6>
                    <h2>creator</h2>
                    <a onClick={descEvent}>Description<i className='fas fa-chevron-right'></i></a>
                </div>
                <div className='course-info'>
                    <div className='progress-container'>
                        <div className='progress_1'></div>;
                        <span className='progress-text'>part / max_part have</span>
                    </div>
                    <h6>date, time</h6>
                    <h2>name</h2>
                    <button className='btn' onClick={forfeitEvent}>Forfeit</button>
                </div>
            </div>
        </div>
        
    </div>
    );
}

export default ActivityCard;