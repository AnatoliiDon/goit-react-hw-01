import styles from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      {isOnline ? (
        <p className={styles.Online}>Online</p>
      ) : (
        <p className={styles.Offline}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
