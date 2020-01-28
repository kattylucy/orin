import * as actionTypes from './actions/actionsTypes';

const initialState = {
    income:[],
    savings:[],
    bills:[],
    expenses:[],
    goals:[],
    totalIncome:0,
    totalSavings: null,
    totalBills: null,
    totalExpenses:null,
    joinExpenses:null,
}


const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.ADD_TO_INCOME:
            const income = action.payload;
            console.log(income)
            return{
                ...state,
                income: state.income.concat(income),
                totalIncome: income.amount + state.income.reduce(function(prev, next){return prev + next.amount}, 0),
            }
        case actionTypes.ADD_TO_SAVINGS:
            const savings = action.payload;
            return{
                ...state,
                savings: state.savings.concat(savings),
                totalSavings: savings.amount + state.savings.reduce(function(prev, next){return prev + next.amount}, 0),
            }
        case actionTypes.ADD_TO_BILLS:
             const bills = action.payload;
             const tbills = bills.amount + state.bills.reduce(function(prev, next){return prev + next.amount}, 0);
            return{
                ...state,
                bills: state.bills.concat(bills),
                totalBills: tbills,
                joinExpenses: tbills + state.totalExpenses
            }
        case actionTypes.ADD_TO_EXPENSES:
            const expenses = action.payload;
            const tExpenses = expenses.amount + state.expenses.reduce(function(prev, next){return prev + next.amount}, 0);
            return{
                ...state,
                expenses: state.expenses.concat(expenses),
                totalExpenses: tExpenses,
                joinExpenses: state.totalBills + tExpenses
            }
        case actionTypes.ADD_TO_GOALS:
            return{
                ...state,
                goals: state.goals.concat(action.payload)
            }
        case actionTypes.ADD_TO_CONTRIBUTE:
            const filterGoals = state.goals.filter(item => item.id === action.payload.id);
            const tonumber = Number(action.payload.amountGoal);
            filterGoals.map(item => {
                const amountContribute = tonumber + item.amountContribute;
                return(
                    item.amountContribute = amountContribute,
                    item.progressValue = amountContribute / item.amount * 100
                )
            });
            return{
                ...state
            }
        case actionTypes.DELETE_ITEM_INCOME:
            const newArrIncome = state.income.filter(item => item.id !== action.value);
            const totalIncome = newArrIncome.reduce(function(prev, next){return prev + next.amount}, 0);
        return{
                ...state,
                income: newArrIncome,
                totalIncome: totalIncome
            }
        case actionTypes.DELETE_ITEM_BILLS:
                const newArrBills = state.bills.filter(item => item.id !== action.value);
                const totalBills = newArrBills.reduce(function(prev, next){return prev + next.amount}, 0);
            return{
                ...state,
                bills: newArrBills,
                totalBills: totalBills,
                joinExpenses: totalBills + state.totalExpenses
            }
        case actionTypes.DELETE_ITEM_SAVINGS:
                const newArrSavings = state.savings.filter(item => item.id !== action.value);
                const totalSavings = newArrSavings.reduce(function(prev, next){return prev + next.amount}, 0);
            return{
                ...state,
                savings: newArrSavings,
                totalSavings: totalSavings
            }
        case actionTypes.DELETE_ITEM_EXPENSES:
                const newArrExpenses = state.expenses.filter(item => item.id !== action.value);
                const totalExpenses = newArrExpenses.reduce(function(prev, next){return prev + next.amount}, 0);
            return{
                ...state,
                expenses: newArrExpenses,
                totalExpenses: totalExpenses,
                joinExpenses: totalExpenses + state.totalBills
            }
        default:
            return state;
    }
  
};


export default reducer;