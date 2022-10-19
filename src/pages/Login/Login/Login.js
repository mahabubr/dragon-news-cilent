import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext)

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
                navigate('/')
            })
            .catch(e => console.log(e.message))

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
            <Form.Text className="text-danger"></Form.Text>
            <Button variant="primary" type="submit">Login</Button>
        </Form>
    );
};

export default Login;