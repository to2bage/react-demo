import React, { Component } from 'react';

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
        return (
            <Layout style={{ padding: '10px 0', background: '#fff', height: '100%' }}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        style={{ height: '100%' }}
                    >
                        <Menu.Item key="1">正在热映</Menu.Item>
                        <Menu.Item key="2">即将上映</Menu.Item>
                        <Menu.Item key="3">top250</Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    Content
                </Content>
            </Layout>
        )
    }
}

export default MovieContainer;