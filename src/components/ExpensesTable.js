import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import actions from '../redux/actions/expenseFormActions';
import Button from './shared/Button';

const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;

  tr {
    border-bottom: 1px solid #212121;
  }

  td,
  th {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const ExpensesTable = ({ items = [], onRemove }) =>
  items.length > 0 && (
    <Table>
      <thead>
        <tr>
          <th>Expense name</th>
          <th>Expense amount</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, name, amount }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{amount}</td>
            <td>
              <Button label="Delete" onClick={() => onRemove(id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
const mapStateToProps = state => {
  return {
    items: state.expenses,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onRemove: id => dispatch(actions.removeExpense(id)),
  };
};

ExpensesTable.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  onRemove: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
