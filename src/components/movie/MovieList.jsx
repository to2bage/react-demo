import React, { Component } from 'react';

// 导入第三方fetch
import fetchJSONP from 'fetch-jsonp';

// 导入ant-design组件
import { Spin, Alert } from 'antd';

class MovieList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            movies: [],
            nowPage: parseInt(props.match.params.page) || 1,// 当前第几页
            pageSize: 14, // 每一页显示多少条数据
            total: 0, // 总共有多少条数据
            isLoading: true // 数据是否正在加载数据
        };

        this.renderMovieList = this.renderMovieList.bind(this);
        this.loadMovieListByTypeAndPage = this.loadMovieListByTypeAndPage.bind(this);
    }

    componentWillMount() {
        this.loadMovieListByTypeAndPage();
    }

    render () {
        // console.log(this.props.match);
        // return (
        //     <h1>MovieList: {this.props.match.params.type} --- {this.props.match.params.page}</h1>
        // )
        return (
            <div>
                {this.renderMovieList()}
            </div>
        )
    }

    renderMovieList () {
        if (this.state.isLoading) {
            // is loading
            return (
                <Spin tip="Loading...">
                    <Alert
                        message="Alert message title"
                        description="Further details about the context of this alert."
                        type="info"
                    />
                </Spin>
            )
        } else {
            // done loading
            return (
                <h1>MovieList加载完成: {this.props.match.params.type} --- {this.props.match.params.page}</h1>
            )
        }
    }

    loadMovieListByTypeAndPage () {
        fetchJSONP("http://api.douban.com/v2/movie/in_theaters")
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
        })
    }
}

export default MovieList