import React, { Component } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }


  countTotalFeedbacks() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbacks() {
    const totalFeedbacks = this.countTotalFeedbacks();
    const positiveFeedbacks = this.state.good;
    return Math.round((positiveFeedbacks * 100) / totalFeedbacks);
  }

  onLeaveFeedback(evt) {
    this.setState(prevState => ({ [evt]: prevState[evt] + 1 }));
    
  }
  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = this.countTotalFeedbacks();
    const positivePercentage = this.countPositiveFeedbacks();
  
    return (
      <>
        <Section title="Please leave your feedback">
          <Feedback
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback.bind(this)}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedbacks ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbacks}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </>
    );
  }
}