import React, { useState } from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
    //this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

// function Clock(props) {
//   const [date, setDate] = useState(new Date());
//   const [counter, setCounter] = useState(0);
  
//   return (
//      <div>
//         <h1>Привет, мир!</h1>
//       <h2>Сейчас {date.toLocaleTimeString()}.</h2>
//       <p>Counter: {counter}</p>
//       <button onClick={() => { setCounter(counter + 1) }}>Increase</button>
//       </div>
//   );
// }


export default Clock;