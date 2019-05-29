import React from 'react';
import moment from 'moment';

class ReviewsPagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      todosPerPage: 4,
      reviews: []
    };
    this.ratingWidth = this.ratingWidth.bind(this); //out of 79.5max
    this.ratingFit = this.ratingFit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  ratingWidth(num) {
    let width = (num / 5) * 79.5
    width = Math.round(width * 100) / 100
    return width + 'px';
  };

  ratingFit(num) {
    const sizes = ['small', ,'slightly small', 'true to size', 'slightly large', 'large']
    return sizes[num];
  }

  render() {
    const { todos, currentPage, todosPerPage } = this.state;

    const reviews = this.props.sortedReviews;

    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = reviews.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((todo, index) => {
      return (
          <div className="reviewPostContainer" key={index}>
            <div className="reviewSmallContainer">
              <div className="reviewMainStars-outer">
                <div className="reviewMainStars-inner" style={{ width: `${this.ratingWidth(`${todo.rating}`)}` }}></div>
              </div>
              <div className="reviewMainTitle">{todo.title}</div>
              <div className="reviewMainBody">{todo.body}</div>
              <div className="reviewMainNickName">{todo.nickName}</div>
            </div>
            <div className="rightBox">
              <div className="reviewDate">{moment(`${todo.createdAt}`).format('MMM DD, YYYY')}</div><br />
              <div className="reviewFit"><strong>Fit:</strong> {this.ratingFit(`${todo.fit}`)} </div>
            </div>
          </div>
        )
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(reviews.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    return (
      <div>
          {renderTodos}
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}

export default ReviewsPagination;