// MyForm.js
import React, { useState } from 'react';
import './MyForm.css'
import { useDispatch } from 'react-redux';
import { setUserName } from './store/userSlice';
import { useNavigate } from 'react-router-dom';

import './MyForm.css';

const MyForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validate = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (formData.name.trim() === '') {
      valid = false;
      newErrors.name = 'Name is required';
    }

    if (!validateEmail(formData.email)) {
      valid = false;
      newErrors.email = 'Invalid email address';
    }

    if (!validatePassword(formData.password)) {
      valid = false;
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
     
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }
      // Dispatch action to set the user name in the Redux store
     dispatch(setUserName(formData.name));
      navigate('/universityInfo');

  
    // Redirect to the next page
   
   
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="center-form">
        <div className="title">
          <center> <h2>Registration</h2></center>
        </div>

        <div className="name-form">
          <label htmlFor="name" className="form-label">
            Name :
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <div className="text-danger">{errors.name}</div>}
        </div>

        <div className="email-form">
          <label htmlFor="email" className="form-label">
            Email :
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>

        <div className="password-form">
          <label htmlFor="password" className="form-label">
            Password :
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <div className="text-danger">{errors.password}</div>}
        </div>

        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default MyForm;