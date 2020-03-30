import React from 'react';
import Section from './Section/Section';
import Profile from './Profile/Profile';
import user from './Profile/user.json';

const App = () => (
  <>
    <Section>
      <Profile {...user} />
    </Section>
  </>
);

export default App;
