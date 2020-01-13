import React from 'react';
import VerticalDash from './VerticalDashboard';
import { connect } from 'react-redux';



function HeaderDashboard(props){
    return(
        <React.Fragment>
            <div className="row">
                <VerticalDash />
                <div className="col-9 col-md-10">
                    <div className="dashboard-nav justify-content-end d-flex pt-3 pr-2">
                        <i className="fa fa-2x fa-user mr-2"/>
                        <p className="mr-2 mt-1">Katty Barroso</p>                   
                    </div>
                    <div className="text-center balance-dashboard mt-3">
                        <h1>${props.totalMoney}</h1>
                        <p>Your Balance Today</p>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="card-total col-md-3">
                            <h3>Earnings</h3>
                            <hr></hr>
                            <p>${props.totalIncome}</p>
                        </div>
                        <div className="card-total col-md-3">
                            <h3>Savings</h3>
                            <hr></hr>
                            <p>${props.totalSavings}</p>
                        </div>
                        <div className="card-total col-md-3">
                            <h3>Expenses</h3>
                            <hr></hr>
                            <p>$100</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}


const mapStateToProps = state => {
    return{
        totalIncome: state.totalIncome,
        totalSavings: state.totalSavings,
        totalMoney: state.totalMoney
    };
};


export default connect(mapStateToProps)(HeaderDashboard);