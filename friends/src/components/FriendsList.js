import React, {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';

import {axiosWithAuth} from '../utils/axiosWithAuth';

export const FriendsList= () => {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log(res);
            setFriends(res.data)
        })
        .catch(err => console.log('Error: ', err));
    }, [])

    
    return (
        <div>
            <header>
                <nav>
                    <Link onClick={() => window.localStorage.removeItem('token')} to='/'> Sign Out</Link>
                    <Link to='/add-friend'>Add Friend</Link>
                </nav>
            </header>
            <h2>Friends-Club</h2>
            {friends.map(friend => {
                return (
                    <div key={friend.id}>
                        <p>Name: {friend.name}</p>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </div>
                )
            })}
        </div>
    )
}
