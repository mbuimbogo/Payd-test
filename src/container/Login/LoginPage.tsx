import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'

interface FormInputDetails {
  username: string;
  password: string;
}

function Login() {
  const [formDetails, setFormDetails] = useState<FormInputDetails>({
    username: '',
    password: '',
  });
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (formDetails.username.trim() === '') {
      setError('Username cannot be empty');
      return;
    }

    if (formDetails.password.trim() === '') {
      setError('Password cannot be empty');
      return;
    }

    if (formDetails.password.trim().length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setFormDetails((prevState) => ({
      ...prevState,
      username: formDetails.username,
      password: formDetails.password,
    }));
    setError('');
    setFormDetails({
      username: '',
      password: '',
    });
    navigate('/dashboard', { replace: true });
  };

  useEffect(() => {
    setIsFormValid(formDetails.username !== '' && formDetails.password !== '');
  }, [formDetails.username, formDetails.password]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormDetails((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div className='main-container'>
      <div className='login-container'>
        <div className='form-container'>
          <h1 className='form-title'>
            Kindly provide the <br /> details below to login:
          </h1>
          <form className='form' onSubmit={handleFormSubmit}>
            <label className='form-label' htmlFor='username'>
              Username
            </label>
            <input
              className={`form-input ${error ? 'form-input-error' : 'form-input'}`}
              type='text'
              id='username'
              value={formDetails.username}
              onChange={handleInputChange}
              placeholder='Enter your username'
            />
            {error && !formDetails.username && <p className='error'>Username cannot be empty</p>}
            <label className='form-label' htmlFor='password'>
              Password
            </label>
            <input
              className={`form-input ${error ? 'pass-input-error' : 'form-input'}`}
              type='password'
              id='password'
              value={formDetails.password}
              onChange={handleInputChange}
              placeholder='Enter your Password'
            />
            {error && !formDetails.password && <p className='error'>Password cannot be empty</p>}
            {error && formDetails.password && formDetails.password.length < 6 && (
              <p className='error'>Password must be at least 6 characters long</p>
            )}
            <button
              type='button'
              className='form-button'
              onClick={handleFormSubmit}
              style={{
                background: isFormValid
                  ? 'linear-gradient(269deg, #0099A8 0%, rgba(0, 51, 161, 0.93) 100%)'
                  : '#9B9B9B',
              }}
              disabled={!isFormValid}
            >
              Login
            </button>
            <a className='forgot-password' href='/#'>
              Forgot your password?
            </a>
          </form>
          <p className='access-request'>
            Want access to the platform?
            <a className='access-link' href='/#'>
              Request Access
            </a>
          </p>
          <p className='footer-text'>
            &copy;{new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
