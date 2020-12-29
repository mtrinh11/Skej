import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, TextField } from "react-md";

const mapStateToProps = (state = {});

const mapDispatchToProps = (dispatch = {});

const Login = (props) => {
  const {} = props;

  const handleChange = ({ target }) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
    } catch (error) {
      throw error;
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h3>Log In</h3>
        <TextField
          placeholder="EMAIL"
          title="EMAIL"
          name="email"
          type="email"
          onChange={handleChange}
        />
        <TextField
          placeholder="PASSWORD"
          title="PASSWORD"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <Button type="submit">Login</Button>
        <Link to="/signup">Sign Up</Link>
      </form>
    </section>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
