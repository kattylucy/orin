import React from 'react';

function Step1(props){
    return(
        <form onSubmit={props.hsubmit}>
        <div className="form-group goal-form">
            <h5>What's your goal for?</h5>
            <input id="itemName" type="text"  className="form-control" onChange={props.goalName} placeholder="E.g. Vacation"/>
        </div>
        <div className="goal-buttons">
            <button>Next</button>
        </div>
    </form>

    ); 
}

export default Step1;