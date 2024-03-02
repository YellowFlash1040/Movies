import React from "react";
import { getFullImageFilePath } from "../../services/MoviesPostersDbApi";

const ActorCard = ({ imageUrl, name, character }) => {
  return (
    <>
      <img
        src={getFullImageFilePath(imageUrl)}
        alt={name}
        width='100'
        height='150'
        style={{ marginBottom: "20px" }}
      />
      <p style={{ marginBottom: "10px" }}>{name}</p>
      <p>Character: {character}</p>
    </>
  );
};

export default ActorCard;
