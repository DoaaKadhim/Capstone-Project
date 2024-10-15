// src/component/Profile.js

import React from 'react';

const Profile = () => {
  return (
    <div className="profile">
      <h2>User Profile</h2>
      <p>Welcome to your profile page! Here, you can view and update your personal details.</p>
      
      {/* Add more fields for user information as needed */}
      <div>
        <label>Name: </label>
        <input type="text" value="John Doe" disabled />
      </div>
      <div>
        <label>Email: </label>
        <input type="email" value="john@example.com" disabled />
      </div>

      {/* Add buttons or links for editing the profile */}
      <button>Edit Profile</button>
    </div>
  );
};

export default Profile;
