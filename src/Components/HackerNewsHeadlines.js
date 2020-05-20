import React from 'react';

const HackerNewsHeadlines =(props) => {
    if (props.hackerNews.length === 0) return null;

    // handleArticleSelected(event){
    //     // props.onArticleSelect(event.target.value)
    //     this.setState({selectedArticle:event.target.value})
    // }
    console.log(props.hackerNews)
        
    const headlines = props.hackerNews.map((headline, index)=>{
        return(
            <div key={index} >
                <li><h4>{headline.title}</h4></li>
                <p>Author: {headline.author}, {headline.num_comments} comments</p>
                <a href={headline.url}>Click for Source</a>
                <p></p>
                <option value={headline.title}>Clicky Click</option>
                <p></p>
            </div>
            )
        }
    )
        
    return(
        <div>
            <ul>
                {headlines}
            </ul>
        </div>
    )
        
}

export default HackerNewsHeadlines;