import React, {useState} from 'react';

import {axiosWithAuth} from '../utils/axiosWithAuth';

import {Link} from 'react-router-dom';

import Loader from 'react-loader-spinner';

const LogInForm = props => {

    const [info, setInfo]= useState({
        username: '',
        password: '',
        isLoading: false,
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
            isLoading: true
        })

        setInfo({
            username: '',
            password: '',
        })

        axiosWithAuth()
        .post('/api/login', info)
        .then(res => {
            console.log('success', res);

            window.localStorage.setItem('token', res.data.payload);

            setInfo({
                isLoading: false
            })

            props.history.push('/friends-list')

        })
        .catch(err => console.log('Error: ', err));
    }

    return (
        <div>
            <header>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/friends-list'>Friends</Link>
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
                <button onClick={() => {
                        if(!info.isLoading){
                            return (
                                <Loader
                                    type="Puff"
                                    color="#00BFFF"
                                    height={100}
                                    width={100}
                                    timeout={8000} //8 secs
                                />
                            )
                        }
                    }
                } 
                type='submit'>log in</button>
            </form>
        </div>
    )
}

export default LogInForm;
