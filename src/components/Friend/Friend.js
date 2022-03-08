import React from 'react';

const Friend = (props) => {
    const {name, username, email, zipcode} = props.friend ;
    return (
        <div>
            <h6>Name: {name}</h6>
            <h6>User Name: {username}</h6>
            <h6>Email: {email}</h6>
            <h6>Zipcode: {zipcode}</h6>
        </div>
    );
};

export default Friend;