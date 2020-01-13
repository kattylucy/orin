import React, { Component } from 'react';
import Header from './VerticalDashboard';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/actionsCreators';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';



function AddItem(props){
    return(
        props.bills.map(item => {
            return(
                <div className="item-container d-flex justify-content-between pt-4 px-3" key={item.id}>
                    <div className="d-flex flex-row">      
                        <i onClick={()=>props.deleteItemBills(item.id)} className="fa fa-trash mr-3" aria-hidden="true" />
                        <p>{item.name}</p>
                    </div>
                    <p>${item.amount}</p>
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
         this.props.addToBills(this.state.name, amount)
     };
 

    render(){

        return(
            <React.Fragment>
                <div className="row">
                    <Header />
                    <div className="col-9 col-md-10">
                        <div className="dashboard-nav justify-content-end d-flex pt-3 pr-2">
                            <i className="fa fa-2x fa-user mr-2"/>
                            <p className="mr-2 mt-1">Katty Barroso</p>
                        </div>  
                    <div className="text-center balance-dashboard mt-3">
                        <h1>${this.props.totalBills}</h1>
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