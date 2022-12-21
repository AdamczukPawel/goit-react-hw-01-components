import clsx from 'clsx';
import css from './FriendList.module.css';

const FriendsList = ({ friends }) => {
  return (
    <ul className={`${css.friendList}`}>
      {friends.map(friend => (
        <li className={`${css.item}`} key={friend.id}>
          <span
            className={clsx(
              'css.status',
              [friend.isOnline] ? 'css.online' : 'css.offline'
            )}
          ></span>
          <img
            className={`${css.avatar}`}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={`${css.name}`}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendsList;
