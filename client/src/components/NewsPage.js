import React, {Component} from 'react';

class NewsPage extends Component {
  
    render() {
        return(
            <div>
                <h1>Top Stories</h1>
                {this.props.news.length === 0 ? 'Loading news articles' : this.props.news.map((article, i)=> (
                <div className="article">
                     <a key={i} href={article.url}>
                    <img src={article.urlToImage} alt={article.title} />
                     <p>{article.title}</p>
                    </a>
                     <button>&#9733;</button>
                </div>
                ))}
            </div>
         );
    }
} 

export default NewsPage;