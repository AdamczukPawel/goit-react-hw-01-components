import Profile from './Profile';
import Statistics from './Statistics';
import Friends from './FriendList';
import TransactionHistory from './TransactionHistory';
import user from '../utilities/user.json';
import data from '../utilities/data.json';
import friends from '../utilities/friends.json';
import transactions from '../utilities/transactions.json';

export const App = () => {
  return (
    <div className="app">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <Friends friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};