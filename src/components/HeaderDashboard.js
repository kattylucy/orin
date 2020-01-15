import React from 'react';
import VerticalDash from './VerticalDashboard';
import { connect } from 'react-redux';
import { UncontrolledTooltip } from 'reactstrap';
import DropDown from './Dropdown';



function HeaderDashboard(props){

    return(
        <React.Fragment>
            <div className="row">
                <VerticalDash />
                <div className="col-9 col-md-10">
                    <DropDown></DropDown>
                    <div className="text-center balance-dashboard mt-3">
                        <h1>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.totalIncome - props.totalSavings - props.joinExpenses)}</h1>
                        <p id="TooltipBalance">Your Balance Today <i class="fas fa-info-circle"></i></p>
                        <UncontrolledTooltip placement="bottom" target="TooltipBalance">
                            This Amount is your Cash Avaliable After Savings and Expenses
                        </UncontrolledTooltip>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="card-total col-md-3">
                            <h3>Earnings</h3>
                            <hr></hr>
                            <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.totalIncome)}</p>
                        </div>
                        <div className="card-total col-md-3">
                            <h3>Savings</h3>
                            <hr></hr>
                            <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.totalSavings)}</p>
                        </div>
                        <div className="card-total col-md-3">
                            <h3>Expenses</h3>
                            <hr></hr>
                            <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.joinExpenses)}</p>
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
        totalMoney: state.totalMoney,
        joinExpenses: state.joinExpenses
    };
};


export default connect(mapStateToProps)(HeaderDashboard);