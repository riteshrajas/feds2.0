import React, {useState} from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import {createClient} from '@supabase/supabase-js'
const supabaseUrl = 'https://vsvtxornxuzrxbbwwjks.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzdnR4b3JueHV6cnhiYnd3amtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQzMjUxMjYsImV4cCI6MjAxOTkwMTEyNn0.-N-82eVLHQVmJ5Mu6sIq5QHXrJUESwnI5-BYLbKDDF4';
let supabase = createClient(supabaseUrl, supabaseKey);

async function Send_Files(StudentID, Password, FirstName, LastName, DateOfBirth, Email, PhoneNumber) {
    try {
        const { data, error } = await supabase
            .from('Student Table')
            .insert([
                {
                    DOB: DateOfBirth,
                    Email: Email,
                    FirstName: FirstName,
                    LastName: LastName,
                    Password: Password,
                    PhoneNumber: PhoneNumber,
                    Role: "TBC",
                    SchoolID: StudentID,

                }
            ]);

        if (error) {
            if (error.code === '23505') {
                alert('Student ID already exists');
            } else {
                alert(error.message);
            }
        }
        else {

            let { data, error } = await supabase.auth.signUp({
                email: Email,
                password: Password,
            })
            if (error) {
                alert(error.message);
                return false;
            }

            alert('Registration Successful');
            window.location.href = '/sign-in';
            supabase= null;
            return true;
        }
    } catch (error) {

    }

}

export const Registration = () => {
    const [StudentID, setStudentID] = useState()
    const [Password, setPassword] = useState()
    const [FirstName, setFirstName] = useState()
    const [LastName, setLastName] = useState()
    const [DateOfBirth, setDateOfBirth] = useState()
    const [Email, setEmail] = useState()
    const [PhoneNumber, setPhoneNumber] = useState()
    const handleSubmit = () => {
        Send_Files(StudentID, Password, FirstName, LastName, DateOfBirth, Email, PhoneNumber).then(r => console.log(r));
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <>
                    <h1 style={{textAlign: 'center',}}>Registration</h1>
                    <form>
                        <div className="mb-3">
                            <label>Student ID</label>
                            <input
                                type="Student ID"
                                className="form-control"
                                placeholder="Enter your Student ID"
                                onChange={(e) => setStudentID(e.target.value)}
                            />
                            <label>Password</label>
                            <input
                                type="Password"
                                className="form-control"
                                placeholder="Enter your Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label>First Name</label>
                            <input
                                type="First Name"
                                className="form-control"
                                placeholder="Enter your First Name"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <label>Last Name</label>
                            <input
                                type="Last Name"
                                className="form-control"
                                placeholder="Enter your Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <label>Date of Birth</label>
                            <input
                                type="Date"
                                className="form-control"
                                placeholder="Enter your Date of Birth"
                                onChange={(e) => setDateOfBirth(e.target.value)}
                            />
                            <label>Phone Number</label>
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={PhoneNumber}
                                onChange={setPhoneNumber}/>
                            <label>Email</label>
                            <input
                                type="Email"
                                className="form-control"
                                placeholder="Enter your Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                        </div>

                        <div className="d-grid">
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit
                            </button>


                        </div>
                    </form>
                </>
            </div>
        </div>

    )
}