import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext)

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
                form.reset()
            })
            .catch(e => console.log(e.message))
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
            <Form.Text className="text-danger"></Form.Text>
            <Button variant="primary" type="submit">Register</Button>
        </Form>
    );
};

export default Register;