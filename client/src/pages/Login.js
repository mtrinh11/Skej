import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, TextField } from "react-md";
import { changeEmailInput, changePasswordInput } from '../store/actions/AuthActions'

const mapStateToProps = ({authState}) => {
  return {
    authState
  }
};

const mapActionToProps = (dispatch) => {
  return {
    changeEmailInput: (input) => dispatch(changeEmailInput(input)),
    changePasswordInput: (input) => dispatch(changePasswordInput(input))
  }
};

const Login = (props) => {
  const {} = props;

  const handleEmailChange = ({ target }) => {
    props.changeEmailInput(target.value)
  };
  
  const handlePasswordChange = ({ target }) => {
    props.changePasswordInput(target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
    } catch (error) {
      throw error;
    }
  };
  console.log(props.authState)
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h3>Log In</h3>
        <TextField
          placeholder="EMAIL"
          title="EMAIL"
          name="email"
          type="email"
          onChange={handleEmailChange}
        />
        <TextField
          placeholder="PASSWORD"
          title="PASSWORD"
          name="password"
          type="password"
          onChange={handlePasswordChange}
        />
        <Button type="submit">Login</Button>
        <Link to="/signup">Sign Up</Link>
      </form>
    </section>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
