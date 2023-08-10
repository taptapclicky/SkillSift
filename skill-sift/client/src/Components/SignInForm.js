import React, { useState } from 'react';

const SigninForm = () => {
    const [role, setRole] = useState("user"); // Default to "user"
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        setEmail("");
        setPassword("");
    };

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Role:
                    <select value={role} onChange={e => setRole(e.target.value)}>
                        <option value="user">User</option>
                        <option value="professional">Professional</option>
                    </select>
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </label>
                <br />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default SigninForm;
