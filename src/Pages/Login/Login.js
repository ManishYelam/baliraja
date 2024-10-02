import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    // Basic validation
    if (!username || !password) {
      setError('Please fill in both fields.');
      return;
    }

    setLoading(true); // Set loading state

    // Simulate an API call (replace this with actual API call)
    setTimeout(() => {
      setLoading(false);
      if (username === 'user' && password === 'pass') {
        // Simulated successful login
        console.log('Login successful:', { username, password });
      } else {
        setError('Invalid username or password.'); // Simulated error response
      }
    }, 2000);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <div className="text-center mb-4">
          <img 
            src="logo.png" 
            alt="Logo" 
            className="mb-3" 
            style={{ width: '100px' }} 
            onError={(e) => { e.target.onerror = null; e.target.src = "placeholder.png"; }} // Placeholder image
          />
          <h4>Welcome Back</h4>
        </div>
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className="mt-3 text-center">
          <a href="#" className="text-muted">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
