import React from 'react';
import style from './css/ReviewsNav.css';

const ReviewsNav = (props) => {

  let ratingAverage = '0%';
  let fitAverage = '';
  let numReviews = 0;
  if (props.reviews.length > 0) {
    let avg = 0;
    ratingAverage = function() {
      props.reviews.forEach(review => {
        avg += review.rating
      })
      avg = avg / props.reviews.length
      avg = Math.round((avg / 5) * 100)

      numReviews = props.reviews.length
      return avg+'%';
    }();

    fitAverage = function() {
      let avgFit = 0;
      props.reviews.forEach(review => {
        avgFit += review.fit;
      })
      avgFit = Math.round(avgFit / props.reviews.length)
      const sizes = ['runs small', ,'runs slightly small', 'runs true to size', 'runs slightly large', 'runs large']
      return sizes[avgFit];
    }();
  }

  return (
    <div className={style.reviewsNav}>
      <span className={style.reviewsNavHeader}>REVIEWS</span>
      <span className={style.reviewsNavFooter}>
        <span className={style.reviewsNavFooterStars}>
          <div className={style.starsOuter}>
            <div className={style.starsInner} style={{ width: `${ratingAverage}` }}>
            </div>
          </div> ({numReviews})
        </span>
        <span className={style.reviewsNavFooterFit}><b>Fit rating:</b> {fitAverage}</span>
        <span className={style.reviewNavFooterPost}>Write a Review</span>
      </span>
    </div>
    )
}

export default ReviewsNav