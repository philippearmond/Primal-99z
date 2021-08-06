import PropTypes from 'prop-types';

import React from 'react';

const Input = ({
    inputType,
    inputValue,
    inputChecked,
    validation = { maxLength: null },
    isValid,
    hasTouched = false,
    selectOptions = [],
    changeInputHandler,
    onBlurHandler,
}) => {
    const required =
        isValid &&
        hasTouched &&
        !validation.specialChar &&
        !validation.minLength ? (
            <span>Campo requerido!!</span>
        ) : null;

    const emailRequired =
        isValid && hasTouched && validation.specialChar && inputValue.length ? (
            <span>Email porra</span>
        ) : null;

    const minLengthRequired =
        isValid && hasTouched && validation.minLength && inputValue.length ? (
            <span>
                Voce precisa ter {validation.minLength} caracteres né caralho
            </span>
        ) : null;

    const options = selectOptions.map((option) => (
        <option key={option.value} value={option.value}>
            {option.display}
        </option>
    ));

    let input = null;

    switch (inputType) {
        case 'select':
            input = (
                <select onChange={changeInputHandler} onBlur={onBlurHandler}>
                    <option></option>
                    {options}
                </select>
            );
            break;

        case 'checkbox':
            input = (
                <input
                    type={inputType}
                    onChange={changeInputHandler}
                    checked={inputChecked}
                />
            );
            break;

        default:
            input = (
                <input
                    type={inputType}
                    maxLength={validation.maxLength}
                    onChange={changeInputHandler}
                    value={inputValue}
                    onBlur={onBlurHandler}
                />
            );
            break;
    }

    // if (inputType !== 'select') {
    //     input = (
    //         <input
    //             type={inputType}
    //             maxLength={validation.maxLength}
    //             onChange={changeInputHandler}
    //             value={inputValue}
    //         />
    //     );
    // } else
    //     input = (
    //         <select onChange={changeInputHandler}>
    //             <option></option>
    //             {options}
    //         </select>
    //     );

    return (
        <div>
            {input}
            {required}
            {emailRequired}
            {minLengthRequired}
        </div>
    );
};

Input.propTypes = {
    changeInputHandler: PropTypes.func.isRequired,
    inputType: PropTypes.string.isRequired,
    isValid: PropTypes.bool.isRequired,
};

export default Input;
