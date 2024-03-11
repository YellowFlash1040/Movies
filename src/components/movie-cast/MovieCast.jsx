import ActorCard from "../../components/actor-card/ActorCard";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../services/MoviesDbApi";

import styles from "./MovieCast.module.css";
import { Loader } from "../shared/loader/Loader";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await getMovieCast(movieId);
      setIsLoading(false);
      setCast(response.cast);
    })();
  }, [movieId]);

  return (
    <>
      <h3 className={styles.castHeader}>Cast</h3>
      {(isLoading && <Loader />) ||
        (cast.length > 0 && (
          <ul className={styles.castList}>
            {cast.map(actor => (
              <li key={actor.id}>
                <ActorCard
                  name={actor.name}
                  imageUrl={actor.profile_path}
                  character={actor.character}
                />
              </li>
            ))}
          </ul>
        )) || (
          <p className={styles.noCastInfoLabel}>
            {"We don't have any information about this movie cast."}
          </p>
        )}
    </>
  );
};

export default MovieCast;
