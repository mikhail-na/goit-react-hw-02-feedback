import PropTypes from 'prop-types';
import { StatisticList, StatisticItem} from './FeedbackStatistics.module'

export const Statistics = ({ good, neutral, bad, total, positiveFeedbacks }) => {

    const arr = [
    { statItem: good, title: 'Good' },
    { statItem: neutral, title: 'Neutral' },
    { statItem: bad, title: 'Bad' },
    { statItem: total, title: 'Total feedbacks' },
    { statItem: positiveFeedbacks, title: 'Positive feedback' },
    ];
    
    return (
        <StatisticList>
            {arr.map(({ statItem, title }) => (
        <StatisticItem key={title}>
          <p>
            {title}:{' '}
            <span>
              {title !== 'Positive feedback'
                ? statItem
                : positiveFeedbacks + '%'}
            </span>
          </p>
        </StatisticItem>
      ))}
        </StatisticList>
    )
    
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbacks: PropTypes.number.isRequired,
};
