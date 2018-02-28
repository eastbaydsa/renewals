import React from "react";
import { Route } from "react-router-dom";

import Cover from "./components/sections/Cover";
import Main from "./components/sections/Main";
import Contact from "./components/sections/Contact";

const Content = () => (
  <div>
    <Cover />
    <Main />
    <Contact />
  </div>
);

function App() {
  return <Route path="/" component={Content} />;
}

export default App;
