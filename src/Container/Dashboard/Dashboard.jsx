import React from 'react';
import './Dashboard.css';
import GaugeChart from 'react-gauge-chart';
import { getSupabaseSession } from '../Supabase';

const Dashboard = () => {
    const supabase = getSupabaseSession();
    
    if (!supabase.auth.getUserIdentities()) {
        return <div>Loading...</div>;
    }
    // else {
    //     supabase
    //     .from('Student Table')
    //     .select('*')
    //     .eq('SchoolID', supabase.auth.user().id)
    // }
    

    const style = {
        py: 0,
        width: '100%',
        maxWidth: 360,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
    };
    return (
            <div>
                <div className="dashboard-header">
                    <div className="uselessDiv">

                        <div className='card'>
                            <img src="https://drive.google.com/uc?export=download&id=1S8dI2BbDVyoQ5afaStswKdtTIIjQPRzn"
                                 alt="user" className="avatar"/>
                        </div>

                        <div className='card'>

                            <h2 style={{marginTop: 13}}>Ritesh Raj</h2>
                            <hr></hr>
                            <h6>Phone: +1 (248) 805-4935</h6>

                            <h6>DOB: 2008-03-24</h6>
                            <h6 style={{marginBottom:"100%"}}>riteshrajas.arulselvan@gmail.com</h6>
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