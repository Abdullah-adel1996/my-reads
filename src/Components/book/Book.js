import React, { Component } from 'react';

export class Book extends Component {
  

    handleBookUpdate(event){
		const shelf = event.target.value
		this.props.updateHandler(this.props, shelf)
    }

    render() {
   
        return (
            <li>
        <div className="book">
            <div className= "book-top">
                <div className="book-cover" style={{
                    backgroundImage : `url("${this.props.imageLinks.thumbnail}")`
                }}>
                </div>
                <div className="book-shelf-changer">
                    <select 
                    value = {this.props.shelf} 
                    onChange={(event)=> this. handleBookUpdate(event)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                    </select>
                            </div>
            </div>
            <div className="book-title">
                {this.props.title}
             </div>
            <div className="book-authors">
                {this.props.authors}
            </div>
        </div>
        </li>
        )
    }
}

export default Book
