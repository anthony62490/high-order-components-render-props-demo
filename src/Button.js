import React from 'react';
import PropTypes from 'prop-types';
import withName from './withName';
import withText from './withText';
import withSwapi from './withSwapi';

const Button = ({style,handleClick, name, text}) => {
  console.log(name, text);
  return <button style={style || null} onClick={handleClick}>Click</button>
};

Button.propTypes = {
  style: PropTypes.object,
  handleClick: PropTypes.func
};

Button.defaultProps = {
  style: { background: 'red' }
}

export default withSwapi(withText(withName(Button)));