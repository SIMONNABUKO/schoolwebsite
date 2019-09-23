import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

class Dashboard extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                <h1>This is the Dashboard</h1>
                <Footer/>
            </div>
        )
    }
}
export default Dashboard;