import {useState} from "react"

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, TextField } from "react-md";
import { changeEmailInput, changePasswordInput } from '../store/actions/AuthActions'
import { getUser } from '../store/actions/UserActions'

const mapStateToProps = ({authState}) => {
  return {
    authState
  }
};

const mapActionToProps = (dispatch) => {
  return {
    changeEmailInput: (input) => dispatch(changeEmailInput(input)),
    changePasswordInput: (input) => dispatch(changePasswordInput(input)),
    submitGetUser: (formData) => dispatch(getUser(formData))
  }
};

const Login = (props) => {

  const [loadingError, setloadingError] = useState(false)

  const handleEmailChange = ({ target }) => {
    props.changeEmailInput(target.value)
  };

  const handlePasswordChange = ({ target }) => {
    props.changePasswordInput(target.value)
  };

  const handleSubmit = async (e) => {
    console.log(props)
    e.preventDefault();
    try {
      await props.submitGetUser({
        email: props.authState.inputEmail,
        password: props.authState.inputPassword
      })
      props.history.push('/calendar')
    } catch (error) {
      setloadingError(true)
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
        {loadingError ? <p> Error Signing In </p> : <p></p>}
        <Button type="submit" theme="primary" themeType="contained">Login</Button>
        <p>New to Skej? Go to our {" "}
        {<Link to="/signup">Sign Up</Link>}{" "}page!
        </p>
      </form>
    </section>
  );
};
export default connect(mapStateToProps, mapActionToProps)(Login);
