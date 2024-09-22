import styles from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map(({ id, avatar, name, isOnline = false }) => (
        <li key={id} className={styles.listItem}>
          <FriendListItem name={name} avatar={avatar} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
