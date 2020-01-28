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
        id: name
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
        id: name
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
        id: name
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
        id: name
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


/********************
********************
  GOALS
********************
*********************/

export const goals = (name, amount, time) => dispatch => {
    const payload = {
        name,
        amount,
        time,
        id: name,
        amountContribute:0,
        progressValue:0
    }
    dispatch(addToGoals(payload))
};


export const addToGoals = (payload) => {
    return{
        type: actionTypes.ADD_TO_GOALS,
        payload: payload
    };
};

export const contribute = (id, amountGoal) => dispatch => {
    const payload = {
        id,
        amountGoal
    }
    dispatch(addToContribute(payload))
}

export const addToContribute = (payload) => {
    return{
        type: actionTypes.ADD_TO_CONTRIBUTE,
        payload: payload
    };
};
