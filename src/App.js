import './App.css';
import React from 'react'
import Counter from './components/Counter';
import Card from './components/UI/Card';

function App() {

  const [redCount, setRedCount] = React.useState(0)
  const [greenCount, setGreenCount] = React.useState(0)
  const [blueCount, setBlueCount] = React.useState(111)
  const [opacityCount, setOpacityCount] = React.useState(1.00)

  const styles = {
    margin: '0 auto',
    width: "200px",
    height: "200px",
    backgroundColor: `rgba(${redCount},${greenCount},${blueCount},${opacityCount})`
  }




  return (
    <>
      <h1 class="gradient-text">Color Finder</h1>
      <div className='App' style={{ backgroundColor: `rgba(${redCount},${greenCount},${blueCount},${opacityCount})` }}>
        <Card >
          <div className='view' style={styles}></div>
          <h3 style={{ textAlign: 'center', padding: '5px 10px', }}>
            <em style={{ border: '2px solid gray', padding: '5px 10px', borderRadius: '5px' }}>rgba({redCount},{greenCount},{blueCount},{opacityCount})</em>
          </h3>
          <div className='counters'>
            <Counter
              title={"Red"}
              max={255}
              step={1}
              count={redCount}
              onSetCount={setRedCount}
            />

            <Counter
              title={"Green"}
              max={255}
              step={1}
              count={greenCount}
              onSetCount={setGreenCount}
            />
            <Counter
              title={"Blue"}
              max={255}
              step={1}
              count={blueCount}
              onSetCount={setBlueCount}
            />
            <Counter
              title={"Opacity"}
              max={1}
              step={0.05}
              count={opacityCount}
              onSetCount={setOpacityCount}
            />
          </div>
        </Card>
      </div>
    </>
  );
}

export default App;
