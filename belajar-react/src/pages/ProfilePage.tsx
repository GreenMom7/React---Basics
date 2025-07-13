import { Link, useParams } from "react-router";
import { Button } from "../components/ui/button";

const ProfilePage = () => {
  const params = useParams();
  return (
    <div>
      <h1 className="mb-4">Profile {params.nameSlug}</h1>

      <Button variant="outline" size="sm">
        <Link to="/">Home Page</Link>
      </Button>
    </div>
  );
};

export default ProfilePage;
