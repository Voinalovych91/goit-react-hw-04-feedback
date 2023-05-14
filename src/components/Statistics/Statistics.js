import PropTypes from 'prop-types';
import { StatisticsText } from './Statistics.styled';
export const Statistics = ({
  options,
  statistic,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {options.map((name, i) => {
        return (
          <StatisticsText key={i+1} categoryName={name}>
            {name}: <span>{statistic[name]}</span>
          </StatisticsText>
        );
      })}
      <StatisticsText>
        Total: <span>{total}</span>
      </StatisticsText>
      <StatisticsText categoryName={'good'}>
        Positive feedback: <span>{positivePercentage()}</span>%
      </StatisticsText>
    </>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  statistic: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
