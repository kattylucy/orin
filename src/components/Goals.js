import React, { Component } from 'react';
import Header from './VerticalDashboard';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/actionsCreators';
import { Modal, ModalBody, Progress} from 'reactstrap';
import DropDown from './Dropdown';
import MainGoal from '../components/MainGoalForm';

import congrats from '../images/rocket.svg';
import trash from '../images/trash.svg';



function AddGoal(props){
    return(
        props.goals.map(item => {
            console.log(item)
            return(
                <div className="gray-container mb-3" key={item.id}>
                    <div className="goal-name d-flex justify-content-between">
                        {item.name === '' ? 
                        <div className="d-flex goals-header">
                            <img src={trash} alt="icon of trash can" />
                            <h5>Goal Name</h5>
                        </div>
                        : 
                        <div className="d-flex goals-header">
                            <img src={trash} alt="icon of trash can"/>
                            <h5>{item.name}</h5>
                        </div>
                        }
                        <div className="d-flex goals-amount">
                            <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.amount)}</p>
                            <p>of</p>
                            <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.amountContribute)}</p>
                        </div>
                    </div>
                    <Progress color="info"  value={item.progressValue}/>

                    {item.amountContribute >= item.amount ?
                            <div className="d-flex justify-content-center congratulation-goal">
                                <img src={congrats} alt="congratulations icon"/>
                                <p>Awesome you crushed your goal of {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.amount)}</p>
                                <img src={congrats} alt="congratulations icon"/>
                            </div>
                            :
                            <div className="d-flex justify-content-between goal-description">
                                <div className="d-flex">
                                    <p>Target Date:{item.time}</p>
                                </div>
                                <p onClick={() => props.contribute(item.id)}>Contribute</p>  
                            </div>
                            }
                </div>
            )
        })
        
    );
};

class Bills extends Component{
    constructor(props){
        super(props);

        this.state={
            open: false,
            openContribute: false,
            currentId: null,
            contributeAmount: 0,
        }
    }

    toggleModal = () => {
        this.setState({
            open: !this.state.open
        })
     };

     contributeModal = (id) => {
        this.setState({
            openContribute: !this.state.openContribute,
            currentId: id
        });
     }


     contributeId = (e) => {
         e.preventDefault();
         const tonumber = Number(this.state.contributeAmount);
         this.props.addToContribute(this.state.currentId, tonumber)

         this.contributeModal();
    };

 

    render(){

        return(
            <React.Fragment>
                <div className="row">
                    <Header />
                    <div className="col-9 col-md-10">
                        <DropDown></DropDown>
                    <div className="text-center balance-dashboard mt-3">
                        <h1>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.props.totalIncome - this.props.totalSavings - this.props.joinExpenses)}</h1>
                        <p>Your Cash Balance</p>
                    </div>
                    <div className="mr-5 add-new">
                        <h5 onClick={this.toggleModal}><i className="fas fa-plus mr-2"/>Add Goal</h5>
                    </div>
                    <div className="mr-3 mb-2">
                        <AddGoal reached={this.state.reached} goals={this.props.goals} progress={this.state.ProgressValue} contribute={(id) => this.contributeModal(id)}/>
                    </div>             
                    </div>
                </div>

                <Modal isOpen={this.state.open} toggle={this.toggleModal}>
                    <ModalBody>
                        <MainGoal toggleModal={this.toggleModal}/>
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.openContribute} toggle={this.contributeModal}>
                    <ModalBody>
                    <form>
                        <div className="form-group goal-form">
                            <h5>How much do you want to add?</h5>
                            <input id="goalAmount" type="text" className="form-control" onChange={e=>(this.setState({contributeAmount:e.target.value}))} />
                        <div className="goal-buttons">
                            <button onClick={this.contributeModal}>Cancel</button>
                            <button onClick={this.contributeId}>Add</button>
                        </div>
                        </div>
                    </form>
                    </ModalBody>
                </Modal>

                </React.Fragment>
        );
    }
}
    

const mapStateToProps = state => {
    return{
        goals: state.goals,
        totalIncome: state.totalIncome,
        totalSavings: state.totalSavings,
        totalMoney: state.totalMoney,
        joinExpenses: state.joinExpenses
    };
};

const mapDispatchToProps = dispatch => {
    return{
        addToContribute: (id, amount) => {
            dispatch(actionCreators.contribute(id, amount))
        }
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Bills);