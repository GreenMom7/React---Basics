import { Link } from "react-router";
import Like from "../components/Like";
import { Button } from "../components/ui/button";

const HomePage = () => {
  return (
    <div>
      <h1 className="mb-5 font-bold font-mono">Welcome to React JS</h1>
      <Like />

      <div className="m-4">
        <Button className="m-2" variant="outline" size="sm">
          <Link to="/play">Play?</Link>
        </Button>
        {/* <Button className="m-2" variant="outline" size="sm">
          <Link to="/profile/">Profile</Link>
        </Button> */}
      </div>
    </div>
  );
};

export default HomePage;
