import React, {Component} from 'react';

class BookmarksPage extends Component {
    render() {
        const removeBookmark = (e) => {
            e.preventDefault();
            this.props.removeBookmark(e.target.dataset.title, e.target.dataset.arrayid);
        } 
        return (
            <div>
                <h1>Bookmarks Page</h1>
                {this.props.bookmarks.map((bookmark, i) => {
                    return (
                        <div key={i}>
                            <p><a href={bookmark.url}>{bookmark.title}</a></p>
                            <button onClick={removeBookmark} data-arrayid={i} data-title={bookmark.title} className="remove-bookmark-btn">Remove Bookmark</button>
                        </div>
                    );
                })}
                {this.props.bookmarks.length > 0 ? "" : <p>No bookmarks saved</p>}
            </div>
        )
    }
}

export default BookmarksPage;