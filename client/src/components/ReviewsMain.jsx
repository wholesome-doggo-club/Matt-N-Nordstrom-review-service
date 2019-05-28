import React from 'react';
import ReviewSort from './ReviewSort.jsx';

class ReviewsMain extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="reviewsContainer">
        <ReviewSort reviews={this.props.reviews} />
      </div>
      )
  }
}

export default ReviewsMain;