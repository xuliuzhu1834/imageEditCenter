/**
 * Created by brook on 2017/1/2.
 */
import React, { PropTypes } from 'react';

const FormValidate = (props) => {
  const { validate, message, children, style, className } = props;
  if (!validate) {
    return (
      <div
        className={`ant-row has-error ${className || ''}`}
        style={style || {}}
      >
        {children}
        <div className="ant-form-explain">{message}</div>
      </div>
    );
  }
  return (
    <div
      className={`ant-row ${className || ''}`}
      style={style || {}}
    >
      {children}
    </div>
  );
};

FormValidate.propTypes = {
  validate: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  /* eslint  react/forbid-prop-types: 0 */
  children: PropTypes.array,
  /* eslint  react/forbid-prop-types: 0 */
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FormValidate;
