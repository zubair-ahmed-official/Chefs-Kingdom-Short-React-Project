// import React from 'react';
import { useContext, useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaArrowLeft } from 'react-icons/fa';
import { app } from '../firebase-config/firebase-config';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider(auth);
const GitHubProvider = new GithubAuthProvider(auth);

const SignIn = () => {
    const location = useLocation();
    const { loggedUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if (email === "" || password === "") {
            setError('Email or Password can not be empty');
            return;
        }

        const from = location?.state?.from?.pathname || '/';
        loggedUser(email, password)
            .then(result => {
                const loggedIn = result.user;
                console.log(loggedIn);
                setError('');
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err.message);
                setError(err.message);
                setSuccess('');
            }
            )
    }
    const [signedIn, setUser] = useState(null);

    const handleGoogleLogin = () => {
        const from = location?.state?.from?.pathname || '/';
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setError('');
                setUser(loggedInUser);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err.message);
                setError(err.message);
                setSuccess('');
            })
    }

    const handleGithub = () => {
        const from = location?.state?.from?.pathname || '/';
        signInWithPopup(auth, GitHubProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setError('');
                setUser(loggedInUser);
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.error(err.message);
                setError(err.message);
                setSuccess('');
            })
    }
    //Signing in form
    return (
        <div className='d-flex justify-content-between m-3' style={{ border: "3px solid crimson" }}>
        <Form onSubmit={handleLogin} className="m-5 p-5"  >
            <h2>Sign In</h2>
            <br></br>
            <Form.Label>Email address</Form.Label> <br></br>
            <input type="email" style={{ width: "400px", height: "45px" }} name="email" placeholder="Enter email" />
            <br></br> <br></br>
            <Form.Label>Password</Form.Label> <br></br>
            <input style={{ width: "400px", height: "45px" }} type="password" name="password" placeholder="Password" />
            <br></br> <br></br>

            {/* <Form.Check type="checkbox" label="Check me out" /> */}

            <button type="submit" className='btn btn-outline-success'> <b>Sign In</b></button>
            <br></br><br></br>
            <p>Create a new account. <Link to='/signUp'><b>Sign Up</b></Link></p>
            <Button variant="outline-primary" onClick={handleGoogleLogin}><FaGoogle /> <b>Login with Google</b></Button>&nbsp;&nbsp;&nbsp;
            <Button variant="outline-dark" onClick={handleGithub}><FaGithub /> <b>Login with Github</b></Button><br></br><br></br>

            <FaArrowLeft className='text-danger' /> <Link to='/' className='text-danger'><b>Back to the Home Page</b></Link>
            <p style={{ color: 'red' }}>{error}</p>
            <p style={{ color: 'green' }}>{success}</p>
        </Form>
        <div className='m-5'>
            <img width="700px" style={{borderRadius: "8px"}} src="https://live.staticflickr.com/65535/52864448417_dee5d35ff0_o.jpg" alt=''></img>
        </div>
        </div>
    );
}

export default SignIn;