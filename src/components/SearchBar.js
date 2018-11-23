import React from 'react';

class SearchBar extends React.Component {
    state ={
        search: ''
    };

    onInputChange = e => {
        this.setState({
            search: e.target.value
        })
    }

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.search);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            onChange={this.onInputChange}
                            value={this.state.search} />
                    </div>
                </form>
            </div>
        );
    }
}


export default SearchBar;