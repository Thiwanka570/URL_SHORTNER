import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert, Navbar } from 'react-bootstrap';
import { FaLink } from 'react-icons/fa';
import './Home.css';  // Custom CSS file for additional styling
import axios from 'axios';

function Home() {
    const [url, setUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');
    const [error, setError] = useState('');

    // Function to simulate shortening the URL (you can integrate with a backend later)
    const handleShortenUrl = async (e) => {
        e.preventDefault();

        if (!url) {
            setError('Please enter a valid URL');
            setShortenedUrl('');
            return;
        }

        try {
            const responce = await axios.post('http://127.0.0.1:5000/shorten', { url });
            setShortenedUrl(responce.data.shortendUrl);
        } catch (error) {
            setError('Something went wrong. Please try again later.');
        }

    };

    return (
        <div className="home-page">
            {/* Navbar */}
            <Navbar className='p-2' bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Shortly</Navbar.Brand>
            </Navbar>

            <Container className="pt-5">
                <Row className="justify-content-center">
                    <Col md={6}>
                        {/* Hero Section */}
                        <div className="hero-text text-center">
                            <h1>Welcome to Shortly!</h1>
                            <p>Shorten your long URLs and share them easily with friends!</p>
                        </div>

                        {/* Form to input the URL */}
                        <Form onSubmit={handleShortenUrl}>
                            <Form.Group controlId="formBasicUrl">
                                <Form.Label>Enter your long URL</Form.Label>
                                <div className="input-group">
                                    <Form.Control
                                        type="url"
                                        placeholder="https://example.com"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                        required
                                    />
                                    <Button variant="primary" type="submit">
                                        Shorten
                                    </Button>
                                </div>
                            </Form.Group>
                        </Form>

                        {/* Show error message if URL is invalid */}
                        {error && <Alert variant="danger">{error}</Alert>}

                        {/* Show shortened URL */}
                        {shortenedUrl && (
                            <Card className="mt-4">
                                <Card.Body>
                                    <h5>Shortened URL:</h5>
                                    <div className="d-flex align-items-center">
                                        <FaLink className="mr-2" />
                                        <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
                                            {shortenedUrl}
                                        </a>
                                    </div>
                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                </Row>
            </Container>

            {/* Footer */}
            <footer className="footer text-center py-4">
                <p>&copy; 2024 Shortly. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
