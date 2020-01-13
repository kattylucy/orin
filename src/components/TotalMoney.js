import React from 'react';
import { Link} from 'react-router-dom';


function ReduceArrays({income,savings}){
    const incomeReduce = income.reduce(function(prev, next){
        return prev + next.amount;
        }, 0)

    const savingsReduce = savings.reduce(function(prev,next){
        return prev + next.amount;
    },0)

    return(
        <h5>${incomeReduce - savingsReduce}</h5>
    )
}



function TotalMoney(props){
    return(
        <div className="row mb-5">
            <p className="col-3 ml-5"><Link to="/">Exit</Link></p>
            <div className="text-center col-5">
                <p>Welcome! <b>{props.userName}</b> today's cash</p>
                <ReduceArrays income={props.income} savings={props.savings}/>
            </div>
        </div>
    )

}

export default TotalMoney;