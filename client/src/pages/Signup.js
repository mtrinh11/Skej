import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, TextField } from "react-md";
import { changeEmailInput, 
  changePasswordInput,
  changeNameInput,
  changeUsernameInput 
} from '../store/actions/AuthActions'


const mapStateToProps = ({authState}) => {
  return {
    authState
  }
};

const mapActionToProps = (dispatch) => {
  return {
    changeEmailInput: (input) => dispatch(changeEmailInput(input)),
    changePasswordInput: (input) => dispatch(changePasswordInput(input)),
    changeNameInput: (input) => dispatch(changeNameInput(input)),
    changeUsernameInput: (input) => dispatch(changeUsernameInput(input))
  }
};

const Signup = (props) => {
  const {} = props;

  const handleEmailChange = ({ target }) => {
    props.changeEmailInput(target.value)
  };
  
  const handlePasswordChange = ({ target }) => {
    props.changePasswordInput(target.value)
  };

  const handleNameChange = ({ target }) => {
    props.changeNameInput(target.value)
  };

  const handleUsernameChange = ({ target }) => {
    props.changeUsernameInput(target.value)
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
      <p> hello</p>
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <TextField
          placeholder="NAME"
          title="NAME"
          name="name"
          type="text"
          onChange={handleNameChange}
        />
        <TextField
          placeholder="EMAIL"
          title="EMAIL"
          name="email"
          type="email"
          onChange={handleEmailChange}
        />
        <TextField
          placeholder="USERNAME"
          title="USERNAME"
          name="username"
          type="text"
          onChange={handleUsernameChange}
        />
        <TextField
          placeholder="PASSWORD"
          title="PASSWORD"
          name="password"
          type="password"
          onChange={handlePasswordChange}
        />
        <Button type="submit">Sign Up</Button>
        <Link to="/login">Login</Link>
      </form>
    </section>
  );
};
export default connect(mapStateToProps, mapActionToProps)(Signup);
