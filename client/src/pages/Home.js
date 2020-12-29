import { Link, NavLink } from "react-router-dom";
import { Button } from "react-md";

const Home = (props) => {
  return (
    <section>
      <h1>SKEJ</h1>
      <div>
        <Button>
          <NavLink to="/signup">Sign Up</NavLink>
        </Button>
        <Button>
          <Link to="/login">Login</Link>
        </Button>
      </div>
    </section>
  );
};

export default Home;
