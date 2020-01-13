import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody, Button} from 'reactstrap';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/actionsCreators';

class ModalBills extends Component{
    render(){
    return(
        <div>
            <Modal isOpen={this.props.open} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>Add New Bill</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group">
                            <label htmlFor="itemName">Item Name</label>
                            <input id="itemName" type="text"  className="form-control" onChange={this.props.inputValue} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="itemAmount">Item Amount</label>
                            <input id="itemAmount" type="number" className="form-control" onChange={this.props.itemAmount}/>
                        </div>
                        <button type="submit" value="submit" onClick={this.props.addBills}>Add</button>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    );
    }
}

const mapStateToProps = state => {
    return{
        itemName: state.itemName
    };
};



const mapDispatchToProps = dispatch => {
    return{
        inputValue: (e) => {
            dispatch(actionCreators.getInputValue(e))
        },
        itemAmount: (e) => {
            dispatch(actionCreators.getAmountValue(e))
        },
        addBills: (e) => {
            e.preventDefault()
            dispatch(actionCreators.addToBills(e))
        }
    };
  };

 

export default connect(mapStateToProps, mapDispatchToProps)(ModalBills);