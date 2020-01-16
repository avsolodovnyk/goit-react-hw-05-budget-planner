import shortid from 'shortid';
import types from '../types/expenseFormTypes';

const addExpense = obj => {
  return {
    type: types.ADD_EXPENSE_TO_BUDGET,
    payload: {
      id: shortid.generate(),
      name: obj.name,
      amount: obj.amount,
    },
  };
};

const removeExpense = id => {
  return {
    type: types.REMOVE_EXPENESE_FORM_BUDGET,
    payload: {
      id,
    },
  };
};

export default { addExpense, removeExpense };
