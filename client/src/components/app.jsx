import React from 'react';
import ReviewsNav from './ReviewsNav.jsx';
import ReviewsMain from './ReviewsMain.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
    this.fetchReviews = this.fetchReviews.bind(this);
  }

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews() {
    axios
      .get('/api')
      .then(({ data }) => {
        this.setState({
          reviews: data
        })
      })
      .catch(err => console.log("get error: ", err))
  }

  render() {
    return (
      <div className="container">
        <ReviewsNav className="reviewsNav" reviews={this.state.reviews} />
        <ReviewsMain reviews={this.state.reviews} />
      </div>
      )
  }
}

export default App;