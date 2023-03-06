// App.jsx
import React, { useEffect, useState, createContext } from 'react';
import Map from './components/Map';
import { getSpotList } from './lib/api/spot';
export const Spot = createContext();

const App = () => {
  const [spotList, setSpotList] = useState([]);

  useEffect(() => {
    handleGetSpotList();
  }, []);

  const handleGetSpotList = async () => {
    try {
      const res = await getSpotList();
      console.log(res.data);
      setSpotList(res.data.spots);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Spot.Provider value={spotList}>
        <Map className='Map'/>
      </Spot.Provider>
    </>
  );
};
export default App;
