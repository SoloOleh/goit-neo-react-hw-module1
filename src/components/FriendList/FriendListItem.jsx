import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friendItem}>
      <img src={avatar} alt="Avatar" width="48" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      {isOnline ? (
        <p className={styles.online}>Online</p>
      ) : (
        <p className={styles.offline}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
