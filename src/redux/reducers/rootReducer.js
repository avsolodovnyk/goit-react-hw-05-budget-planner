import formTypes from '../types/budgetFormTypes';
import expenseTypes from '../types/expenseFormTypes';

const initState = { budget: 0, expenses: [], balance: 0, totalExpenses: 0 };
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case formTypes.SAVE_TO_BUDGET:
      return {
        ...state,
        budget: state.budget + action.payload.amount,
        balance: state.balance + action.payload.amount,
      };
    case expenseTypes.ADD_EXPENSE_TO_BUDGET:
      return {
        ...state,
        balance: state.balance - action.payload.amount,
        totalExpenses: state.totalExpenses + Number(action.payload.amount),
        expenses: [...state.expenses, action.payload],
      };
    case expenseTypes.REMOVE_EXPENESE_FORM_BUDGET:
      return {
        ...state,
        balance:
          state.balance +
          Number(
            state.expenses.find(expense => expense.id === action.payload.id)
              .amount,
          ),
        totalExpenses:
          state.totalExpenses -
          Number(
            state.expenses.find(expense => expense.id === action.payload.id)
              .amount,
          ),
        expenses: state.expenses.filter(
          expense => expense.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
