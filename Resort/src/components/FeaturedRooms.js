import React, { Component } from 'react'
import { RoomContext } from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

export default class FeatuaredRooms extends Component {
    static contextType = RoomContext;

    render() {
        // const {name, greeting} = this.context;
        // console.log(value);

        let { loading, featuredRooms: rooms } = this.context
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />
        });
     
        // console.log(rooms);
        return (
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading? <Loading /> : rooms}
                </div>
            </section>
        );
    }
}