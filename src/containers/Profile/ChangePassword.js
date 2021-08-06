import React from 'react';
import { Component } from 'react';
import Input from '../../components/UI/Input/Input';

class ChangePassword extends Component {
    state = {
        changePasswordForm: {
            login: {
                type: 'text',
                label: 'Login',
                value: '',
                validation: {
                    required: true,
                },
                touched: false,
                valid: false,
            },
            password: {
                type: 'password',
                label: 'Senha',
                value: '',
                validation: {
                    required: true,
                },
                touched: false,
                valid: false,
            },
            newPassword: {
                type: 'password',
                label: 'Nova Senha',
                value: '',
                validation: {
                    maxLength: 12,
                    minLength: 8,
                    required: true,
                },
                touched: false,
                valid: false,
            },
            //IMPLEMENTAR COMPARAR SENHA AQUI TB
            newPasswordConfirm: {
                type: 'password',
                label: 'Confirme Nova Senha',
                value: '',
                touched: false,
                validation: {
                    required: true,
                },
                valid: false,
            },
        },
        formIsValid: false,
    };

    /**
     * Catch the value of input and set in state
     * @param {Function} event
     * @param {String} input
     */
    onChangeInputHandler = (event, input) => {
        const updatedForm = {
            ...this.state.changePasswordForm,
        };

        const updatedFormElement = {
            ...updatedForm[input],
        };

        updatedFormElement.value = event.target.value;

        updatedFormElement.valid = this.checkInputValidity(
            event.target.value,
            updatedFormElement.validation
        );

        updatedForm[input] = updatedFormElement;

        this.checkFormValidity(updatedForm);

        this.setState({
            changePasswordForm: updatedForm,
            formIsValid: this.formIsValid,
        });
    };

    /**
     * Check the validity of all input's
     * @param {Function} event
     * @param {String} input
     */
    onBlurHandler = (event, input) => {
        const updatedForm = {
            ...this.state.changePasswordForm,
        };

        const updatedFormElement = {
            ...updatedForm[input],
        };

        updatedFormElement.touched = true;

        updatedForm[input] = updatedFormElement;

        this.setState({
            changePasswordForm: updatedForm,
        });
    };

    /**
     * Check input validity
     * @param {String} value
     * @param {String} rules
     * @returns Boolean
     */
    checkInputValidity = (value, rules) => {
        //Remove white spaces of input validity     ===> usar regex msm pq se por 1 letra e der espaço vai da ruim
        // value = value.replace(/\s/g, '');
        const whiteSpaceCheck = /\s+/;

        console.log(value.match(whiteSpaceCheck));

        let isValid = true;

        if (rules) {
            if (rules.required)
                isValid = !value.match(whiteSpaceCheck) && isValid;
            if (rules.minLength)
                isValid = value.length >= rules.minLength && isValid;
        }

        return isValid;
    };

    /**
     * Check the validity of form
     * @param {Object} updatedForm
     */
    checkFormValidity = (updatedForm) => {
        let formIsValid = true;
        for (let key in updatedForm) {
            // console.log(updatedForm[key]);
            formIsValid = updatedForm[key].valid && formIsValid;
        }

        this.formIsValid = formIsValid;
    };

    render() {
        const newPasswordFormElements = [];

        for (let key in this.state.changePasswordForm)
            newPasswordFormElements.push({
                id: key,
                value: this.state.changePasswordForm[key],
            });

        const input = newPasswordFormElements.map((input) => (
            <label htmlFor={input.id} key={input.id}>
                {input.value.label}
                <Input
                    inputType={input.value.type}
                    inputValue={input.value.value}
                    validation={input.value.validation}
                    isValid={!input.value.valid}
                    hasTouched={input.value.touched}
                    changeInputHandler={(event) => {
                        this.onChangeInputHandler(event, input.id);
                    }}
                    onBlurHandler={(event) => {
                        this.onBlurHandler(event, input.id);
                    }}
                />
            </label>
        ));

        return (
            <form onSubmit={() => {}}>
                {input}
                <button type="submit" disabled={!this.state.formIsValid}>
                    Alterar Senha
                </button>
            </form>
        );
    }
}

export default ChangePassword;
