import React from 'react';
import ReviewSort from './ReviewSort.jsx';
import style from './ReviewMain.css'

class ReviewsMain extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className={style.reviewsContainer}>
        <ReviewSort reviews={this.props.reviews} />
      </div>
      )
  }
}

export default ReviewsMain;