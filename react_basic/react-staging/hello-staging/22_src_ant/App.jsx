import React, { Component } from 'react'
import {Button} from 'antd'
import 'antd/dist/antd.less'

export default class App extends Component {
    render() {
        return (
            <div>
                App........
                &nbsp;
                <button>点击</button>&nbsp;
                <Button type="primary">Primary</Button>
            </div>
        )
    }
}
