import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const { signIn, setLoading } = useContext(AuthContext)

    const [error, setError] = useState()

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const navigate = useNavigate()

    const handleSignIn = (event) => {
        event.preventDefault()

        const form = event.target

        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset()
                setError('')
                if (user.emailVerified) {
                    navigate(from, { replace: true })
                }
                else {
                    toast.error('your email is not verified')
                }
            })
            .catch(e => {
                setError(e.message)
            })
            .finally(() => {
                setLoading(false)
            })

    }

    return (
        <Form onSubmit={handleSignIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" required type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" required placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">Login</Button>
            <br />
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Login;