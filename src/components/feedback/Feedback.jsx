import React, { Component } from 'react';
import { FeedbackOptions } from '../feedbackOptions/FeedbackOptions';
import { Statistics } from '../statistics/Statistics';
import { Section } from '../section/Section';

class Feedback extends Component {
  static defaultProps = {
    step: 1,
    positivePercentage: '0',

  }
    
    
  handleIncrement = (option) => {
    this.setState({
      [option]: this.state[option] + this.props.step
    });
  };

   countTotalFeedback() {
     const { good, neutral, bad } = this.state;
     const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return 
  }
 
  render() {
    const { good, neutral, bad } = this.state;
    const totalCount = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage(totalCount);

    return (
      <>
        <Section title="Please leave fedback" className="title">
          <FeedbackOptions
            options={this.countTotalFeedbackfeedbackTypes}
            increment={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics" className="title" >
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalCount}
            positivePercentage={positiveFeedback}
          />
        </Section>
      </>
    );
  }  
}

export default Feedback;