import React, { Component } from 'react';
import Header from './VerticalDashboard';
import ModalIncome from './ModalIncome';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/actionsCreators';


function AddItem(props){
    return(
        props.income.map(item => {
            return(
                <div className="item-container d-flex justify-content-between pt-4 px-3" key={item.id}>
                    <div className="d-flex flex-row">      
                        <i onClick={() => props.deleteItemIncome(item.id)} className="fa fa-trash mr-3" aria-hidden="true" />
                        <p>{item.name}</p>
                    </div>
                    <p>${item.amount}</p>
                </div>
            );
        })
    );
}


class Income extends Component{
    constructor(props){
        super(props);

        this.state={
            open: false
        }
    }

   toggleModal = () => {
       this.setState({
           open: !this.state.open
       })
    }

    render(){

        return(
            <React.Fragment>
                <ModalIncome open={this.state.open} toggle={this.toggleModal}/>
                <div className="row">
                    <Header />
                    <div className="col-9 col-md-10">
                        <div className="dashboard-nav justify-content-end d-flex pt-3 pr-2">
                            <i className="fa fa-2x fa-user mr-2"/>
                            <p className="mr-2 mt-1">Katty Barroso</p>
                        </div>  
                    <div className="text-center balance-dashboard mt-3">
                        <h1>${this.props.totalIncome}</h1>
                        <p>Your Total Income</p>
                    </div>
                    <div className="mr-5 add-new">
                        <h5 onClick={this.toggleModal}><i className="fas fa-plus mr-2"/>Add New Item</h5>
                    </div>
                    <div className="gray-container mr-3">
                        <div>
                            <AddItem income={this.props.income} deleteItemIncome={this.props.deleteItemIncome}/>
                        </div>
                    </div>             
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

    

const mapStateToProps = state => {
    return{
        input: state.inputValue,
        income: state.income,
        savings: state.savings,
        categoryval: state.categoryValue,
        totalIncome: state.totalIncome
    };
};

const mapDispatchToProps = dispatch => {
    return{
        deleteItemIncome: (id) => {
            dispatch(actionCreators.deleteItemIncome(id))
        }
    };
  };





export default connect(mapStateToProps, mapDispatchToProps)(Income);