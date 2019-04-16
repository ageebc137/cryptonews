import React, {Component} from 'react';

class NewsPage extends Component {
  
    render() {
        return(
            <div>
                <h1>Welcome to the News Page</h1>
                {this.props.news.length === 0 ? 'Loading news articles' : this.props.news.map((article, i)=> (
                   <a key={i} href={article.url} target="_blank"><h4>{article.title}</h4></a>
                ))}
            </div>
         );
    }
} 

export default NewsPage;