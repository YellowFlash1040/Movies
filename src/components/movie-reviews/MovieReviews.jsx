import ReviewCard from "@/components/review-card/ReviewCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "@/services/MoviesDbApi";
import { Loader } from "../../components/shared/loader/Loader";

import styles from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const { results } = await getMovieReviews(movieId);
      setIsLoading(false);
      setReviews(results);
    })();
  }, [movieId]);

  if (reviews !== undefined)
    return (
      <>
        <h3 className={styles.reviewsHeader}>Reviews</h3>
        {(isLoading && <Loader />) ||
          (reviews.length > 0 && (
            <ul className={styles.reviewsList}>
              {reviews.map(review => (
                <li key={review.id}>
                  <ReviewCard
                    authorName={review.author}
                    content={review.content}
                  />
                </li>
              ))}
            </ul>
          )) || (
            <p className={styles.noReviewsLabel}>
              {"We don't have any reviews for this movie."}
            </p>
          )}
      </>
    );
};

export default MovieReviews;
