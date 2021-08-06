import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';

class Register extends Component {
    state = {
        //PASSAR OS ID HTML DE CADA INPUT AQUI NO OBJ PARA FUNCIONAR O LABEL FOR, A NÃO SER Q QUEIRA USAR PLACEHOLDER INVEZ DE LABEL NAO PRECISO COLOCAR
        registerForm: {
            name: {
                label: 'Nome',
                inputType: 'text',
                value: '',
                validation: {
                    maxLength: 10,
                    required: true,
                    allowWhiteSpace: true,
                },
                touched: false,
                valid: false,
            },
            login: {
                label: 'Login',
                inputType: 'text',
                value: '',
                validation: {
                    maxLength: 10,
                    minLength: 6,
                    required: true,
                },
                touched: false,
                valid: false,
            },
            password: {
                label: 'Senha',
                inputType: 'password',
                value: '',
                validation: {
                    maxLength: 10,
                    minLength: 8,
                    required: true,
                },
                touched: false,
                valid: false,
            },
            confirmPassword: {
                label: 'Confirmar Senha',
                inputType: 'password',
                value: '',
                //TALVEZ CONFIRMAÇÃO SO PRECISE SER IGUAL A SENHA, N PRECISA TER TODAS ESSAS VALIDAÇÕES TB, PQ SENHA JA FEZ ISSO!!!!
                validation: {
                    maxLength: 10,
                    minLength: 8,
                    required: true,
                },
                touched: false,
                valid: false,
            },
            email: {
                label: 'Email',
                inputType: 'text',
                value: '',
                validation: {
                    maxLength: 32,
                    specialChar: '@',
                },
                touched: false,
                valid: false,
            },
            age: {
                label: 'Idade',
                inputType: 'date',
                value: '',
                validation: {
                    required: true,
                },
                touched: false,
                valid: false,
            },
            country: {
                label: 'País',
                inputType: 'select',
                value: '',
                elementConfig: {
                    options: [
                        { display: 'Brasil', value: 'brazil' },
                        { display: 'EUA', value: 'eua' },
                    ],
                },
                validation: {
                    required: true,
                },
                valid: false,
            },
            city: {
                label: 'Estado',
                inputType: 'select',
                value: '',
                elementConfig: {
                    options: [
                        { display: 'São Paulo', value: 'SP' },
                        { display: 'Rio de Janeiro', value: 'RJ' },
                    ],
                },
                valid: false,
            },
            foundUs: {
                label: 'Onde nos encontrou?',
                inputType: 'select',
                value: '',
                elementConfig: {
                    options: [
                        { display: 'Youtuber', value: 'youtuber' },
                        { display: 'Anúncio', value: 'announcement' },
                        { display: 'Amigo', value: 'friend' },
                        { display: 'Redes Sociais', value: 'socialNetwork' },
                        { display: 'Fórum', value: 'forum' },
                    ],
                },
                validation: {
                    required: true,
                },
                valid: false,
            },
            confirm: {
                label: 'Li e estou de acordo com as regras do servidor!',
                inputType: 'checkbox',
                checked: false,
                validation: {
                    requiredChecked: true,
                },
                valid: false,
            },
        },
        formIsValid: false,
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

    /**
     * Check input validity
     * @param {String} value
     * @param {Boolean} checked
     * @param {String} rules
     * @returns Boolean
     */
    checkInputValidity = (value, checked, rules) => {
        const whiteSpaceCheck = /\s+/;
        let isValid = true;

        if (rules) {
            if (!rules.allowWhiteSpace)
                isValid = !value.match(whiteSpaceCheck) && isValid;
            if (rules.required) isValid = value.trim() !== '' && isValid;
            if (rules.requiredChecked) isValid = checked && isValid;
            if (rules.minLength) isValid = value.length >= 8 && isValid;
            if (rules.specialChar) {
                isValid = value.includes(rules.specialChar) && isValid;
            }
        }

        return isValid;
    };

    /**
     * Rule of select options of found us, specify where did see
     * @param {Function} inputValue
     * @param {Object} updatedState
     */
    foundUsRuleSelect = (inputValue, updatedState) => {
        const ruleOpts = ['youtuber', 'announcement', 'socialNetwork', 'forum'];

        if (ruleOpts.includes(inputValue)) {
            const updatedInputsForm = updatedState;

            updatedInputsForm.specifyFoundUs = {
                label: 'Onde??',
                inputType: 'text',
                value: '',
                validation: {
                    required: true,
                    allowWhiteSpace: true,
                },
                valid: false,
            };
        }
    };

    /**
     * Catch the value of input and set in state
     * @param {Function} event
     * @param {String} input
     */
    onChangeInputHandler = (event, input) => {
        const updatedForm = {
            ...this.state.registerForm,
        };
        const updatedFormElement = {
            ...updatedForm[input],
        };

        updatedFormElement.value = event.target.value;
        updatedFormElement.checked = event.target.checked;

        this.foundUsRuleSelect(event.target.value, updatedForm);

        updatedFormElement.valid = this.checkInputValidity(
            event.target.value,
            event.target.checked,
            updatedFormElement.validation
        );

        updatedForm[input] = updatedFormElement;

        this.checkFormValidity(updatedForm);

        this.setState({
            registerForm: updatedForm,
            formIsValid: this.formIsValid,
        });
    };

    /**
     * Check the validity of all input's except the checkbox when user focus out
     * @param {Function} event
     * @param {String} input
     */
    onBlurHandler = (event, input) => {
        const updatedForm = {
            ...this.state.registerForm,
        };
        const updatedFormElement = {
            ...updatedForm[input],
        };

        updatedFormElement.touched = true;

        updatedFormElement.valid = this.checkInputValidity(
            event.target.value,
            event.target.checked,
            updatedFormElement.validation
        );

        // console.log(
        //     'state value e checked:',
        //     updatedFormElement.value,
        //     updatedFormElement.checked
        // );
        // console.log('events:', event.target.checked, event.target.value);
        // console.log(input, ':', updatedFormElement.valid);

        updatedForm[input] = updatedFormElement;

        this.setState({ registerForm: updatedForm });
    };

    testeSend = () => {
        console.log(this.state.registerForm);
    };

    render() {
        const formElementsRegister = [];

        for (let key in this.state.registerForm) {
            formElementsRegister.push({
                id: key,
                data: this.state.registerForm[key],
            });
        }

        const input = formElementsRegister.map((input) => (
            <label htmlFor={input.id} key={input.id}>
                {input.data.label}
                <Input
                    inputType={input.data.inputType}
                    inputValue={input.data.value}
                    inputChecked={input.data.checked}
                    validation={input.data.validation}
                    isValid={!input.data.valid}
                    hasTouched={input.data.touched}
                    selectOptions={
                        input.data.elementConfig
                            ? input.data.elementConfig.options
                            : []
                    }
                    onBlurHandler={(event) =>
                        this.onBlurHandler(event, input.id)
                    }
                    changeInputHandler={(event) =>
                        this.onChangeInputHandler(event, input.id)
                    }
                />
            </label>
        ));

        //talvez terei de substituir o button abaixo por um input para deixa-lo alinhado antes do checkbox
        return (
            <form>
                {input}
                <button>Ler Regras</button>
                <button
                    onClick={this.testeSend}
                    disabled={!this.state.formIsValid}
                >
                    Cadastrar
                </button>
            </form>
        );
    }
}

export default Register;
