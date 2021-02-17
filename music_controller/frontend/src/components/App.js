import React, { Component } from 'react'
import HomePage from './HomePage'
import RoomJoin from './RoomJoin'
import CreateRoom from './CreateRoom'

export default class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return <div>
            <HomePage />
        </div>
    }
}


