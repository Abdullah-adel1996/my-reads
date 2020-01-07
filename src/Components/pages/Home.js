import React, { Component } from 'react';
import {Link } from 'react-router-dom'
import {getAll, update} from '../../BooksAPI';
import Shelf from '../shelf/Shelf'



export class Home extends Component {
   
    state= {
        books : []
    };
  
    
    componentDidMount () {
        getAll().then((data) => {
            this.setState({books: data})
           
		})
    }
      
    arrayGrouping = (shelf) => {
        return this.state.books.filter((book) => book.shelf === shelf)
    }
 
   // i wrote this

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
        return (
        <div>
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
        <div className="list-books-content">
            <Shelf caption="Currently Reading" books={this.arrayGrouping('currentlyReading') }
           updateHandler={this.updateHandler.bind(this)}/>
            <Shelf caption="Want to Read" books={this.arrayGrouping('wantToRead')}
          updateHandler={this.updateHandler.bind(this)} />
            <Shelf caption="Read" books={this.arrayGrouping('read')}
         updateHandler={this.updateHandler.bind(this)} />
        </div>
        <div className="open-search">
               <Link
                  to="/Search"
                ><button>Add a book</button></Link>
            </div>
        </div>
        )
    }
}

export default Home
