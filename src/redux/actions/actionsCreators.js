import * as actionTypes from './actionsTypes';


/********************
********************
  SAVINGS 
********************
*********************/

export const savings = (name, amount) => dispatch => {
    const incomePayload = {
        name,
        amount,
        id: name.length
    }
    setTimeout(() => {
        dispatch(addToSavings(incomePayload));
    }, 1000);
};

export const addToSavings = (incomePayload) => {
    return{
        type: actionTypes.ADD_TO_SAVINGS,
        payload: incomePayload
    };
};

export const deleteItemSavings = id => ({
    type: actionTypes.DELETE_ITEM_SAVINGS,
    value: id
});


/********************
********************
INCOME
********************
*********************/

export const income = (name, amount) => dispatch => {
    const incomePayload = {
        name,
        amount,
        id: name.length
    }
    setTimeout(() => {
        dispatch(addToIncome(incomePayload));
    }, 1000);
};

export const addToIncome = (incomePayload) => {
    return{
        type: actionTypes.ADD_TO_INCOME,
        payload: incomePayload
    };
};

export const deleteItemIncome = id => ({
    type: actionTypes.DELETE_ITEM_INCOME,
    value: id
});

/********************
********************
 BILLS
********************
*********************/

export const bills = (name, amount) => dispatch => {
    const billsPayload = {
        name,
        amount,
        id: name.length
    }
    setTimeout(() => {
        dispatch(addToBills(billsPayload));
    }, 1000);
};

export const deleteItemBills = id => ({
    type: actionTypes.DELETE_ITEM_BILLS,
    value: id
});


export const addToBills = (billsPayload) => {
    return{
        type: actionTypes.ADD_TO_BILLS,
        payload:billsPayload
    };
};

/********************
********************
  EXPENSES
********************
*********************/


export const expenses = (name, amount) => dispatch => {
    const expensesPayload = {
        name,
        amount,
        id: name.length
    }
    setTimeout(() => {
        dispatch(addToExpenses(expensesPayload));
    }, 1000);
};

export const deleteItemExpenses = id => ({
    type: actionTypes.DELETE_ITEM_EXPENSES,
    value: id
});


export const addToExpenses = (expensesPayload) => {
    return{
        type: actionTypes.ADD_TO_EXPENSES,
        payload: expensesPayload
    };
};


