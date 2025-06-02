// Contact.js
import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: '',
            submitted: false
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Simulate sending data
        console.log("Form submitted:", this.state);
        this.setState({
            name: '',
            email: '',
            message: '',
            submitted: true
        });
    }

    render() {
        return (
            <Container style={{ marginTop: '40px' }}>
                <h2>Contact Us</h2>
                {this.state.submitted && <p style={{ color: 'green' }}>Message sent successfully!</p>}
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={this.state.name}
                            placeholder="Enter your name"
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={this.state.email}
                            placeholder="Enter your email"
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="message"
                            rows={3}
                            value={this.state.message}
                            placeholder="Write your message"
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Send Message
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Contact;