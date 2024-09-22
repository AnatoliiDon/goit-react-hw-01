import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headTable}>
          <th className={styles.headTableItem}>Type</th>
          <th className={styles.headTableItem}>Amount</th>
          <th className={styles.headTableItem}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <td className={styles.bodyTableItem}>{item.type}</td>
              <td className={styles.bodyTableItem}>{item.amount}</td>
              <td className={styles.bodyTableItem}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
