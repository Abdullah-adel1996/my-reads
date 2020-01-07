import React, { Component } from 'react'

import Book from '../book/Book'


export class Shelf extends Component {
	render() {
		let books = this.props.books.map((book) => (
			<Book key={book.pageCount} {...book} updateHandler={this.props.updateHandler}/>
           
        ))
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.caption}</h2>
					<ul className="books-grid bookshelf-books">
                        
						{books}
                        
					</ul>
				
			</div>
		)
	}
}
export default Shelf
