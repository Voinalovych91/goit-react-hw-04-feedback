import PropTypes from 'prop-types';
import { Wrap, Button } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ onLeavefeedback, options }) => {
  return (
    <Wrap>
      {options.map(name => {
        return (
          <Button key={name} onClick={() => onLeavefeedback(name)}>
            {name}
          </Button>
        );
      })}
    </Wrap>
  );
};
FeedbackOptions.propTypes = {
  onLeavefeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
};
