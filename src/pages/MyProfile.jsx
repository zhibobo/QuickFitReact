import React from 'react';
import ProfileSidebar from '../components/ProfileSidebar.jsx';

const MyProfile = () => {
    return (       
        <>     
        <div className='mymeas-container' >
            <ProfileSidebar />
            <h1 className='head'>My Profile</h1>
        </div>
        </>
    );
};

export default MyProfile;