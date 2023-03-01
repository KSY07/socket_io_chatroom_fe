import React from "react";

interface ChatRoomProps {
    roomInfo:any;
}

export const ChatRoom = ({roomInfo}:ChatRoomProps) => {

    return (
        <div>
            ChatRoom({roomInfo})
        </div>
    )
}