import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext)

    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const photoURL = form.photo.value
        const email = form.email.value
        const password = form.password.value

        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setError('')
                form.reset()
                handleUpdateUserProfile(name, photoURL)
                handleEmailVerification()
                toast.success('please verify your email address before login')
            })
            .catch(e => {
                setError(e.message)
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => console.log('done updated'))
            .catch((e) => console.log(e.message))
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(() => { })
    }

    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Photo URL</Form.Label>
                <Form.Control type="text" name="photo" placeholder="Your Photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" required type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" required type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    onClick={handleAccepted}
                    label={
                        <>
                            Accept <Link to='/terms'>Terms And Condition</Link>
                        </>
                    } />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>Register</Button>
            <br />
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;