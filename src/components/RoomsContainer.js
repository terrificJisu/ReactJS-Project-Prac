import React from  'react';
import RoomsFilter from './RoomFilter';
import RoomsList from './RoomList';
import {withRoomConsumer} from '../context';
import Loading from './Loading';

function RoomContainer({context}) {
    const {loading, sortedRooms, rooms} = context;

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </div>
    )
}

export default withRoomConsumer(RoomContainer)






// import React from  'react';
// import RoomsFilter from './RoomFilter';
// import RoomsList from './RoomList';
// import {RoomConsumer} from '../context';
// import Loading from './Loading';

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//               (value) => {
//                 // console.log(value);
//                 const {loading, sortedRooms, rooms} = value;

//                 if (loading) {
//                     return <Loading />;
//                 }

//                 return (
//                     <div>
//                         Hello Froms Romms Container
//                         <RoomsFilter rooms={rooms} />
//                         <RoomsList rooms={sortedRooms} />
//                     </div>
//                   )
//               }  
//             }
//         </RoomConsumer>

//     )
// }