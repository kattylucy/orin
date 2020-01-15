import React from 'react';
import { Link } from 'react-router-dom';
import money from '../images/money.svg';
import dashboard from '../images/dashboard.svg';
import save from '../images/save.svg';
import pay from '../images/pay.svg';
import gift from '../images/gift.svg';




function VerticalDash(){
    return(
        <div className="col-3 col-md-2 blue-dashboard d-flex flex-column">
            <div className="dashboard-logo">
                <Link to='/app'>Orin</Link>
            </div>
            <div className="d-flex flex-column">
                <Link to='/orinapp'><img src={dashboard} className="icons-dashboard" />Dashboard</Link>
                <Link to='/income'><img src={money} className="icons-dashboard" />Income</Link>
                <Link to='/Savings'><img src={save} className="icons-dashboard" />Savings</Link>
                <Link to='/bills'><img src={pay} className="icons-dashboard" />Recurrent Expenses</Link>
                <Link to='/expenses'><img src={gift} className="icons-dashboard" />Other Expenses</Link>
            </div>
        </div>
    );

}

export default VerticalDash;