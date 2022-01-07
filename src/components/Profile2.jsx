import React from 'react'

const Profile2 = () => {
    const user = {
        firstName: "Bandi",
        lastName: "Hajdu"
};

const {firstName, lastName} = user;

    return (
        <div>
            <h2>{firstName}</h2>
            <h3>{lastName}</h3>
        </div>
    )
}

export default Profile2;