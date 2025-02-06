import React from 'react';
import './App.css';
import BackgroundVideo from './BackgroundVideo';
import Timer from './Timer';
import { toZonedTime, format } from 'date-fns-tz';

function App() {
  // Argentina time zone
  const argentinaTimeZone = 'America/Argentina/Buenos_Aires';

  // Create the target date (February 10, 2025 at 7 PM ART)
  const targetDate = new Date('2025-02-10T19:00:00'); // Local time (assumed ART)

  // Convert the date to Argentina time
  const targetDateInArgentina = toZonedTime(targetDate, argentinaTimeZone);

  // Optionally, format it to display (if needed)
  const formattedDate = format(targetDateInArgentina, 'yyyy-MM-dd HH:mm:ssXXX', { timeZone: argentinaTimeZone });

  return (
    <div className="App">
      <BackgroundVideo />
      <div className="content">
        <Timer targetDate={formattedDate} />
      </div>
    </div>
  );
}

export default App;
