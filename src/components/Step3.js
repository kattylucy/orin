import React from 'react';

function Step3(props){
    return(
        <form>
            <div className="form-group goal-form">
                <h5>What is your deadline?</h5>
                <input id="itemDate" type="date" className="form-control" placeholder="What about 10 months?" onChange={props.goalTime}/>
            <div className="goal-buttons">
                <button onClick={props.back}>Back</button>
                <button onClick={props.hsubmit}>Create</button>
            </div>
            </div>
        </form>

    );
}

export default Step3;