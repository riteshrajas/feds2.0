import React, {useState} from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import { createClient } from '@supabase/supabase-js'

// const supabase = createClient('https://vsvtxornxuzrxbbwwjks.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzdnR4b3JueHV6cnhiYnd3amtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQzMjUxMjYsImV4cCI6MjAxOTkwMTEyNn0.-N-82eVLHQVmJ5Mu6sIq5QHXrJUESwnI5-BYLbKDDF4')

export const Registration = () => {
    const [value, setValue] = useState()
    return (
        <>
            <h1 style={{textAlign: 'center',}}>Registration</h1>
            <form>
                <div className="mb-3">
                    <label>Student ID</label>
                    <input
                        type="Student ID"
                        className="form-control"
                        placeholder="Enter your Student ID"
                    />
                    <label>Password</label>
                    <input
                        type="Password"
                        className="form-control"
                        placeholder="Enter your Password"
                    />
                    <label>Last Name</label>
                    <input
                        type="Last Name"
                        className="form-control"
                        placeholder="Enter your Last Name"
                    />
                    <label>Date of Birth</label>
                    <input
                        type="Date"
                        className="form-control"
                        placeholder="Enter your Date of Birth"
                    />
                    <label>Phone Number</label>
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue}/>
                    <label>Email</label>
                    <input
                        type="Email"
                        className="form-control"
                        placeholder="Enter your Email"
                    />

                </div>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}