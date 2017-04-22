import React from 'react';
import ReactDom from 'react-dom';
import Movie from 'movie';

class App extends React.Component {
    constructor(props) {
        super(props); //parent::__construct() php
        this.state = {
            searchString: 'fast',
            movie: {},
            header: 'Mes rekomenduojame:',
        };
    }

    getMovie = (text) => (
        fetch(`http://omdbapi.com/?t=${text}`)
            .then((response) => response.json())
            .then((json) => this.setState({movie: json}))
    );

    componentWillMount() {
        this.getMovie(this.state.searchString)
    }

    onSearch(e) {
        setTimeout(() => {
            document.getElementById("input").value = ""
        }, 3000);
        this.setState({header: "Paieškos rezultatas:"});
        this.getMovie(e.target.value)
    }

    render() {
        return (
            <div className="root">
                <input id="input" type="text" placeholder="search..." onChange={this.onSearch.bind(this)}/>
                <hr />
                <Movie
                    header={this.state.header}
                    Title={this.state.movie.Title}
                    Poster={this.state.movie.Poster}
                    Genre={this.state.movie.Genre}
                />
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById("reactApp"));
