import React from 'react';

const renderTime = () => {
  // snipped from https://raw.githubusercontent.com/ryanburgess/react-clock/master/jsx/clock.jsx
  const currentTime = new Date();
  let output;
  let diem = 'AM';
  let h = currentTime.getHours();
  let m = currentTime.getMinutes();
  let s = currentTime.getSeconds();

  if (h === 0) {
    h = 12;
  } else if (h > 12) {
    h -= 12;
    diem = 'PM';
  }

  if (m < 10) {
    m = '0' + m;
  }

  if (s < 10) {
    s = '0' + s;
  }

  output = {
    hours: h,
    minutes: m,
    seconds: s,
    diem
  };

  return output;
};

class Clock extends React.Component {
  constructor() {
    let time = renderTime();
    super();
    this.state = {
      time
    }
  }

  componentDidMount() {
    setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    let output = renderTime();
    this.setState({ hours: output.hours, minutes: output.minutes, seconds: output.seconds, diem: output.diem });
  }

  render() {
    return (
      <p className='clock'>
        { this.state.hours }:{ this.state.minutes }:{ this.state.seconds }
        <span className='diem'> { this.state.diem }</span>
      </p>
    );
  }
}

export default Clock;
