import React from 'react';
import style from './button.css';
import './statistics/statistics.css'

class Button extends React.Component {
  constructor(props) {
    super(props);
       this.state = {
            good: 0,
            neutral: 0,
            bad: 0
    }

        this.state = {
            good: this.props.good,
            neutral: this.props.neutral,
            bad:  this.props.bad
  }
    
    this.handleIncrement = this.handleIncrement.bind(this)
    };
  
 handleIncrement() {
    console.log('Clicked true', this);
    this.setState({clicked: true})
  }
  
   countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

countPositivePercentage() {
    const { good } = this.state;
    return Math.floor((good / this.countTotalFeedback()) * 100) + '%';
  }
 
  render() {
    return (
      <>
       <p className="btnText">Please leave fedback</p>
        <button className="btnStyle" type="button" onClick={this.handleIncrement}>
          Good
        </button>
        <button className="btnStyle" type="button" onClick={this.handleIncrement}>
         Neutral
        </button>
        <button className="btnStyle" type="button" onClick={this.handleIncrement}>
         Bad
        </button>

        <p className="btnText">Statistics</p>
        <span className="stat-item">Good</span>
        <span className="stat-item">Neutral</span>
        <span className="stat-item">Bad</span>
        <span className="stat-item">Total</span>
        <span className="stat-item">Positive fedback</span>
        </>
  )
  }

//  Button.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   onClick: PropTypes.func.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

  
}

export { Button };