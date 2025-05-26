import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5000/api/auth/reset-password/${token}`, { password });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err?.response?.data?.message || "Failed to reset password.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Reset Password</h2>
      <form onSubmit={handleReset}>
        <input
          type="password"
          className="form-control my-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New password"
          required
        />
        <button className="btn btn-success">Reset</button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}

export default ResetPassword;
