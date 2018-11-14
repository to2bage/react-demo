import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Movie = () => {return <h3>this is a Movie!!!</h3>};
//#region
// const User = ({match}) => <h3>{match.params.content}</h3>
// const Users = ({match}) => {
//     return (
//         <Router>
//             <div>
//                 <ul>
//                     <li><Link to={`${match.url}/component`}>component</Link></li>
//                     <li><Link to={`${match.url}/Vuejs v.Reactjs`}>Vuejs v.Reactjs</Link></li>
//                 </ul>
//                 <Route exact path={`${match.url}`} render={() => <h3>this is a Users......</h3>}></Route>
//                 <Route path={`${match.url}/:content`} component={User}></Route>
//             </div>
//         </Router>
//     )
// }
//#endregion

class TestThree extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div>
                <Router>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/movie">Movie</Link></li>
                            <li><Link to="/users">Users</Link></li>
                        </ul>
                        <hr/>
                        <Switch>
                            <Route exact path="/" render={() => {return <h3>~~~this is a root~~~</h3>}}></Route>
                            <Route path="/movie" component={Movie}></Route>
                            <Route path="/users" component={Users}></Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

//#region
class Users extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to={this.props.match.url + "/name"}>name</Link></li>
                    </ul>
                    <ul>
                        <li><Link to={`${this.props.match.url}/age`}>age</Link></li>
                    </ul>
                    <Route exact path={`${this.props.match.path}`} render={() => <h2>this is a Users...</h2>}></Route>
                    <Route path={`${this.props.match.path}/:content`} component={User}></Route>
                </div>
                
            </Router>
        )
    }
}

class User extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <h3>{this.props.match.params.content}</h3>
        )
    }
}
//#endregion

export default TestThree;