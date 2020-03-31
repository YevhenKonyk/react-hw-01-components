import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th className={styles.header}>Type</th>
        <th className={styles.header}>Amount</th>
        <th className={styles.header}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {transactions.map(transaction => (
        <tr key={transaction.id} className={styles.row}>
          <td className={styles.data}>{transaction.type}</td>
          <td className={styles.data}>{transaction.amount}</td>
          <td className={styles.data}>{transaction.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
// id, type, amount, currency

export default TransactionHistory;
