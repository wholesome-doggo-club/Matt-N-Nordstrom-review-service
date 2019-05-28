import React from 'react';

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
      const sizes = ['small', ,'slightly small', 'true to size', 'slightly large', 'large']
      return sizes[avgFit];
    }();
  }

  return (
    <div className="reviewsNav">
      <span className="reviewsNavHeader">REVIEWS</span>
      <span className="reviewsNavFooter">
        <span className="reviewsNavFooter-stars">
          <div className="stars-outer">
            <div className="stars-inner" style={{ width: `${ratingAverage}` }}>
            </div>
          </div> ({numReviews})
        </span>
        <span className="reviewsNavFooter-fit"><b>Fit rating:</b> runs {fitAverage}</span>
        <span className="reviewNavFooter-post">Write a Review</span>
      </span>
    </div>
    )
}

export default ReviewsNav