import  React, {Component} from 'react'
import {createClient, SupabaseClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://vsvtxornxuzrxbbwwjks.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzdnR4b3JueHV6cnhiYnd3amtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQzMjUxMjYsImV4cCI6MjAxOTkwMTEyNn0.-N-82eVLHQVmJ5Mu6sIq5QHXrJUESwnI5-BYLbKDDF4';
let supabase = createClient(supabaseUrl, supabaseKey);

const CheckPassword = async () => {
    const Username = (document.getElementById('username')).value
    const Password = (document.getElementById('password')).value
    let {data, error} = await supabase.auth.signInWithPassword({
        email: Username,
        password: Password,
    })
    if (error) {
        alert(error.message)
    } else {
        alert('Login Success')
        window.location.href = '/dashboard'
    }

}

let login = class Login extends Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Sign In</h3>
                        <div className="mb-3">
                            <label>Email</label>
                            <input
                                id="username"
                                type="protected-text"
                                className="form-control"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="mb-3">
                            <label>Password</label>

                            <input
                                id="password"
                                type="password"
                                className="form-control"
                                placeholder="Enter password">
                            </input>

                        </div>
                        <div className="mb-3" style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%'
                        }}>
                            <div className="custom-control custom-checkbox" align={"left"}>
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customCheck1"
                                    style={{cursor: 'pointer'}}
                                />
                                <label className="custom-control-label" htmlFor="customCheck2">
                                    Remember me
                                </label>
                            </div>
                            <div className="custom-control custom-checkbox" align="right">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customCheck2"
                                    style={{cursor: 'pointer'}}
                                    onClick={() => {
                                        let password = document.getElementById('password')
                                        if (password.type === 'password') {
                                            password.type = 'text'
                                        } else {
                                            password.type = 'password'
                                        }
                                    }}
                                />
                                <label className="custom-control-label" htmlFor="customCheck1">See Password</label>
                            </div>
                        </div>

                        <div className="d-grid">
                            <button type="button" className="btn btn-primary" style={{cursor: 'pointer'}}
                                    onClick={CheckPassword}>

                                Submit
                            </button>
                        </div>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                    </form>
                </div>
            </div>

        )
    }
};
export default login