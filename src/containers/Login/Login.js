import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LoginBtn from '../../components/UI/Login/LoginBtn/LoginBtn';
import LoginInput from '../../components/UI/Login/LoginInput/LoginInput';

class Login extends Component {
    state = {
        loginForm: {
            login: {
                label: 'Login',
                inputType: 'text',
                value: '',
            },
            password: {
                label: 'Senha',
                inputType: 'password',
                value: '',
            },
        },
        formIsValid: false,
    };

    /**
     * Set the input value in the state
     * @param {Object} event
     */
    onChangeInputValue = (event, inputKey) => {
        const updatedFormLogin = {
            ...this.state.loginForm,
        };

        const updatedFormElement = {
            ...updatedFormLogin[inputKey],
        };

        updatedFormElement.value = event.target.value;

        updatedFormLogin[inputKey] = updatedFormElement;

        this.checkFormValidity(updatedFormLogin);

        this.setState({
            loginForm: updatedFormLogin,
            formIsValid: this.formIsValid,
        });
    };

    /**
     * @description Check form validity
     */
    checkFormValidity = (updatedForm) => {
        const whiteSpaceCheck = /\s+/;

        this.formIsValid = true;

        for (let key in updatedForm) {
            // this.formIsValid = updatedForm[key].value.length > 6; comentei pra passar admin admin na autenticação mock
            this.formIsValid =
                updatedForm[key].value.length >= 5 &&
                !updatedForm[key].value.match(whiteSpaceCheck) &&
                this.formIsValid;
        }
    };

    /**
     * Check if exist user login
     * @param {*} btn
     * @returns boleean
     */
    checkUserLogin = () => {
        let isValid = false;

        const mockPermission = [
            {
                login: {
                    value: 'admin',
                },
                password: {
                    value: 'admin',
                },
            },
        ];

        console.log(
            (isValid = mockPermission.filter(
                (el) =>
                    el.login.value === this.state.loginForm.login.value &&
                    el.password.value === this.state.loginForm.password.value
            ))
        );
    };

    /**
     * @description Buttons action
     */
    onClick = () => {
        this.checkUserLogin();
    };

    render() {
        const formElementsLogin = [];

        for (let key in this.state.loginForm) {
            formElementsLogin.push({
                key,
                data: this.state.loginForm[key],
            });
        }

        const input = formElementsLogin.map((input) => (
            <LoginInput
                key={input.key}
                label={input.data.label}
                id={input.data.label}
                type={input.data.inputType}
                value={input.data.value}
                changeInputValue={(event) =>
                    this.onChangeInputValue(event, input.key)
                }
            />
        ));

        return (
            <div style={{ border: '1px solid black' }}>
                <div>
                    {input}
                    <LoginBtn
                        disabled={!this.state.formIsValid}
                        clicked={this.onClick}
                    >
                        Entrar
                    </LoginBtn>
                </div>
                <div style={{ display: 'flex' }}>
                    <NavLink to="/cadastrar">Registrar</NavLink>
                    <NavLink to="/recuperar-senha">Recuperar Senha</NavLink>
                </div>
            </div>
        );
    }
}

export default Login;
