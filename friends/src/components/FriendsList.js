import React from 'react';

export const FriendsList= ({friends}) => {

    return (
        <div>
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
