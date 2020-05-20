import React, { Component } from "react";

class HackerNewsSearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            search: ""
        }
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSearchChange(event){
        this.setState({search: event.target.value})
    }


    handleSubmit(event){
        event.preventDefault();
        const search = this.state.search.trim();


        this.setState({search: ""});

        const searchTerm = search;

        this.props.onSearchSubmit(searchTerm)
    }

    render(){
        return(
            <form className = "search-form" onSubmit = {this.handleSubmit} >
                <input type = "text" value = {this.state.search} placeholder = "Search for a Story" required onChange = {this.handleSearchChange} />
                <input type = "submit" value = "Search" />
            </form>
        )
    }
}

export default HackerNewsSearchBar;