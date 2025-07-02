import { useState } from 'react';
import './Login.css';
import userPhoto from './user-photo.jpeg'; 

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      if (username === 'prince' && password === '1111') {
        onLogin(username);
      } else {
        setError('Invalid username or password');
        setIsLoading(false);
      }
    }, 1000);
  }

  return (
    <div className="login-container">
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      <div className="login-card">
        <div className="login-header">
          <div className="user-avatar">
            <img src={userPhoto} alt="User" className="user-photo" />
            <div className="avatar-ring"></div>
          </div>
          <h1 className="welcome-text">Welcome Back</h1>
          <p className="subtitle">Please sign in to continue</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                autoFocus
                className="modern-input"
              />
              <span className="input-icon">👤</span>
            </div>
          </div>

          <div className="input-group">
            <div className="input-wrapper">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="modern-input"
              />
              <span className="input-icon">🔒</span>
            </div>
          </div>

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? (
              <div className="loading-spinner">
                <div className="spinner"></div>
                <span>Signing in...</span>
              </div>
            ) : (
              'Sign In'
            )}
          </button>

          {error && (
            <div className="error-message">
              <span className="error-icon">⚠️</span>
              {error}
            </div>
          )}
        </form>

        <div className="login-footer">
          <div className="developer-credit">
            <div className="credit-line">
              <span className="developed-by">Crafted with ❤️ by</span>
              <strong className="developer-name">Prince Maurya</strong>
            </div>
            <a href="mailto:princemaurya8879@gmail.com" className="email-link">
              princemaurya8879@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
