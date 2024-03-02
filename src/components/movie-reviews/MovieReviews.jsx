import ReviewCard from "@/components/review-card/ReviewCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "@/services/MoviesDbApi";
import { StyledList, StyledWrapper } from "./MovieReviews.styled";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await getMovieReviews(movieId);
      setReviews(results);
    })();
  }, [movieId]);

  if (reviews !== undefined)
    return (
      <StyledWrapper>
        {(reviews.length > 0 && (
          <StyledList>
            {reviews.map(review => (
              <li key={review.id}>
                <ReviewCard
                  authorName={review.author}
                  content={review.content}
                />
              </li>
            ))}
          </StyledList>
        )) || <p>{"We don't have any reviews for this movie."}</p>}
      </StyledWrapper>
    );
  s;
};

export default MovieReviews;
