import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setFriends(data))
                     }, [])
    return (
        <div>
            <h2>Total Friends: {friends.length}</h2>
           {
               friends.map( friend => <Friend key={Friend.id} friend ={friend}>  </Friend>)
           }
        </div>
    );
};

export default Friends;