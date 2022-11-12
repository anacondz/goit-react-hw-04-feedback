import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export const Feedback = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.controls}>
      {options.map(option => {
        return (
          <button
            className={css.controls__btn}
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array.isRequired,
};