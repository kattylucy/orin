import React from 'react';
import SquareOne from '../images/square1.svg';
import SquareTwo from '../images/square2.svg';
import SquareThree from '../images/square3.svg';
import SquareFour from '../images/square4.svg';
import { Link } from 'react-router-dom';



function Features(){
    return(
        <React.Fragment>
            <div className="row whiteRow" id="features">
               <div className="col-12 col-lg-4">
                   <img src={SquareOne} alt="Orin App Feature"/>
               </div>
               <div className="col-12 col-lg-4">
                <img src={SquareTwo} alt="Orin App Feature"/>
               </div>
               <div className="col-12 col-lg-4">
                <img src={SquareThree} alt="Orin App Feature"/>
               </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6 grayRow">
                    <img src={SquareFour}  alt="Orin app screenshot"/>
                </div>
                <div className="col-12 col-lg-5 keeptrack ml-md-5 mt-5 text-center">
                    <h5>Keep Tracking of All Your Money in Just One App</h5>
                    <p>No more guessing abour your monthly finances, not more calculator or paper budget to know if you can afford an extra coffee. 
                        Orin keeps all your money in one app, for more saving and less worry.</p>
                    <button className="btn-sign-up w-md-100" ><Link to="/signUp" className="trackbtn">Save With Us!</Link></button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Features;