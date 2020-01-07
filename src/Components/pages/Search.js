import React, { Component } from 'react';
import Book from '../book/Book';
import {Link} from 'react-router-dom';
import {getAll, update} from '../../BooksAPI';

export class Search extends Component {

    state = {
        query: '',
        books: []
    }
  
    componentDidMount () {
        getAll().then((data) => {
            this.setState({books: data})
        })
       
    }
  
    updateQuery = (query) => {
        this.setState(()=> ({
            query: query.trim()
        }))
       
    }

    changeShelf = (book, shelf) => {
        let books = this.state.books;
        books.forEach((obj, ind) => {
            if (obj.id === book.id){
                books[ind].shelf = shelf
            }
        })
            this.setState({books : books}) 
            }
    updateHandler(book, shelf){
    this.changeShelf(book, shelf)
    update(book, shelf).then()
    }
    
    render() {
        
        let showingbooks = this.state.query === '' ? null:
         this.state.books.filter((book) => book.title.toLowerCase().includes(this.state.query.toLowerCase()))
         .map((book) => (
			<Book key={book.id} {...book} updateHandler={(book,shelf)=> this.updateHandler(book,shelf)}/>))
        return (
            <div>
              <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
					<div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value= {this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                             />
					</div>
               </div>
               <div className="search-books-results">
					<ul className="books-grid">
                  {showingbooks}
					</ul>
				</div>
            </div>
        )
    }
}

export default Search
