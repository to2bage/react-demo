import React, { Component } from 'react';

class MovieList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            type: "",
            page: 0
        };
    }

    componentDidMount() {
    }

    render () {
        // console.log(this.props.match);
        return (
            <h1>MovieList: {this.props.match.params.type} --- {this.props.match.params.page}</h1>
        )
    }
}

export default MovieList;