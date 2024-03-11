import { getFullImageFilePath } from "../../services/MoviesPostersDbApi";

import styles from "./ActorCard.module.css";

import Avatar from "@/assets/images/svg/default-avatar.svg?react";

const ActorCard = ({ imageUrl, name, character }) => {
  const imageSource = getFullImageFilePath(imageUrl);

  return (
    <div className={styles.actorCard}>
      {(imageSource && (
        <img
          className={styles.actorImage}
          src={imageSource}
          alt={name}
          /* width='100'
          height='150' */
          width='210'
          height='236'
          style={{ marginBottom: "20px" }}
        />
      )) || (
        <Avatar
          width='210'
          height='236'
          style={{ maxWidth: "100%", marginBottom: "20px", display: "block" }}
        />
      )}
      <p className={styles.actorName} style={{ marginBottom: "10px" }}>
        {name}
      </p>
      <p>Character: {character}</p>
    </div>
  );
};

export default ActorCard;
