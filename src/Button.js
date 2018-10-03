import React from 'react';
import PropTypes from 'prop-types';
import withName from './withName';
import withText from './withText';
import withSwapi from './withSwapi';

const Button = ({style,handleClick, name, text}) => {
  console.log(name, text);
  return <button style={style || null} onClick={handleClick}>Click</button>
};

function test()
{console.log('test');}

Button.propTypes = {
  style: PropTypes.object,
  handleClick: PropTypes.func
};

Button.defaultProps = {
  style: { background: '#996699' },
  onClick: test()
}

export default withSwapi(withText(withName(Button)));