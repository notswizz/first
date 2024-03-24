import Head from 'next/head';
import { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <div>
        <h2>Login</h2>
        <Login />
      </div>
      <div>
        <h2>Register</h2>
        <Register />
      </div>
    </div>
  );
}
