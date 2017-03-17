/**
 * Created by brook on 2017/1/11.
 */
import React, { PropTypes } from 'react';

const StarSpan = ({ color, text, style = {}, className = '' }) => {
  const colora = color ? { color } : { color: 'red' };
  return (
    <span className={className} style={style}>
      <a style={colora}>*</a>
      {text}
    </span>
  );
};
StarSpan.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  /* eslint  react/forbid-prop-types: 0 */
  style: PropTypes.object,
};

export default StarSpan;
