import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map(({ id, avatar, name, isOnline = item }) => (
        <li key={id} className={styles.listItem}>
          <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
          <p className={styles.name}>{name}</p>
          {isOnline ? (
            <p className={styles.Online}>Online</p>
          ) : (
            <p className={styles.Offline}>Offline</p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
