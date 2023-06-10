import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MerchantRegister = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className='auth-form-container'>
            <form className='register-form' onSubmit={handleSubmit}>
                <label className='label' htmlFor="name">Shop Name</label>
                <input value={name} name='name' id="name" onChange={(e) => setName(e.target.value)}
                    type="name" placeholder="full name"/>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}
                    type="email" placeholder='youremail@gmail.com' id="email" name="email" />
                <label className='label' htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)}
                    type="password" placeholder='*****' id="password" name="password" />
                <label className='label' htmlFor="mobile">Phone Number</label>
                <input value={mobile} onChange={(e) => setMobile(e.target.value)}
                    type="tel" placeholder='12345678' id="mobile" name="mobile" />
                <button>Log In</button>
            </form>
            <nav>
                <Link className='link-button' to="/merchantlogin">Already have an account? Login here.</Link> 
            </nav>
            
        </div>
    );
};

export default MerchantRegister;