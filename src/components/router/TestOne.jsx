import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => <h2>Index</h2>
const About = () => <h2>About</h2>
const Users = () => <h2>Users</h2>
const Main = (props) => <div><div {...props}></div></div>

const AppRouter = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/">About</Link>
                    </li>
                    <li>
                        <Link to="/users/">Users</Link>
                    </li>
                </ul>
                <Main style={{background: "yellow"}}>
                    <Route exact path="/" component={Index}></Route>
                    <Route path="/about/" component={About}></Route>
                    <Route path="/users/" component={Users}></Route>
                </Main>
            </nav>
            
        </Router>
    )
}

export default AppRouter;