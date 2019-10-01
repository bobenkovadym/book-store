import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../actions/books';
import App from '../components/App';
import orderBy from 'lodash/orderBy';

const sortBy = (books, filterBy, searchQuery) => {
  let finded = '';
  switch (filterBy) {
    case 'all':
      finded = orderBy(books)
      break;
    case 'price_high':
      finded = orderBy(books, 'price', 'desc');
      break;
    case 'price_low':
      finded = orderBy(books, 'price', 'asc');
      break;
    case 'author':
      finded = orderBy(books, 'author', 'asc');
      break;
    default:
      finded = books;
      break;
  }
  return finded.filter(
    o =>
      o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
  );
}

const mapStateToProps = ({ books, filter }) => ({
  books: books.items && sortBy(books.items, filter.filterBy, filter.searchQuery),
  isReady: books.isReady
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(booksActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
