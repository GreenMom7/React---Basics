import { Link } from "react-router";
import Counter from "../components/Counter";
import { Button } from "../components/ui/button";

const PlayPage = () => {
  return (
    <>
      <Counter />

      <Button variant="link" size="lg">
        <Link to="/">Home</Link>
      </Button>
    </>
  );
};

export default PlayPage;
