import React from 'react';
import Layout from '../containers/Layout/Layout';
import Gallary from '../Gallary/Gallary';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Layout>
        <Gallary />
      </Layout>
    </div>
  );
}

export default App;
