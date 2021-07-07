import React, { Component } from 'react'
import News from './News'
import Message from './Message'
import { Route,Switch } from 'react-router'
import MyNavLink from '../../component/MyNavLink'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>我是home的内容</h2>
                <div>
                <ul className="nav nav-tabs">
                    <li>
                    {/* <a className="list-group-item" href="./home-news.html">News</a> */}
                    <MyNavLink replace to="/home/news">News</MyNavLink>
                    </li>
                    <li>
                    {/* <a className="list-group-item" href="./home-message.html">Message</a> */}
                    <MyNavLink replace to="/home/message">Message</MyNavLink>
                    </li>
                </ul>
                {/* 注册路由 */}
                <Switch>
                    <Route path="/home/news" component={News}/>
                    <Route path="/home/message" component={Message}/>
                </Switch>
                
                </div>
            </div>
        )
    }
}
