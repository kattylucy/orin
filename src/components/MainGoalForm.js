import React, { Component } from 'react';
import Step2 from '../components/Step2';
import Step1 from '../components/Step1';
import Step3 from '../components/Step3';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/actionsCreators';


class MainGoal extends Component{
    constructor(props){
        super(props);

        this.state = {
            step: 1, 
            goalName: '',
            goalAmount: 0,
            goalTime: '', 
          }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.step === 1){
            this.setState({step:2})
        } 
        else if(this.state.step === 2){
            this.setState({step:3})
        }
        else{
            this.props.addToGoals(this.state.goalName, this.state.goalAmount, this.state.goalTime);
            this.props.toggleModal();
        }
    };


    goalName = (e) => {
        this.setState({goalName:e.target.value})
    };

    goalAmount = e => {
        this.setState({goalAmount:Number(e.target.value)})
    };

    goalTime = e => {
        this.setState({goalTime:e.target.value})
    };

    goBack = e => {
        e.preventDefault();
        if(this.state.step === 2){
            this.setState({step:1})
        }
        if(this.state.step === 3){
            this.setState({step:2})
        }
    }

  
    render(){
        return(
            <React.Fragment>
                {this.state.step === 1 ? <Step1 hsubmit={this.handleSubmit} goalName={this.goalName}/> : null }
                {this.state.step === 2 ? <Step2 hsubmit={this.handleSubmit} goalAmount={this.goalAmount} back={this.goBack}/> : null }
                {this.state.step === 3 ? <Step3 hsubmit={this.handleSubmit} goalTime={this.goalTime} back={this.goBack}/> : null}
            </React.Fragment>

        );
    }
}



const mapStateToProps = state => {
    return{
        goals: state.goals
    };
};


const mapDispatchToProps = dispatch => {
    return{
        addToGoals:(name, amount, time) => {
            dispatch(actionCreators.goals(name, amount, time))
        }
    };
  };


export default connect(mapStateToProps, mapDispatchToProps)(MainGoal);