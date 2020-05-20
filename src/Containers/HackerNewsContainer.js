import React, {Component} from 'react';
import HackerNewsHeadlines from '../Components/HackerNewsHeadlines';
import HackerNewsSearchBar from "../Components/HackerNewsSearchBar";
import HackerNewsDetail from '../Components/HackerNewsDetail';

class HackerNewsContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            hackerNews:[],
        };

        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    handleSearchSubmit(searchTerm) {
        const url = `https://hn.algolia.com/api/v1/search?query=${searchTerm}&tags=story`
        fetch(url)
        .then(res => res.json())
        .then(results => this.setState({hackerNews: results.hits}))
        .catch(error=>console.error(error));  
      }

    componentDidMount(){
        const url = "https://hn.algolia.com/api/v1/search?tags=front_page";
        fetch(url)
            .then(response=>response.json())
            .then(hackerNews=>this.setState({hackerNews: hackerNews.hits}))
            .catch(error=>console.error(error));  
    }

    render(){
        return(
            <div>
                <h2>HACKER NEWS IS SO HOT RIGHT NOW</h2>
                <HackerNewsSearchBar onSearchSubmit = {this.handleSearchSubmit}/>
                <HackerNewsHeadlines hackerNews={this.state.hackerNews}/>
                {/* <HackerNewsDetail article={this.state.selectedHackerNews}/> */}
            </div>
        )
    }
}

export default HackerNewsContainer;