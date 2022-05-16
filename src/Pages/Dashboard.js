import React from 'react'
import Header from '../components/Dashboard/Header';
import Sidebar from '../components/Dashboard/Sidebar';
import './dashboard.scss';

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <Sidebar />
        <div className='dashboardContainer'>
          <Header />
        </div>
    </div>
  )
}

export default Dashboard