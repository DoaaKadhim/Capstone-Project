// src/components/VideoClass.jsx
import React from 'react';
import { Jutsu } from 'react-jutsu';

const VideoClass = ({ roomName }) => {
  return (
    <div>
      <h2>Join Video Class</h2>
      <Jutsu
        roomName={roomName}
        displayName="Student"
        onMeetingEnd={() => {
          console.log('Meeting has ended');
        }}
        loadingComponent={<div>Loading...</div>}
      />
    </div>
  );
};

export default VideoClass;
