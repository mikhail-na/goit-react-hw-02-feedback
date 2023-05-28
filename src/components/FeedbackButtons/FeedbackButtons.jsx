import PropTypes from 'prop-types';
import { Button, ButtonItem, ButtonList } from './FeedbackButtons.module';

export const FeedbackButtons = ({ options, leaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => (
        <ButtonItem key={option}>
          <Button name={option} type="button" onClick={leaveFeedback}>
            {option}
          </Button>                    
        </ButtonItem>
      ))}
    </ButtonList>
  );
};

FeedbackButtons.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};