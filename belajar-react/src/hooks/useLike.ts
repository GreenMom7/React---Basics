import { useState } from "react";

export const useLike = () => {
  const [like, setLike] = useState("Unlike");

  const handleLike = () => {
    setLike((prev) => (prev === "Like" ? "Unlike" : "Like"));
  };

  return { like, handleLike };
};
