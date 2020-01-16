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

const Values = ({ budget, expenses, balance }) => (
  <Container>
    <Value label="Budget" value={budget} isPositive />
    <Value label="Expenses" value={expenses} />
    <Value label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);
const mapStateToProps = state => {
  return {
    budget: state.budget,
    expenses: state.totalExpenses,
    balance: state.balance,
  };
};
Values.propTypes = {
  budget: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};
export default connect(mapStateToProps)(Values);
