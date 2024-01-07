import React, { useEffect } from 'react';
import './Dashboard.css';
import GaugeChart from 'react-gauge-chart';
import { getSupabaseSession } from '../Supabase';



const Dashboard = () => {
    const supabase = getSupabaseSession();
    const UserData = {};
    const getUserSchoolid = async (supabase_Session) => {
        const { data, error } = await supabase.auth.getUser();
        if (error) {
            console.log(error);
        }
        else {

            const SchoolID = data.user.user_metadata.SchoolID;

            UserData.SchoolID = SchoolID;
            UserData.Email = data.user.email;
            UserData.First_Name = data.user.user_metadata.First_Name;
            UserData.Phone = data.user.user_metadata.Phone;
            UserData.DOB = data.user.user_metadata.DOB;

            const general = document.getElementById('general');
            const attendance = document.getElementById('attendance');
            const signedUpPoints = document.getElementById('signedUpPoints');
            const fundraising = document.getElementById('fundraising');
            const First_Name = document.getElementById('First_Name');
            const Phone = document.getElementById('Phone');
            const DOB = document.getElementById('DOb');
            const Email = document.getElementById('Email');

            const gauge_General = document.getElementById('gauge-General');
            const gauge_Attendance = document.getElementById('gauge-Attendance');
            const gauge_Signed_Up_Points = document.getElementById('gauge-Signed-Up-Points');
            const gauge_Fundraising = document.getElementById('gauge-Fundraising');


            supabase
                .from('Grade Table')
                .select('*')
                .eq('StudentID', SchoolID)
                .then(({ data, error }) => {
                    if (error) {
                        console.error(error);
                        return;
                    }
                    general.innerHTML = (data[0].GeneralRequirements)+ "%";
                    attendance.innerHTML = (data[0].Attendance)+ "%";
                    signedUpPoints.innerHTML = (((data[0].CompletedSignupPoints)/(data[0].SignedUpPoints))*100)+ "%";
                    fundraising.innerHTML = (data[0].Fundraising)+ "%";
                    
                    gauge_General.setAttribute('percent', 1);
                    gauge_Attendance.setAttribute('percent', data[0].Attendance);
                    gauge_Signed_Up_Points.setAttribute('percent', (((data[0].CompletedSignupPoints)/(data[0].SignedUpPoints))*100));
                    gauge_Fundraising.setAttribute('percent', data[0].Fundraising);

                    UserData.GeneralRequirements = data[0].GeneralRequirements;
                    UserData.Attendance = data[0].Attendance;
                    UserData.CompletedSignupPoints = data[0].CompletedSignupPoints;
                    UserData.SignedUpPoints = data[0].SignedUpPoints;
                    UserData.Fundraising = data[0].Fundraising;

                });

            

        }
    }

    getUserSchoolid(supabase).then(() => {
        console.log(UserData);
    });




    return (
        <div>
            <div className="dashboard-header">
                <div className="uselessDiv">
                    <div className='card'>
                        <img src="https://drive.google.com/uc?export=download&id=1S8dI2BbDVyoQ5afaStswKdtTIIjQPRzn"
                            alt="user" className="avatar" />
                    </div>

                    <div className='card'>
                        <h2 id='First_Name' style={{ marginTop: 13 }} >Ritesh Raj</h2>
                        <hr></hr>
                        <h6 id='Phone'>Phone: +1 (248) 805-4935</h6>
                        <h6 id='DOB'>DOB: 2008-03-24</h6>
                        <h6 id='Email'>riteshrajas.arulselvan@gmail.com</h6>

                    </div>

                    <div className='card'>
                        <br /><br />
                        <GaugeChart
                            id="gauge-General"
                            nrOfLevels={30}
                            percent={UserData.GeneralRequirements/100}
                            arcWidth={0.3}
                            hideText={true} />
                        <h2>General </h2>
                        <h6 id='general'>100%</h6>
                    </div>

                    <div className='card'>
                        <br /><br />
                        <GaugeChart id="gauge-Attendance" nrOfLevels={30} percent={1} arcWidth={0.3}
                            hideText={true} />
                        <h2>Attendance</h2>
                        <h6 id='attendance'>100%</h6>
                    </div>

                    <div className='card'>
                        <br /><br />
                        <GaugeChart id="gauge-Signed-Up-Points" nrOfLevels={30} percent={1} arcWidth={0.3}
                            hideText={true} />
                        <h2>Signed Up Points</h2>
                        <h6 id='signedUpPoints'>100%</h6>
                    </div>

                    <div className='card'>
                        <br /><br />
                        <GaugeChart id="gauge-Fundraising" nrOfLevels={30} percent={1} arcWidth={0.3}
                            hideText={true} />
                        <h2>Fundraising</h2>
                        <h6 id='fundraising'>100%</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Dashboard;