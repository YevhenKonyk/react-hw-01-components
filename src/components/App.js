import React from 'react';
import Section from './Section/Section';
import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import statData from './Statistics/stats-data.json';

const App = () => (
  <>
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
