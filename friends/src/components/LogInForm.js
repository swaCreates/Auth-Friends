import React, {useState} from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';

const LogInForm = props => {

    const [info, setInfo]= useState({
        username: '',
        password: '',
        isLoading: false
    });

    const handleChanges= evt => {
        console.log(info);
        setInfo({
            ...info,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit= evt => {
        evt.preventDefault();

        setInfo({
            username: '',
            password: '',
        })

        axios
        .post('http://localhost:5000/api/login', info)
        .then(res => {
            console.log('success', res);

            setInfo({
                isLoading: true
            })

            window.localStorage.setItem('token', res.data.payload);

            props.history.push('/friends-list')
        })
        .catch(err => console.log('Error: ', err));
    }

    return (
        <div>
            <header>
                <nav>
                    <Link to='/'>Home</Link>
                </nav>
            </header>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='username'
                    name='username' 
                    value={info.username}
                    onChange={handleChanges}
                />
                <input
                    type='password' 
                    placeholder='password'
                    name='password'
                    value={info.password}
                    onChange={handleChanges}
                />
                <button type='submit'>log in</button>
            </form>
        </div>
    )
}

export default LogInForm;
