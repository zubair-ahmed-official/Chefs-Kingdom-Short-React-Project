// import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div  style={{ textAlign: "center", marginTop: '50px' }}>
            <h2 id='contact' style={{color:"purple"}}>Contact Us</h2>
            <form action="https://formsubmit.co/saad03261@gmail.com" method="POST">
                <input className='inputContact'  type="text" name="name" placeholder="Name" required /><br />
                <input className='inputContact'  type="email" name="email" placeholder="E-Mail" required /><br />
                <textarea className='inputTextArea'  placeholder="Your message" name="message" required></textarea><br />
                <button type="submit" className="btn btn-dark">Send &nbsp;&nbsp;<i
                    className="rotate fa-regular fa-paper-plane"></i></button>
            </form>
        </div>
    );
};

export default Contact;