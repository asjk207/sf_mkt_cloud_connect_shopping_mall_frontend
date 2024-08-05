import React, { useState } from 'react';
import styles from './Login.module.css'; // 모듈 import

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here, you can integrate authentication logic or API calls to validate credentials
        onLogin(username, password);
    };

    return (
        <div className={styles.login__container}>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className={styles.form__group}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.form__group}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className={styles.login__button} type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;