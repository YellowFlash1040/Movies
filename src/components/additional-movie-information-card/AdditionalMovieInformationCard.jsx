import { NavLink } from "react-router-dom";
import styles from "./AdditionalMovieInformationCard.module.css";

const AdditionalMovieInformationCard = ({ previousPage }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.sectionHeader}>Additional information</h2>
      <ul className={styles.additionalInfoList}>
        <li>
          <NavLink
            className={styles.additionalInfoButton}
            state={{ from: previousPage }}
            to={`cast`}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styles.additionalInfoButton}
            state={{ from: previousPage }}
            to={`reviews`}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdditionalMovieInformationCard;
