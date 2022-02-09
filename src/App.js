import React from 'react';
import Routs from './components/routs/Routs';
import Nav from './components/pages/templates/navbar/Nav'
import FooterNav from './components/pages/templates/footer/FooterNav';


function App() {
  return (
    <div>
      <Nav/>
      <Routs />
     <FooterNav/>
    </div>
  );
}

export default App;
