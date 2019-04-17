import React, {Component} from 'react';

class NewsPage extends Component {
  
    render() {
        return(
            <div>
                <h1>Welcome to the News Page</h1>
                {this.props.news.length === 0 ? 'Loading news articles' : this.props.news.map((article, i)=> (
                <div>
                   <p><a key={i} href={article.url}>{article.title}</a></p>
                    <button>&#9733;</button>
                </div>
                ))}
            </div>
         );
    }
} 

export default NewsPage;