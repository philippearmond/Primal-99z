import PropTypes from 'prop-types';

const LoginBtn = ({ disabled, clicked, children }) => (
    <button disabled={disabled} onClick={() => clicked(children)}>
        {children}
    </button>
);

LoginBtn.propTypes = {
    disabled: PropTypes.bool.isRequired,
    clicked: PropTypes.func.isRequired,
};

export default LoginBtn;
