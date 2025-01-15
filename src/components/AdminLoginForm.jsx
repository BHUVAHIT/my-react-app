import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { login } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const AdminLoginForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await login(values);
        if (response.data.role !== 'admin') {
          alert('You are not allowed to login from here');
          return;
        }
        localStorage.setItem('token', response.data.token);
        navigate('/admin-dashboard');
      } catch (error) {
        alert(error.response?.data?.message || 'Login failed');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
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
        {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default AdminLoginForm;
