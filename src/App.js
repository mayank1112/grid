import logo from './logo.svg';
import './App.css';
import Slider from '@material-ui/core/Slider';
import { useEffect, useState } from 'react';
import ColorPicker from 'rc-color-picker'
import 'rc-color-picker/assets/index.css';
import Box from './components/Box/Box';
import { DEFAULT_SIZE, MIN_SIZE, MAX_SIZE } from './constants/config';

let found = [];

function App() {
  const [sizeValue, setSizeValue] = useState(DEFAULT_SIZE);
  const [currX, setCurrX] = useState(-1);
  const [currY, setCurrY] = useState(-1);
  const [color, setColor] = useState('red');
  const [highlight, setHighlight] = useState('yellow');
  const [display, setDisplay] = useState(false);
  const [hover, setHover] = useState(false);
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    generateGrid(sizeValue);
  }, []);

  const generateGrid = passedValue => {
    let newGrid = [];
    for (let i = 0; i < passedValue; i++) {
      let row = [];
      for (let j = 0; j < passedValue; j++) {
        row.push(Math.round(Math.random(1)));
      }
      newGrid.push(row);
    }
    setGrid(newGrid);
  };

  const handleSliderValue = (event, passedValue) => {
    if (passedValue !== sizeValue) {
      setSizeValue(passedValue);
      generateGrid(passedValue)
    }
  };

  const validSquare = (x, y) => x > -1 && x < sizeValue && y > -1 && y < sizeValue;

  const getAndSetFilledSquare = (x, y) => {
    if (validSquare(x, y) && grid[y][x] === 1) {
      if (!found.includes(`${x}${y}`)) {
        found = [...found, `${x}${y}`];
      }
      return true;
    }
  }

  const onMouseOver = (x, y) => {
    found = [];
    if (grid[y][x] === 1) {
      setCurrX(x);
      setCurrY(y);
      getAndSetFilledSquare(x, y);
      searchConnections(x, y, -1, -1, sizeValue * sizeValue);
      setHover(true);
    }
  };

  const searchConnections = (x, y, oldX, oldY, depth) => {
    if (depth === 0) { return; }

    if (!(x === oldX && y === oldY) && getAndSetFilledSquare(x, y)) {
      if (!(x === oldX && y === oldY) && getAndSetFilledSquare(x, y - 1)) {
        searchConnections(x, y - 1, x, y, depth - 1);
      }
      if (!(x === oldX && y === oldY) && getAndSetFilledSquare(x, y + 1)) {
        searchConnections(x, y + 1, x, y, depth - 1);
      }

      if (!(x === oldX && y === oldY) && getAndSetFilledSquare(x + 1, y)) {
        searchConnections(x + 1, y, x, y, depth - 1);
      }

      if (!(x === oldX && y === oldY) && getAndSetFilledSquare(x - 1, y)) {
        searchConnections(x - 1, y, x, y, depth - 1);
      }
    }
  }

  const getStyle = (x, y, value) => {
    let style = {};
    if (value === 1) {
      style.background = color;
      style.cursor = 'pointer';
    } else {
      style.cursor = 'not-allowed';
    }
    if (!(x === currX && y === currY) && hover && found.includes(`${x}${y}`)) {
      style.background = highlight;
      style.animation = 'blinker 1s linear infinite';
    }
    return style;
  };

  const onClick = (x, y) => {
    if (grid[y][x] === 1) {
      setDisplay(true);
      setHover(false);
    }
  };

  const onMouseOut = () => {
    setDisplay(false);
    setHover(false);
  };

  const getBoxValue = (x, y) => {
    if (x === currX && y === currY && display) {
      return found.length;
    }
    return '';
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='grid'>
          <div className='field'>Box Color:{' '}
            <ColorPicker
              name='color'
              defaultValue={color}
              color={color}
              onChange={color => setColor(color.color)}
            />
          </div>
          <div className='field'>Highlight Color:{' '}
            <ColorPicker
              name='highlight'
              color={highlight}
              onChange={color => setHighlight(color.color)}
            />
          </div>
          <div className='field'>Size of grid: <strong>{sizeValue}</strong></div>
          <Slider
            value={sizeValue}
            onChange={handleSliderValue}
            min={MIN_SIZE}
            max={MAX_SIZE}
            step={1}
            valueLabelDisplay="auto"
            marks={true}
          />
          <div className='grid'>
            {grid.map((gridRow, y) => (
              <div className='gridRow' key={y}>
                {gridRow.map((gridItemValue, x) => (
                  <Box
                    style={getStyle(x, y, gridItemValue)}
                    onClick={() => onClick(x, y)}
                    onMouseOut={onMouseOut}
                    onMouseOver={() => onMouseOver(x, y)}
                    key={x}
                  >
                    {getBoxValue(x, y)}
                  </Box>
                ))}
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
