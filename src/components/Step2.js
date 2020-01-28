import React from 'react';

function Step2(props){
    return(
        <form>
            <div className="form-group goal-form">
                <h5>What amount do you want to reach?</h5>
                <input id="itemName" type="text"  className="form-control" onChange={props.goalAmount} placeholder="The More The Merrier"/>
            </div>
            <div className="goal-buttons">
                <button onClick={props.back}>Back</button>
                <button onClick={props.hsubmit}>Next</button>
            </div>
        </form>

    );
}

export default Step2;