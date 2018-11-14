// 项目的根组件
import React, { Component } from 'react';
// 使用路由
import {HashRouter, Route, Link} from 'react-router-dom';
//  导入所需的ant-design的组件
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
// 导入模块化的样式
import styles from '@/css/app.styl';

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
                            <Menu.Item key="1">首页</Menu.Item>
                            <Menu.Item key="2">电影</Menu.Item>
                            <Menu.Item key="3">关于</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px', background: '#fff' }}>
                        
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