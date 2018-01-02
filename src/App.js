import React from 'react';
import { Route } from 'react-router-dom';

import Cover from './components/sections/Cover';
import WelcomeSection from './components/sections/WelcomeSection';
import NationalDues from './components/sections/NationalDues';
import LocalDues from './components/sections/LocalDues';
import Contact from './components/sections/Contact';

const Content = () => (
  <div>
    <Cover />
    <WelcomeSection />
    <NationalDues />
    <LocalDues />
    <Contact />
  </div>
);

function App() {
  return <Route path="/" component={Content} />;
}

export default App;
