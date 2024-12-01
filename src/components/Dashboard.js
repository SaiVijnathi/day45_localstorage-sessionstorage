import React from 'react';
import TopNavigation from './TopNavigation';
import {useLocation} from 'react-router-dom';

function Dashboard() {

  let location = useLocation();
  console.log(location);

  return (
    <div>
      <TopNavigation/>
        <h1>Dashboard</h1>
        <h2>{location && location.state && location.state.msg ? location.state.msg : "Hi"}</h2>
    </div>
  )
}

export default Dashboard;