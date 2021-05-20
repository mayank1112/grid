import './App.css';
import { useEffect } from 'react';
import Box from './components/Box/Box';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [data, setData] = useState('');

  const generateGrid = async () => {
    const response = await axios.get('/index.json');
    setData(response.data.value);
  };

  useEffect(() => {
    generateGrid();
  }, []);

  const onClick = () => {
    console.log('click');
  };

  return (
    <div className="App">
      <Box
        onClick={onClick}
      >{data}</Box>

    </div>
  );
}

export default App;
