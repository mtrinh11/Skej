import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, TextField } from "react-md";

const mapStateToProps = (state = {});

const mapDispatchToProps = (dispatch = {});

const Signup = (props) => {
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
        <h3>Sign Up</h3>
        <TextField
          placeholder="NAME"
          title="NAME"
          name="name"
          type="text"
          onChange={handleChange}
        />
        <TextField
          placeholder="EMAIL"
          title="EMAIL"
          name="email"
          type="email"
          onChange={handleChange}
        />
        <TextField
          placeholder="USERNAME"
          title="USERNAME"
          name="username"
          type="text"
          onChange={handleChange}
        />
        <TextField
          placeholder="PASSWORD"
          title="PASSWORD"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <Button type="submit">Sign Up</Button>
        <Link to="/login">Login</Link>
      </form>
    </section>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
