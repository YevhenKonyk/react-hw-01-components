import React from 'react';
import Section from './Section/Section';
import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import statData from './Statistics/stats-data.json';
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

const App = () => (
  <>
    <Section title="Transaction history">
      <TransactionHistory transactions={transactions} />
    </Section>

    <Section title="Friends list">
      <FriendList friends={friends} />
    </Section>

    <Statistics title="Upload statistics" stats={statData} />

    <Section title="User profile">
      {/* <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      /> */}
      <Profile {...user} />
    </Section>
  </>
);

export default App;
