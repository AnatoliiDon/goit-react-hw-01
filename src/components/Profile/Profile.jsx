import styles from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.profileImg} src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.tagText}>@{tag}</p>
        <p className={styles.locationText}>{location}</p>
      </div>

      <ul className={styles.infoList}>
        <li className={styles.infoListItem}>
          <span className={styles.infoListItemTitle}>Followers</span>
          <span className={styles.infoListItemData}>{followers}</span>
        </li>
        <li className={styles.infoListItem}>
          <span className={styles.infoListItemTitle}>Views</span>
          <span className={styles.infoListItemData}>{views}</span>
        </li>
        <li className={styles.infoListItem}>
          <span className={styles.infoListItemTitle}>Likes</span>
          <span className={styles.infoListItemData}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
