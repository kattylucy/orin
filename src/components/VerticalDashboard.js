import React from 'react';
import { Link } from 'react-router-dom';
import money from '../images/money.svg';
import dashboard from '../images/dashboard.svg';
import save from '../images/save.svg';
import pay from '../images/pay.svg';
import gift from '../images/gift.svg';
import goal from '../images/mission.svg';




function VerticalDash(){
    return(
        <div className="col-3 col-md-2 blue-dashboard d-flex flex-column">
            <div className="dashboard-logo">
                <Link to='/app'>Orin</Link>
            </div>
            <div className="d-flex flex-column">
                <Link to='/orinapp'><img alt="icon dashboard" src={dashboard} className="icons-dashboard" />Dashboard</Link>
                <Link to='/income'><img alt="icon dashboard" src={money} className="icons-dashboard" />Income</Link>
                <Link to='/Savings'><img alt="icon dashboard" src={save} className="icons-dashboard" />Savings</Link>
                <Link to='/bills'><img alt="icon dashboard" src={pay} className="icons-dashboard" />Recurring Expenses</Link>
                <Link to='/expenses'><img alt="icon dashboard" src={gift} className="icons-dashboard" />Other Expenses</Link>
                <Link to='/goals'><img alt="icon dashboard" src={goal} className="icons-dashboard" />Your Goals</Link>
            </div>
        </div>
    );

}

export default VerticalDash;