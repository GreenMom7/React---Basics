import { useLike } from "../hooks/useLike";

const Like = () => {
  const { like, handleLike } = useLike();

  return <button onClick={handleLike}>{like}</button>;
};

export default Like;
