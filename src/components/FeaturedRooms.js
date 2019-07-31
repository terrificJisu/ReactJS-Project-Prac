import React, { Component } from 'react'
import { RoomContext } from '../context';
import Loading from './Loading';
import Room from './Room';


export default class FeatuaredRooms extends Component {
    static contextType = RoomContext;

    render() {
        // const {name, greeting} = this.context;
        // console.log(value);

        const { featuredRooms: rooms } = this.context
        console.log(rooms);
        return (
            <div> hello from featured rooms 
                <Room />
                <Loading />
            </div>
        )
    }
}