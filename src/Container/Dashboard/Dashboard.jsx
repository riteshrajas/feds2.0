import React from 'react';
import './Dashboard.css';
import GaugeChart from 'react-gauge-chart';

const Dashboard = () => {
    
    return (
            <div>
                <div className="dashboard-header">
                    <div className="uselessDiv">

                        <div className='card'>
                            <img src="https://drive.google.com/uc?export=download&id=1S8dI2BbDVyoQ5afaStswKdtTIIjQPRzn"
                                 alt="user" className="avatar"/>
                        </div>
                        <div className='card'>

                            <h1>John Doe</h1>
                        </div>

                        <div className='card'>
                            <br/><br/>
                            <GaugeChart id="gauge-General" nrOfLevels={30} percent={1} arcWidth={0.3} hideText={true}/>
                            <h2>General </h2>
                        </div>

                        <div className='card'>
                            <br/><br/>
                            <GaugeChart id="gauge-Attendance" nrOfLevels={30} percent={1} arcWidth={0.3}
                                        hideText={true}/>
                            <h2>Attendance</h2>
                        </div>

                        <div className='card'>
                            <br/><br/>
                            <GaugeChart id="gauge-Signed-Up-Points" nrOfLevels={30} percent={1} arcWidth={0.3}
                                        hideText={true}/>
                            <h2>Signed Up Points</h2>
                        </div>

                        <div className='card'>
                            <br/><br/>
                            <GaugeChart id="gauge-Fundraising" nrOfLevels={30} percent={1} arcWidth={0.3}
                                        hideText={true}/>
                            <h2>Fundraising</h2>
                        </div>
                    </div>

                </div>

            </div>
    );
};

export default Dashboard;