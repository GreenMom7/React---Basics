import { Link } from "react-router";
import Like from "../components/Like";
import { Button } from "../components/ui/button";

const HomePage = () => {
  return (
    <div>
      <h1 className="mb-5">Welcome to React JS</h1>
      <Like />

      <Button className="m-2" variant="link" size="lg">
        <Link to="/play">Play?</Link>
      </Button>
    </div>
  );
};

export default HomePage;
