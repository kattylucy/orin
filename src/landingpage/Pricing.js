import React from 'react';

function Pricing(){
    return(
        <React.Fragment>
            <div className="pricing d-flex justify-content-center" id="pricing">
                <div className="text-center mr-5">
                    <h1>$100</h1>
                    <p>One time payment</p>
                </div>
                <div className="">
                    <p className="arrow">Unlimited Access to Orin</p>
                    <p className="arrow">Mobile App</p>
                    <p className="arrow">14 Days Free Trial</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Pricing;