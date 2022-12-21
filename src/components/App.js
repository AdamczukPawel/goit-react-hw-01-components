import Profile from './Profile';
import Statistics from './Statistics';
import Friends from './FriendList';
import user from '../utilities/user.json';
import data from '../utilities/data.json';
import friends from '../utilities/friends.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friends} />
    </>
  );
};
