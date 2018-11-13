import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gists: null
        }
    }

    componentDidMount() {
        fetch("https://api.github.com/gists")
        .then(res => res.json())
        .then(gists => {
            this.setState(() => {
                return {
                    gists
                }
            })
        })
    }

    render () {
        return (
            <Router>
                <Root>
                    <Sliderbar>
                        {this.state.gists ? (
                            this.state.gists.map(gist => {
                                return (
                                    <SlideBarItem key={gist.id}>
                                        <Link to={`/g/${gist.id}`}>
                                            {gist.description || '[no description]'}
                                        </Link>
                                    </SlideBarItem>
                                )
                            })
                        ) : (
                            <div>Loading...</div>
                        )}
                    </Sliderbar>
                    <Main>
                        <Route exact={true} path="/" render={() => {
                            return <h1>Welcome</h1>
                        }}></Route>
                        
                        <Route path="/g/:gistIId" component={Gist}></Route>
                    </Main>
                    
                </Root>
                
            </Router>
        )
    }
}

const Root = (props) => {
    return (
        <div 
            style={{
                display: "flex"
            }}
            {...props}
        >
        </div>
    )
}

const Sliderbar = (props) => {
    return (
        <div 
            style={{
                width: "33vw", 
                height: "100vh", 
                overflow: "auto", 
                background: "#eee"
            }}
            {...props}
        >
        </div>
    )
}

const SlideBarItem = (props) => {
    return (
        <div 
            style={{
                whiteSpace: "nowrap", 
                textOverflow: "ellipsis", 
                overflow: "hidden", 
                padding: "5px 10px"
            }} 
            {...props}
        >
        </div>
    )
}

const Main = (props) => {
    return (
        <div 
            style={{
                flex: 1,
                height: "100vh",
                overflow: "auto",
            }}
        >
            <div style={{padding: "20px"}} {...props}></div>
        </div>
    )
}

// define Gist module
const Gist = ({match}) => {
    return (
        <div>
            {match.params.gistIId}
        </div>
    )
} 