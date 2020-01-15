import React, { Component } from 'react';
import Header from './VerticalDashboard';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, Button} from 'reactstrap';
import * as actionCreators from '../redux/actions/actionsCreators';
import DropDown from './Dropdown';



function AddItem(props){
    return(
        props.income.map(item => {
            return(
                <div className="d-flex justify-content-between pt-4 px-3 mb-3 gray-container" key={item.id}>
                    <div className="d-flex flex-row">      
                        <i onClick={() => props.deleteItemIncome(item.id)} className="fa fa-trash mr-3" aria-hidden="true" />
                        <p>{item.name}</p>
                    </div>
                    <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.amount)}</p>
                </div>
            );
        })
    );
}


class Income extends Component{
    constructor(props){
        super(props);

        this.state={
            open: false,
            name:'',
            amount:null
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
        this.props.addToIncome(this.state.name, amount);

    };

    render(){

        return(
            <React.Fragment>
                <div className="row">
                    <Header />
                    <div className="col-9 col-md-10">
                       <DropDown></DropDown>
                    <div className="text-center balance-dashboard mt-3">
                        <h1>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.props.totalIncome)}</h1>
                        <p>Your Total Income</p>
                    </div>
                    <div className="mr-5 add-new">
                        <h5 onClick={this.toggleModal}><i className="fas fa-plus mr-2"/>Add New Item</h5>
                    </div>
                    <div className="mr-3">
                        <AddItem income={this.props.income} deleteItemIncome={this.props.deleteItemIncome}/>
                    </div>             
                    </div>
                </div>

                <Modal isOpen={this.state.open} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Add New Income Item</ModalHeader>
                    <ModalBody>
                        <form onSubmit={value => this.handleSubmit(value)}>
                            <div className="form-group">
                                <label htmlFor="itemName">Item Name</label>
                                <input id="itemName" type="text" className="form-control" onChange={(e)=>this.setState({name:e.target.value})} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="itemAmount">Item Amount</label>
                                <input id="itemAmount" type="text" className="form-control" onChange={(e)=>this.setState({amount:e.target.value})}/>
                            </div>
                            <Button type="submit" className="btn">Add New</Button>
                        </form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}


const mapStateToProps = state => {
    return{
        income: state.income,
        totalIncome: state.totalIncome
    };
};


const mapDispatchToProps = dispatch => {
    return{
        deleteItemIncome: (id) => {
            dispatch(actionCreators.deleteItemIncome(id))
        },
        addToIncome:(name, amount) => {
            dispatch(actionCreators.income(name, amount))
        }
    };
  };





export default connect(mapStateToProps, mapDispatchToProps)(Income);