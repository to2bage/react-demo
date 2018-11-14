// 项目的根组件
import React, { Component } from 'react';
// 使用路由
import {HashRouter, Route, Link} from 'react-router-dom';
//  导入所需的ant-design的组件
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
// 导入模块化的样式
import styles from '@/css/app.styl';
// 导入路由相关的所有的组件
import HomeContainer from '@/components/home/HomeContainer.jsx';
import AboutContainer from '@/components/about/AboutContainer.jsx';
import MovieContainer from '@/components/movie/MovieContainer.jsx';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <HashRouter>
                <Layout className="layout" style={{height: '100%'}}>
                    <Header>
                        <div className={styles.logo} />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1"><Link to="/home">首页</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/movie">电影</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/about">关于</Link></Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ background: '#fff', flex: 1 }}>
                        <Route path="/home" component={HomeContainer}></Route>
                        <Route path="/about" component={AboutContainer}></Route>
                        <Route path="/movie" component={MovieContainer}></Route>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        movie ©2018 Created by Tobage
                    </Footer>
                </Layout>
            </HashRouter>
        )
    }
}

export default App;