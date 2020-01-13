import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody, Button} from 'reactstrap';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/actionsCreators';

class ModalSavings extends Component{
    render(){
    return(
        <div>
            <Modal isOpen={this.props.open} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>Add New Saving Item</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group">
                            <label htmlFor="itemName">Item Name</label>
                            <input id="itemName" type="text" className="form-control" onChange={this.props.inputValue} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="itemAmount">Item Amount</label>
                            <input id="itemAmount" type="number" className="form-control" onChange={this.props.itemAmount}/>
                        </div>
                        <Button type="submit" onClick={this.props.addSavings}>Add</Button>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    );
    }
}


const mapDispatchToProps = dispatch => {
    return{
        inputValue: (e) => {
            dispatch(actionCreators.getInputValue(e))
        },
        itemAmount: (e) => {
            dispatch(actionCreators.getAmountValue(e))
        },
        addSavings: (e) => {
            e.preventDefault();
            dispatch(actionCreators.addToSavings(e))
        }
    };
  };

 

export default connect(null, mapDispatchToProps)(ModalSavings);