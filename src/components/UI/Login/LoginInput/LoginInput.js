import React from 'react';
import PropTypes from 'prop-types';

const LoginInput = ({ label, id, type, value, changeInputValue }) => (
    <React.Fragment>
        <label htmlFor={id}>{label}</label>
        <input
            type={type}
            id={id}
            maxLength="16"
            value={value}
            onChange={changeInputValue}
        />
    </React.Fragment>
);

LoginInput.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    changeInputValue: PropTypes.func.isRequired,
};

export default LoginInput;
