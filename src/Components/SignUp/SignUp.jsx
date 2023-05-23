// import React from 'react';
import { useContext } from 'react';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
    const [accepted, setAcceptance] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const handleCheck = (event) => {
        setAcceptance(event.target.checked);
    }
    const { createUser } = useContext(AuthContext);
    const handleRegister = () => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        console.log(name, email, password, confirm_password, photo);


        if (password !== confirm_password) {
            setError('Password did not match');
            return;
        }
        if (email === "" || password === "") {
            setError('Email or Password can not be empty');
            return;
        }
        createUser(email, password)
            .then(result => {
                const registeredUser = result.user;
                console.log(registeredUser);
                setError('');
                setSuccess('Registered Successfully')
                updateUserData(result.user, name)
            })
            .catch(error => {
                console.error(error.message);
                setSuccess('');
                setError(error.message);
            })

        const updateUserData = (user, name) => {
            updateProfile(user, {
                displayName: name,
                photoURL: photo
            })
                .then(() => console.log("Profile updated"))
                .catch(err => console.error(err))
        }
    }
    //Signing Up form
    return (
        <div className='d-flex justify-content-between m-3' style={{ border: "3px solid green" }}>
            <form onSubmit={handleRegister} className="m-5 p-5">
                <h2>Sign Up</h2>
                <Form.Label>Name</Form.Label> <br></br>
                <input style={{ width: "400px", height: "45px" }} type="text" name="name" placeholder="Name" />
                <br></br> <br></br>

                <Form.Label>Email address</Form.Label> <br></br>
                <input type="email" style={{ width: "400px", height: "45px" }} name="email" placeholder="Enter email" />
                <br></br> <br></br>

                <Form.Label>Password</Form.Label> <br></br>
                <input style={{ width: "400px", height: "45px" }} type="password" name="password" placeholder="Password" />
                <br></br> <br></br>

                <Form.Label>Confirm Password</Form.Label> <br></br>
                <input style={{ width: "400px", height: "45px" }} type="password" name="confirm_password" placeholder="Confirm Password" />
                <br></br> <br></br>

                <Form.Label>Photo URL</Form.Label> <br></br>
                <input style={{ width: "400px", height: "45px" }} type="text" name="photo" placeholder="Photo URL" />
                <br></br> <br></br>

                <Form.Check onClick={handleCheck} type="checkbox" label="Accept terms and conditions" />
                <br></br>
                <button className='btn btn-outline-success' disabled={!accepted}> <b>Sign Up</b></button>
                <br></br><br></br>
                <p>Already have an account. <Link to='/signIn'><b>Sign In</b></Link></p>
                <FaArrowLeft className='text-danger' /> <Link to='/' className='text-danger'><b>Back to the Home Page</b></Link>
                <p style={{ color: 'red' }}>{error}</p>
                <p style={{ color: 'green' }}>{success}</p>
            </form>
            <div className='m-5'>
                <img width="700px" style={{ borderRadius: "8px" }} src="https://live.staticflickr.com/65535/52865464453_269b194ae9_o.jpg" alt=''></img>
            </div>
        </div>
    );
}

export default SignUp;