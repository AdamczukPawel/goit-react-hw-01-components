import css from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendsList = ({ friends }) => {
  return (
    <ul className={`${css.friendList}`}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
