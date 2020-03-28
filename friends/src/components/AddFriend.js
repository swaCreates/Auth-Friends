import React, {useState} from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriend= props => {

    const [info, setInfo]= useState({
        id: Date.now(),
        name: '',
        age: null,
        email: ''
    })

    const handleChanges= evt => {
        setInfo({
            ...info,
            [evt.target.name]: evt.target.value
        })
    }

    const submitHandler= evt => {
        evt.preventDefault();

        setInfo({
            name: '',
            age: null,
            email: ''
        })

        axiosWithAuth()
        .post('/api/friends', info)
        .then(() => {
            props.history.push('/friends-list')
        })
        .catch(err => console.log('Error: ', err));

    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input 
                 onChange={handleChanges}
                 placeholder='enter name'
                 name='name'
                 type='text'
                 value={info.name}
                />
                <input 
                 onChange={handleChanges}
                 placeholder='enter age'
                 name='age'
                 type='number'
                 value={info.age}
                />
                <input
                 onChange={handleChanges}
                 placeholder='enter email'
                 name='email'
                 type='email'
                 value={info.email} 
                />
                <button type='submit'>Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriend;