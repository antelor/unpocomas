import React, { useState, useEffect }  from 'react';
import './App.css';
import BackgroundVideo from './BackgroundVideo';
import Timer from './Timer';
import { toZonedTime, format } from 'date-fns-tz';

// Argentina time zone
const argentinaTimeZone = 'America/Argentina/Buenos_Aires';

// Create the target date (February 10, 2025 at 7 PM ART)
const targetDate = new Date('2025-02-10T19:00:00'); // Local time (assumed ART)

// Convert the date to Argentina time
const targetDateInArgentina = toZonedTime(targetDate, argentinaTimeZone);

// Optionally, format it to display (if needed)
const formattedDate = format(targetDateInArgentina, 'yyyy-MM-dd HH:mm:ssXXX', { timeZone: argentinaTimeZone });

function App() {
  const [isTimerOver, setIsTimerOver] = useState( (Date.now() - targetDate) > 0);
  const [isHovered, setIsHovered] = useState(false); // Track hover state


  // Effect to check if the timer is over
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTimerOver(Date.now() > targetDateInArgentina.getTime());
    }, 1000); // Check every 1 second

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run only once when the component mounts  


  const textStyle = {
    fontSize: '4rem',
    fontWeight: 'bold',
    border: '1px solid white',
    backgroundColor: '#44b3a8',
    padding: '1rem',
    opacity: '0.99',
    cursor: isHovered ? 'pointer' : 'default', // Change cursor on hover
    };

  // Function to handle the redirect
  const handleRedirect = () => {
    window.location.href = 'https://hypeddit.com/mqxfqn';
  };

  return (
    <div className="App">
      <BackgroundVideo />
      <div className="content">
        {console.log(isTimerOver)}
        {isTimerOver ? <div 
        style={textStyle} 
        onClick={handleRedirect}
        onMouseEnter={() => setIsHovered(true)} // Set hover state to true when mouse enters
        onMouseLeave={() => setIsHovered(false)} // Set hover state to false when mouse leaves
        >PRESAVE</div> : <Timer targetDate={formattedDate} />}
        
      </div>
    </div>
  );
}

export default App;
