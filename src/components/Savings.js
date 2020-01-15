import React, { Component } from 'react';
import Header from './VerticalDashboard';
import * as actionCreators from '../redux/actions/actionsCreators';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';
import DropDown from './Dropdown';


function AddItem(props){
    return(
        props.savings.map(item => {
            return(
                <div className="item-container d-flex justify-content-between pt-4 px-3" key={item.id}>
                    <div className="d-flex flex-row">      
                        <i onClick={()=>props.deleteItemSavings(item.id)}className="fa fa-trash mr-3" aria-hidden="true" />
                        <p>{item.name}</p>
                    </div>
                    <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.amount)}</p>
                </div>
            );
        })
    );
}


class Savings extends Component{
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
         this.props.addToSavings(this.state.name, amount)
         console.log(this.props.totalSavings)
     };

    render(){

        return(
            <React.Fragment>
                <div className="row">
                    <Header />
                    <div className="col-9 col-md-10">
                        <DropDown></DropDown>
                    <div className="text-center balance-dashboard mt-3">
                        <h1>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.props.totalSavings)}</h1>
                        <p>Your Total Savings</p>
                    </div>
                    <div className="mr-5 add-new">
                        <h5 onClick={this.toggleModal}><i className="fas fa-plus mr-2"/>Add New Item</h5>
                    </div>
                    <div className="gray-container mr-3">
                        <div>
                            <AddItem savings={this.props.savings} deleteItemSavings={this.props.deleteItemSavings}/>
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
                            <button type="submit" className="btn">Add New</button>
                        </form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

    

const mapStateToProps = state => {
    return{
        savings: state.savings,
        totalSavings: state.totalSavings
    };
};

const mapDispatchToProps = dispatch => {
    return{
        deleteItemSavings: (id) => {
            dispatch(actionCreators.deleteItemSavings(id))
        },
        addToSavings:(name, amount) => {
            dispatch(actionCreators.savings(name, amount))
        }
    };
  };




export default connect(mapStateToProps, mapDispatchToProps)(Savings);