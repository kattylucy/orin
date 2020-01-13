import * as actionTypes from './actions/actionsTypes';

const initialState = {
    income:[],
    savings:[],
    bills:[],
    expenses:[],
    totalIncome:0,
    totalSavings:0,
    totalBills: 0,
    totalExpenses:0,
    totalMoney:0,
}


const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.ADD_TO_INCOME:
            const income = action.payload;
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
            return{
                ...state,
                bills: state.bills.concat(bills),
                totalBills: bills.amount + state.bills.reduce(function(prev, next){return prev + next.amount}, 0),
            }
        case actionTypes.ADD_TO_EXPENSES:
            const expenses = action.payload;
            return{
                ...state,
                expenses: state.expenses.concat(expenses),
                totalExpenses: expenses.amount + state.expenses.reduce(function(prev, next){return prev + next.amount}, 0),
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
                totalBills: totalBills
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
                totalExpenses: totalExpenses
            }
        default:
            return state;
    }
  
};


export default reducer;