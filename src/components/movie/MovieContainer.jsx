import React, { Component } from 'react';
import MovieList from '@/components/movie/MovieList.jsx';

// 导入路由所需要的组件
import {Route, Link} from 'react-router-dom';

// 导入ant-design所需的组件
import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

class MovieContainer extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        // console.log(this.props.match);
        return (
            <Layout style={{ padding: '10px 0', background: '#fff', height: '100%' }}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        style={{ height: '100%' }}
                    >
                        <Menu.Item key="1"><Link to={`${this.props.match.url}/in_threator/1`}>正在热映</Link></Menu.Item>
                        <Menu.Item key="2"><Link to={`${this.props.match.url}/coming_soon/1`}>即将上映</Link></Menu.Item>
                        <Menu.Item key="3"><Link to={`${this.props.match.url}/top250/1`}>top250</Link></Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    <Route 
                        path={`${this.props.match.url}/:type/:page`} 
                        component={MovieList}
                    >
                    </Route>
                </Content>
            </Layout>
        )
    }
}

export default MovieContainer;