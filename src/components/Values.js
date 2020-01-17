import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Value from './Value';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;
const calculateTotalExpenses = expenses => {
  return expenses.reduce((total, expense) => total + Number(expense.amount), 0);
};

const calculateBalance = (budget, expenses) => budget - expenses;

const Values = ({ budget, expenses }) => (
  <Container>
    <Value label="Budget" value={budget} isPositive />
    <Value label="Expenses" value={calculateTotalExpenses(expenses)} />
    <Value
      label="Balance"
      value={calculateBalance(budget, calculateTotalExpenses(expenses))}
      isPositive={
        calculateBalance(budget, calculateTotalExpenses(expenses)) >= 0
      }
    />
  </Container>
);
const mapStateToProps = state => {
  return {
    budget: state.budget,
    expenses: state.expenses,
  };
};
Values.propTypes = {
  budget: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
};
export default connect(mapStateToProps)(Values);
