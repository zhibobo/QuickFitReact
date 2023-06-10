import React ,{ useState, useRef, useEffect }from 'react';
import { Link } from 'react-router-dom';
import MyProfile from './MyProfile.jsx';
import { FaUser } from 'react-icons/fa';

const Login = (props) => {
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, pass])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        setEmail('');
        setPass('');
        setSuccess(true);
    }

    return (
        <>
            {success ? (
                <MyProfile />
            ) : (
                <div className='auth-form-container'>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 className='welcome-back' >Welcome Back, User <FaUser /></h1>
                    <form className='login-form' onSubmit={handleSubmit}>
                        <label className='label' htmlFor="email">Email</label>
                        <input 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" 
                            placeholder='youremail@gmail.com' 
                            id="email" 
                            name="email" 
                            autoComplete='off'
                            ref={userRef}
                            requried
                            />
                        <label className='label' htmlFor="passsword">Password</label>
                        <input 
                            value={pass} 
                            onChange={(e) => setPass(e.target.value)}
                            type="password" 
                            placeholder='********' 
                            id="password" 
                            name="password" 
                            required
                            />
                        <button>Log In</button>
                    </form>
                    <nav>
                        <Link className='link-button' to="/register">Don't have an account? Register here.</Link>
                    </nav>
                </div>
            )}
        </>
    );
};

export default Login;