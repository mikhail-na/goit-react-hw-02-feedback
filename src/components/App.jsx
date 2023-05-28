import React from "react";
import { FeedbackButtons } from "./FeedbackButtons/FeedbackButtons";
import { Statistics } from "./Statistics/FeedbackStatistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";


export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  
  };

  leaveFeedback = ({ target: { name } }) => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }))
  };

  handleTotalFeedbacks = () => {
    return Object.values(this.state).reduce((total, prev) => (total += prev));
  };

  handlePositiveFeedbacks = totalFeedbacks => {
    const { good } = this.state;

    if (totalFeedbacks > 0) return Math.round((good / totalFeedbacks) * 100);
    return 0;
    
  };
  
  render() {

    const { good, neutral, bad } = this.state;

    const totalFeedbacks = this.handleTotalFeedbacks();
    const positiveFeedbacks =
      this.handlePositiveFeedbacks(totalFeedbacks);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackButtons
            options={Object.keys(this.state)}
            leaveFeedback={this.leaveFeedback}
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