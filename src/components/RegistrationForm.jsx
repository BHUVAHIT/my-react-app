import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { register } from '../utils/api';

const RegistrationForm = ({ role }) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await register({ ...values, role });
        alert('Registration successful! Please verify your email.');
      } catch (error) {
        alert(error.response?.data?.message || 'Registration failed');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? <p  className="error-message">{formik.errors.firstName}</p> : null}
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? <p  className="error-message">{formik.errors.lastName}</p> : null}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <p  className="error-message">{formik.errors.email}</p> : null}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? <p  className="error-message">{formik.errors.password}</p> : null}
      </div>
      <button
       style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            margin: '10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
           type="submit">Register as {role}</button>
    </form>
  );
};

export default RegistrationForm;
