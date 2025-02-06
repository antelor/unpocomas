// src/Timer.js
import React from 'react';
import Countdown from 'react-countdown';

const Timer = ({ targetDate }) => {
  return (
    <div className="timer">
      <Countdown date={targetDate} />
    </div>
  );
};

export default Timer;
