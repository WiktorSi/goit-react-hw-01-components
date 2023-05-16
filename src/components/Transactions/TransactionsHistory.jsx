import PropTypes from 'prop-types';
import css from './TransactionsHistory.module.css';

export const TransactionsHistory = ({ items }) => (
  <table className={css.transactionHistory}>
    <thead className={css.tableHeader}>
      <tr>
        <th className={css.tableType}>type</th>
        <th className={css.tableAmount}>amount</th>
        <th className={css.tableCurrency}>currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr className={css.tr} key={id}>
          <td className={css.tableType}>{type}</td>
          <td className={css.tableAmount}>{amount}</td>
          <td className={css.tableCurrency}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionsHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};