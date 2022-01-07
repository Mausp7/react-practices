import React from 'react'

const Profile = () => {
    const users = ["Richárd", "Flóra", "Áron", "Betti", "Johnny"];
    const [userA, , ,userB] = users;

    return (
        <div>
            <h2>{userA}</h2>
            <h2>{userB}</h2>
        </div>
    )
}

export default Profile;