// src/BackgroundVideo.js
import React, { useState, useEffect } from 'react';
import './BackgroundVideo.css';

const videoList = [
  "video1.mp4",  // Replace with actual video paths
  "video2.mp4",
  "video3.mp4",
  "video5.mp4",
  "output000.mp4",
  "output001.mp4",
  "output002.mp4",
  "output003.mp4",
  "output004.mp4",
  "output005.mp4",
  "output006.mp4",
  "output007.mp4",
  "output2000.mp4",
  "output2001.mp4",
  "output2002.mp4",
  "output2003.mp4",
  "output2004.mp4",
  "output2005.mp4",
  "output2006.mp4",
  "output2006.mp4",
  "output2007.mp4",
  "output2008.mp4",
  "output2009.mp4",
  "output2010.mp4",
  "output2011.mp4",
  "output2012.mp4",
  "output2013.mp4",
  "output2014.mp4",
  "output2015.mp4",
  "output2016.mp4",
  "output2017.mp4",
  "output2018.mp4",
  "output2019.mp4",
  "output2020.mp4",
];

const getRandomVideo = () => {
  const randomIndex = Math.floor(Math.random() * videoList.length);
  return videoList[randomIndex];
};

const getRandomDuration = () => {
  return Math.floor(Math.random() * (3000 - 500 + 1)) + 500; // Random duration between 500ms and 3000ms
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
      <video autoPlay loop muted key={videoSrc}>
        <source src={`/VIDEOS/${videoSrc}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
