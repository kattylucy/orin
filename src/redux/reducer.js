import * as actionTypes from './actions/actionsTypes';

const initialState = {
    inputValue:'',
    itemAmount:0,
    categoryValue:'',
    income:[],
    savings:[],
    bills:[],
    expenses:[],
    totalIncome:0,
    totalSavings:0,
    totalBills: 0,
    totalExpenses:0,
    totalMoney:0,
    itemName:'',
}


const reducer = (state = initialState, action) => {
    let number = Number(state.itemAmount);
    const obj = {'name': state.inputValue, 'amount': number, 'id':state.inputValue}

    switch(action.type){
        case actionTypes.GET_INPUT_VALUE:
            return{
                ...state,
                inputValue: action.value,
            }
        case actionTypes.GET_AMOUNT_VALUE:
            return{
                ...state,
                itemAmount: action.value
            }
        case actionTypes.ADD_TO_INCOME:
            return{
                ...state,
                income: [...state.income, obj],
                totalIncome: number + state.income.reduce(function(prev, next){return prev + next.amount}, 0),
            }
        case actionTypes.ADD_TO_SAVINGS:
            return{
                ...state,
                savings: [...state.savings, obj],
                totalSavings: number + state.savings.reduce(function(prev, next){return prev + next.amount}, 0),
            }
        case actionTypes.ADD_TO_BILLS:
            console.log(state.inputValue)
            return{
                ...state,
                bills: [...state.bills, obj],
                totalBills: number + state.bills.reduce(function(prev, next){return prev + next.amount}, 0),
            }
        case actionTypes.ADD_TO_EXPENSES:
            return{
                ...state,
                expenses: [...state.expenses, obj],
                totalExpenses: number + state.expenses.reduce(function(prev, next){return prev + next.amount}, 0),
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
        default:
            return state;
    }
  
};


export default reducer;