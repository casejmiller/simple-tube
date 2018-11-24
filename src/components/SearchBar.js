import React, { Component } from 'react';

class SearchBar extends Component {
    state = { searchText: '' };

    onInputChange = event => {
        this.setState({ searchText: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onTermSubmit(this.state.searchText);
    };

    render() {
        return (
            <div className="ui segment search-bar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                        type="text" 
                        value={this.state.searchText} 
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar