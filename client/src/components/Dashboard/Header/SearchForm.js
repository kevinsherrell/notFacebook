import React, { Component } from 'react';
class SearchForm extends Component {
    state = {}
    render() {
        return (
            <form className='searchForm'>
                <input className='searchInput' type="text" placeholder='Search' ref={(input) => { this.searchInput = input }} />
                <button className="searchSubmit"><i className="fas fa-search"></i></button>
            </form>
        );
    }
}

export default SearchForm;