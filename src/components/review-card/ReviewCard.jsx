import styles from "./ReviewCard.module.css";

const ReviewCard = ({ authorName, content }) => {
  const htmlText = { __html: content };
  return (
    <div className={styles.reviewCard}>
      <p className={styles.reviewerName}>
        {/* Author: */} {authorName}
      </p>
      <p className={styles.reviewText} dangerouslySetInnerHTML={htmlText}></p>
      {/* <p className={styles.reviewText}>{content}</p> */}
    </div>
  );
};

export default ReviewCard;
