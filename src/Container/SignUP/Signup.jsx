import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Redirecting to /register');
        navigate('/registration');
    };

    return (
        <form>
            <h3>Sign Up</h3>
            <br></br>
            <h6>New to FEDS201!, Please Complete this Optional Registration System, so that we can better serve you!</h6>
            <br></br>
            <div className="d-grid">
                <button className="btn btn-primary" type='button' onClick={handleSubmit}>
                    Complete Registration
                </button>
            </div>
            <p className="forgot-password text-right">
                Already registered <a href="/sign-in">sign in?</a>
            </p>
        </form>
    );
}

export default SignUp;
