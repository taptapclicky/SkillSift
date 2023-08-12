import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';


const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                name
                username
            }
        }
    }
`;

const SigninForm = () => {
    const [role, setRole] = useState("user"); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); 

    
    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        onError: (error) => {
            
            setErrorMessage(error.message);
        },
        onCompleted: (data) => {
            
            console.log(data.login.token);
            setEmail("");
            setPassword("");
        }
    });

    const handleSubmit = (event) => {
        event.preventDefault();

       
        loginUser({
            variables: {
                username: email,
                password: password
            }
        });
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
            {loading && <p>Signing in...</p>} 
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
}

export default SigninForm;
