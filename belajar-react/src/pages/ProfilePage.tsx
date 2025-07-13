import { useParams } from "react-router";

const ProfilePage = () => {
  const params = useParams();
  return (
    <div>
      <h1 className="mb-4">Profile {params.nameSlug}</h1>
    </div>
  );
};

export default ProfilePage;
