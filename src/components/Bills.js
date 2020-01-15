import React, { Component } from 'react';
import Header from './VerticalDashboard';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/actionsCreators';
import { Modal, ModalHeader, ModalBody, Alert} from 'reactstrap';
import DropDown from './Dropdown';



function AddItem(props){
    return(
        props.bills.map(item => {
            return(
                <div className="item-container d-flex justify-content-between pt-4 px-3" key={item.id}>
                    <div className="d-flex flex-row">      
                        <i onClick={()=>props.deleteItemBills(item.id)} className="fa fa-trash mr-3" aria-hidden="true" />
                        <p>{item.name}</p>
                    </div>
                    <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.amount)}</p>
                </div>
            );
        })
    );
}

class Bills extends Component{
    constructor(props){
        super(props);

        this.state={
            open: false,
            name:'',
            amount:'',
            alertVisible: false
        }
    }

    toggleModal = () => {
        this.setState({
            open: !this.state.open
        })
     };
 
     handleSubmit(e){
         e.preventDefault();
         const arr = this.props.bills.map(item => item.name)
         const amount = parseFloat(this.state.amount);

         if(arr.includes(this.state.name)){
            this.setState({alertVisible:!this.state.alertVisible})
         }else{
            this.props.addToBills(this.state.name.toLowerCase(), amount);
            this.setState({name:this.state.name, alertVisible:false});
            this.toggleModal();
         }
     };
 

    render(){

        return(
            <React.Fragment>
                <div className="row">
                    <Header />
                    <div className="col-9 col-md-10">
                        <DropDown></DropDown>
                    <div className="text-center balance-dashboard mt-3">
                        <h1>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.props.totalBills)}</h1>
                        <p>Your Total Bills</p>
                    </div>
                    <div className="mr-5 add-new">
                        <h5 onClick={this.toggleModal}><i className="fas fa-plus mr-2"/>Add New Item</h5>
                    </div>
                    <div className="gray-container mr-3">
                        <div>
                            <AddItem bills={this.props.bills} deleteItemBills={this.props.deleteItemBills}/>
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
                            <Alert color="danger" isOpen={this.state.alertVisible}>
                                Sorry, an item with the same name already exist, try changing the name
                            </Alert>
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
        bills: state.bills,
        totalBills: state.totalBills
    };
};


const mapDispatchToProps = dispatch => {
    return{
        deleteItemBills: (id) => {
            dispatch(actionCreators.deleteItemBills(id))
        },
        addToBills:(name, amount) => {
            dispatch(actionCreators.bills(name, amount))
        }
    };
  };




export default connect(mapStateToProps, mapDispatchToProps)(Bills);