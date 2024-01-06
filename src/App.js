import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './Container/Login/Login'
import SignUp from './Container/SignUP/Signup'
import Logo from './logo.png'
import {Registration} from './Container/Regestration_Form/Registration'
import NoPage from './Container/NoPage/Nopage'
import Dashboard from './Container/Dashboard/Dashboard'
import { Analytics } from '@vercel/analytics/react';
import {createClient} from "@supabase/supabase-js";


function App() {
    let supabase = createClient(
        process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY
    )
    return (
        <Router>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={'/'}>
                            <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="logo" />
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/sign-in'}>
                                        <h6>Login</h6>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/sign-up'}>
                                        <h6>Sign up</h6>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link"  to={'https://www.feds201.com'}>
                                        <h6>About Us</h6>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route path="/sign-in" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>

                <Analytics />
            </div>
        </Router>
    )
}
export default App