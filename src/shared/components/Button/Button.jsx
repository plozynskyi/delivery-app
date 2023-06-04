import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

const Button = ({ type, text, clickHandler, disabled = false }) => {
  return (
    <Btn disabled={disabled} type={type} onClick={clickHandler}>
      {text}
    </Btn>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
};

export default Button;
