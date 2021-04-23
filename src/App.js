import logo from './logo.svg';
import './App.css';
import Slider from '@material-ui/core/Slider';
import { useState } from 'react';
import './style.css';
import ColorPicker from 'rc-color-picker'
import 'rc-color-picker/assets/index.css';

function App() {
  const [value, setValue] = useState(5);
  const [currI, setCurrI] = useState(-1);
  const [currJ, setCurrJ] = useState(-1);
  const [count, setCount] = useState('');
  const [color, setColor] = useState('red');
  const [highlight, setHighlight] = useState('yellow');
  const [display, setDisplay] = useState(false);
  const [hover, setHover] = useState(false);
  const [grid, setGrid] = useState([
    [0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0],
  ]);
  const handleValue = (event, passedValue) => {
    if (passedValue !== value) {
      setValue(passedValue);
      let newGrid = [];

      for (let i = 0; i < passedValue; i++) {
        let row = [];
        for (let j = 0; j < passedValue; j++) {
          row.push(Math.round(Math.random(1)));
        }
        newGrid.push(row);
      }
      setGrid(newGrid);
      setCount('');
    }
  };


  const check = (x, y) => {
    if (grid[y][x] !== 1) {
      setCount('');
    } else {
      setHover(true);
      setCurrI(x);
      setCurrJ(y);
      let newCount = 0;
      for (let i = 0; i < value; i++) {
        for (let j = 0; j < value; j++) {
          if (i + 1 === x && j === y && grid[j][i] === 1 ||
            i - 1 === x && j === y && grid[j][i] === 1 ||
            i === x && j + 1 === y && grid[j][i] === 1 ||
            i === x && j - 1 === y && grid[j][i] === 1) {
            newCount++;
          }
        }
      }
      setCount(newCount);
    }
  };

  const getStyle = (i, j, htmlCol) => {
    let style = {};
    if (htmlCol === 1) {
      style.background = color;
      style.cursor = 'pointer';
    } else {
      style.cursor = 'not-allowed';
    }
    if (
      hover && (
        i + 1 === currI && j === currJ && grid[j][i] === 1 ||
        i - 1 === currI && j === currJ && grid[j][i] === 1 ||
        i === currI && j + 1 === currJ && grid[j][i] === 1 ||
        i === currI && j - 1 === currJ && grid[j][i] === 1)
    ) {
      style.background = highlight;
      style.animation = 'blinker 1s linear infinite';
    }
    return style;
  };

  const displayValue = () => {
    setDisplay(true);
    setHover(true);
  };

  const hideValue = () => {
    setDisplay(false);
    setHover(false);
  };

  const getValue = (i, j) => {
    if (i === currI && j === currJ && display) {
      return count;
    }
    return '';
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <center>
          <div className='grid'>
            <div>Box Color:</div>
            <ColorPicker
              name='color'
              defaultValue={color}
              color={color}
              onChange={color => setColor(color.color)}
            />
            <div>Highlight Color:</div>
            <ColorPicker
              name='highlight'
              color={highlight}
              onChange={color => setHighlight(color.color)}

            />
            <div>Size of grid: {value}</div>
            <Slider
              value={value}
              onChange={handleValue}
              min={2}
              max={7}
              step={1}
              valueLabelDisplay="auto"
            />
            <div className='grid'>
              {grid.map((htmlRow, j) => (<div className='gridRow'>{htmlRow.map((htmlCol, i) => (
                <div className='box' style={getStyle(i, j, htmlCol)} onClick={displayValue} onMouseOut={hideValue} onMouseOver={() => { console.log("i,j", i, j); check(i, j) }}>{getValue(i, j)}</div>
              ))}</div>))}
            </div>
          </div>
        </center>
      </header>
    </div>
  );
}

export default App;
