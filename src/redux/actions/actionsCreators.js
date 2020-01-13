import * as actionTypes from './actionsTypes';

export const addToSavings = (e) => {
    e.preventDefault();
    return{
        type: actionTypes.ADD_TO_SAVINGS
    };
};

export const addToExpenses = (e) => {
    e.preventDefault();
    return{
        type: actionTypes.ADD_TO_EXPENSES
    };
};

export const addToBills = (e) => {
    e.preventDefault();
    return{
        type: actionTypes.ADD_TO_BILLS
    };
};

export const addToIncome = (e) => {
    e.preventDefault();
    return{
        type: actionTypes.ADD_TO_INCOME
    };
};

export const getAmountValue = (e) => {
    return{
        type: actionTypes.GET_AMOUNT_VALUE,
        value: e.target.value
    };
};

export const getInputValue = e => ({
    type: actionTypes.GET_INPUT_VALUE,
    value: e.target.value
});

export const deleteItemIncome = id => ({
    type: actionTypes.DELETE_ITEM_INCOME,
    value: id
});

export const deleteItemBills = id => ({
    type: actionTypes.DELETE_ITEM_BILLS,
    value: id
});

export const deleteItemExpenses = id => ({
    type: actionTypes.DELETE_ITEM_EXPENSES,
    value: id
});

export const deleteItemSavings = id => ({
    type: actionTypes.DELETE_ITEM_SAVINGS,
    value: id
});


