import React from 'react';
import moment from 'moment';
import style from './css/ReviewsPagination.css';

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

  componentDidMount() {
    console.log("ComponentDidMount!!")
  }

  componentDidUpdate() {
    console.log("Updated SortedReviews: ", this.props.sortedReviews)
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
          <div className={style.reviewPostContainer} key={index}>
            <div className={style.reviewSmallContainer}>
              <div className={style.reviewMainStarsOuter}>
                <div className={style.reviewMainStarsInner} style={{ width: `${this.ratingWidth(`${todo.rating}`)}` }}></div>
              </div>
              <div className={style.reviewMainTitle}>{todo.title}</div>
              <div className={style.reviewMainBody}>{todo.body}</div>
              <div className={style.reviewMainNickName}>{todo.nickName}</div>
            </div>
            <div className={style.rightBox}>
              <div className={style.reviewDate}>{moment(`${todo.createdAt}`).format('MMM DD, YYYY')}</div><br />
              <div className={style.reviewFit}><strong>Fit:</strong> {this.ratingFit(`${todo.fit}`)} </div>
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

      if (this.state.currentPage === number) {
        return (
          <div key={number} className={style.paginationBox}>
            <li key={number} id={number} className={style.activePage} onClick={this.handleClick}>{number}</li>
          </div>
          )
      } else {
        return (
          <div key={number} className={style.paginationBox}>
            <li key={number} id={number} className={style.inactivePage} onClick={this.handleClick}>{number}</li>
          </div>
        );
      }
    });

    return (
      <div>
          {renderTodos}
        <ul className={style.pageNumbers}>{renderPageNumbers}</ul>
        <img className={style.staticB} src='https://i.ibb.co/zn5y2MM/recent-Views.png' />
        <img className={style.staticB} src='https://i.ibb.co/dBVCwqq/nav-Bottom.png' />
      </div>
    );
  }
}

export default ReviewsPagination;