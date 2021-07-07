import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        return(
            <NavLink activeClassName='tan' className='list-group-item' {...this.props}/>
        )
    }
}
