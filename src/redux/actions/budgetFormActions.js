import types from '../types/budgetFormTypes';

const saveBudget = amount => {
  return {
    type: types.SAVE_TO_BUDGET,
    payload: {
      amount,
    },
  };
};

export default { saveBudget };
