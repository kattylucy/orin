import React, { Component } from 'react';
import Header from './VerticalDashboard';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';
import * as actionCreators from '../redux/actions/actionsCreators';
import DropDown from './Dropdown';




function AddItem(props){
    return(
        props.expenses.map(item => {
            return(
                <div className="item-container d-flex justify-content-between pt-4 px-3" key={item.id}>
                    <div className="d-flex flex-row">      
                    <i onClick={()=>props.deleteItemExpenses(item.id)}className="fa fa-trash mr-3" aria-hidden="true" />
                        <p>{item.name}</p>
                    </div>
                    <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.amount)}</p>
                </div>
            );
        })
    );
}


class OtherExpenses extends Component{
    constructor(props){
        super(props);

        this.state={
            open: false,
            name:'',
            amount:''
        }
    }

    toggleModal = () => {
        this.setState({
            open: !this.state.open
        })
     };
 
     handleSubmit(e){
         e.preventDefault();
         const amount = parseFloat(this.state.amount);
         this.toggleModal();
         this.props.addToExpenses(this.state.name, amount)
     };
    render(){

        return(
            <React.Fragment>
                <div className="row">
                    <Header />
                    <div className="col-9 col-md-10">
                        <DropDown></DropDown>
                    <div className="text-center balance-dashboard mt-3">
                        <h1>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.props.totalExpenses)}</h1>
                        <p>Your Total Expenses</p>
                    </div>
                    <div className="mr-5 add-new">
                        <h5 onClick={this.toggleModal}><i className="fas fa-plus mr-2"/>Add New Item</h5>
                    </div>
                    <div className="gray-container mr-3">
                        <div>
                            <AddItem expenses={this.props.expenses} deleteItemExpenses={this.props.deleteItemExpenses} />
                        </div>
                    </div>             
                    </div>
                </div>

                <Modal isOpen={this.state.open} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Add New Bill</ModalHeader>
                    <ModalBody>
                        <form onSubmit={(e)=> this.handleSubmit(e)}>
                            <div className="form-group">
                                <label htmlFor="itemName">Item Name</label>
                                <input id="itemName" type="text"  className="form-control" onChange={(e) => this.setState({name:e.target.value})} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="itemAmount">Item Amount</label>
                                <input id="itemAmount" type="number" className="form-control" onChange={(e) => this.setState({amount:e.target.value})}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Add New</button>
                        </form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

    

const mapStateToProps = state => {
    return{
        expenses:state.expenses,
        totalExpenses: state.totalExpenses
    };
};


const mapDispatchToProps = dispatch => {
    return{
        deleteItemExpenses: (id) => {
            dispatch(actionCreators.deleteItemExpenses(id))
        },
        addToExpenses:(name, amount) => {
            dispatch(actionCreators.expenses(name, amount))
        }
    };
  };






export default connect(mapStateToProps, mapDispatchToProps)(OtherExpenses);