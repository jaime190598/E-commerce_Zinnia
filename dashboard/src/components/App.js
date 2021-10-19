import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <ContentWrapper />
        </div>
    </React.Fragment>
    </BrowserRouter>
  );
}

export default App;