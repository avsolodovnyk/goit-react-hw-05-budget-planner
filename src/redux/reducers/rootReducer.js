import { combineReducers } from 'redux';
import formTypes from '../types/budgetFormTypes';
import expenseTypes from '../types/expenseFormTypes';

const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case expenseTypes.ADD_EXPENSE_TO_BUDGET:
      return [...state, action.payload];

    case expenseTypes.REMOVE_EXPENESE_FORM_BUDGET:
      return state.filter(expense => expense.id !== action.payload.id);
    default:
      return state;
  }
};
const budgetReducer = (state = 0, action) => {
  switch (action.type) {
    case formTypes.SAVE_TO_BUDGET:
      return state + action.payload.amount;
    default:
      return state;
  }
};
export default combineReducers({
  expenses: expensesReducer,
  budget: budgetReducer,
});
