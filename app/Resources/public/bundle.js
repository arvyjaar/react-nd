import React from 'react';
import ReactDom from 'react-dom';

Promise.resolve(2)
    .then(function (du) {
        return du+1;
    })
    .then(function(trys) {
    //
});

class App extends React.Component {
    constructor(props) {
        super(props); //parent::__construct() php
        this.state = {
            counter: 0,
            movie: {}
        }
    }
    componentWillMount() {
        fetch(`http://omdbapi.com/?t=fast`)
            .then((response) => response.json())
            .then((json) => this.setState({movie: json}))
    }

    onIncrement(e) {
        let count = this.state.counter;
        count++;
        // this.state.counter = count; NEGALIMA DARYTI, PASENO
        this.setState({counter: count}); // Gerai
    }
    onDecrement(e) {
        let count = this.state.counter;
        count--;
        this.setState({counter: count});
    }

    onSearch(e) {

        fetch(`http://omdbapi.com/?t=${e.target.value}`)
            .then((response) => response.json())
            .then((json) => this.setState({movie: json}))
        console.log(e.target.value)
    }

    render() {
        return (
            <div className="root">
                <h2>{this.state.movie.Title}</h2>
                <h3>{this.state.movie.Director}</h3>
                <img src={this.state.movie.Poster}/>
                <h1>{this.props.name}</h1>
                <h2>{this.state.counter}</h2>
                <button onClick={this.onIncrement.bind(this)}>Increment</button>
                <button onClick={this.onDecrement.bind(this)}>Decrement</button>
                <input type="text" onChange={this.onSearch.bind(this)}/>
            </div>
        )
    }
}

ReactDom.render(<App name="John Doe" age={23}/>, document.getElementById("reactApp"));