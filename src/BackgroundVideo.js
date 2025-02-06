// src/BackgroundVideo.js
import React, { useState, useEffect } from 'react';
import './BackgroundVideo.css';

const videoList = [
  "video1.mp4",  // Replace with actual video paths
  "video2.mp4",
  "video3.mp4",
  "video5.mp4",
  "output000.mp4",
  "output002.mp4",
  "output004.mp4",
  "output006.mp4",
  "output2000.mp4",
  "output2002.mp4",
  "output2004.mp4",
  "output2006.mp4",
  "output2008.mp4",
  "output2010.mp4",
  "output2012.mp4",
  "output2014.mp4",
  "output2016.mp4",
  "output2018.mp4",
  "output2020.mp4",
];



const getRandomVideo = () => {
  
  // Pick a random video from the 5 selected ones
  const randomIndex = Math.floor(Math.random() * videoList.length);
  return videoList[randomIndex];
};

const getRandomDuration = () => {
  return Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000; // Random duration between 3000ms and 5000ms
};


const BackgroundVideo = () => {
  const [videoSrc, setVideoSrc] = useState(getRandomVideo());
  const [duration, setDuration] = useState(getRandomDuration());

  useEffect(() => {
    const interval = setInterval(() => {
      setVideoSrc(getRandomVideo());
      setDuration(getRandomDuration());
    }, duration);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className="background-video">
      <video autoPlay loop muted key={videoSrc}
        onCanPlay={() => console.log("Video loaded successfully")}
        onError={(e) => {
          console.error("Error loading video:", e);
          console.error("Video source:", e.target.src);
          console.error("Error code:", e.target.error && e.target.error.code);}}
        style={{ backgroundColor: '#000' }} // Ensures black background if video fails
      >
        <source src={`/unpocomas/VIDEOS/${videoSrc}`} type="video/mp4" />
        {console.log(videoSrc)}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
