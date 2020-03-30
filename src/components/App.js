import React from 'react';
import Section from './Section/Section';
import Profile from './Profile/Profile';
import user from './Profile/user.json';

const App = () => (
  <>
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
