import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';
import '../index.css';


export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')
    const [showPopup, setShowPopup] = useState(false);
    const [showSubmit, setShowSubmit] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleSubmit = () => {
        if (name === '' || message === '' || !isEmailValid(email)) {
            // Display the popup if name or email is empty
            setShowPopup(true);
        } else {
            // Handle the form submission logic (you can replace this with your own logic)
            console.log('Submitted:', { name, email, message });
            // Clear the form
            setName('');
            setEmail('');
            setMessage('');
            // Display a popup saying that the form was submitted successfully
            setShowSubmit(true);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Contact Card</h2>
            <div className="mb-3 inputs">
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" id="name" className="form-control" value={name} onChange={handleNameChange} />
            </div>
            <div className="mb-3 inputs">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" id="email" className="form-control" value={email} onChange={handleEmailChange} />
            </div>
            <div className="mb-3 mes-input">
                <label htmlFor="message" className="form-label">Message:</label>
                <textarea id="message" className="form-control" value={message} onChange={handleMessageChange} />
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>

            {showPopup && (
                <div className="alert alert-danger mt-3">
                    <p>Please fill in all fields with valid info</p>
                    <button className="btn btn-danger" onClick={() => setShowPopup(false)}>Close</button>
                </div>
            )}

            {showSubmit && (
                <div className="alert alert-info mt-3">
                    <p>
                        Thanks for submitting! I will try and
                        <br />
                        reach you when possible!
                    </p>
                    <button className="btn btn-info" onClick={() => setShowSubmit(false)}>Close</button>
                </div>
            )}

        </div>
    );
}