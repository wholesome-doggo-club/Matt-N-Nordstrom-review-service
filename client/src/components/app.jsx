import React from 'react';
import ReviewsNav from './ReviewsNav.jsx';
import ReviewsMain from './ReviewsMain.jsx';
import style from './css/app.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
    this.fetchReviews = this.fetchReviews.bind(this);
    this.refreshReviews = this.refreshReviews.bind(this);
  }

  componentDidMount() {
    this.refreshReviews();
  }

  refreshReviews() {
    axios
      .delete('/reviews/delete')
      .then(() => {
        this.fetchReviews();
      })
      .catch(err => console.log('error delete all:', err))
  }

  fetchReviews() {
    axios
      .get('/reviews')
      .then(({ data }) => {
        this.setState({
          reviews: data
        })
      })
      .catch(err => console.log("get error: ", err))
  }

  render() {
    return (
      <div className={style.container}>
        <ReviewsNav className={style.reviewsNav} reviews={this.state.reviews} />
        <ReviewsMain reviews={this.state.reviews} />
      </div>
      )
  }
}

export default App;