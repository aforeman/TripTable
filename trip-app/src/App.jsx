import React, {useState} from 'react';
import TripTable from './TripTable';
import './App.css';
import data from './trips.json';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [tripData, setTripData] = useState(data);

  if(Object.keys(tripData).length === 0) {
    return <div>No data!</div>;
  }

  return (
    <div className="App">
      <TripTable tripData={tripData} />
    </div>
  );
}

export default App;
