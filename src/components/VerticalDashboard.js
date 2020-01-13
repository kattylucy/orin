import React from 'react';
import { Link } from 'react-router-dom';

function VerticalDash(){
    return(
        <div className="col-3 col-md-2 blue-dashboard d-flex flex-column justify-content-center">
            <Link to='/orinapp'><i className="fas fa-home mr-2"/>Dashboard</Link>
            <Link to='/income'><i className="fa fa-plus mr-2" />Income</Link>
            <Link to='/Savings'><i className="fas fa-piggy-bank mr-2" />Savings</Link>
            <Link to='/bills'><i className="fa fa-credit-card mr-2" />Bills</Link>
            <Link to='/expenses'><i className="fas fa-gifts mr-2" />Expenses</Link>   
        </div>
    );

}

export default VerticalDash;