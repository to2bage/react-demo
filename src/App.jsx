import React from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';

import Home from '@/components/Home.jsx';
import Movie from '@/components/Movie.jsx';
import About from '@/components/About.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render () {
        return (
            <HashRouter>
                <div>
                    <h2>这是网站的APP根组件</h2>
                    <hr/>
                    <Link to="/home">首页</Link>&nbsp;&nbsp;
                    <Link to="/movie">电影</Link>&nbsp;&nbsp;
                    <Link to="/about">关于</Link>&nbsp;&nbsp;

                    <hr/>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/movie" component={Movie}></Route>
                    <Route path="/about" component={About}></Route>
                </div>
                
            </HashRouter>
        )
    }
}

export default App;