import React from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/FeedbackStatistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";


export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  
  };

  onLeaveFeedback = ({ target: { name } }) => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }))
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, prev) => (total += prev));
  };

  countPositiveFeedbackPercentage = totalFeedbacks => {
    const { good } = this.state;

    if (totalFeedbacks > 0) return Math.round((good / totalFeedbacks) * 100);
    return 0;
    
  };
  
  render() {

    const { good, neutral, bad } = this.state;

    const totalFeedbacks = this.countTotalFeedback();
    const positiveFeedbacks =
      this.countPositiveFeedbackPercentage(totalFeedbacks);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />

         
        </Section>

        <Section title="Statistics">
          {totalFeedbacks ? (
            <Statistics
            good={good}
        neutral={neutral}
            bad={bad}
            total={totalFeedbacks}
            positiveFeedbacks={positiveFeedbacks}
          />
          )
            : (<Notification message="There is no feedback" />)
          }
        </Section>
      </>
      
    );
  }
};