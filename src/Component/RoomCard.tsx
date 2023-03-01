import React from "react";
import styles from "../css/RoomCard.module.css";

interface RoomCardProps {
    roomName:string;
    numberOfUser?:number; //방 인원 수 구현
}

export const RoomCard = (props:RoomCardProps) => {

    return (
        <div key = {props.roomName} className={styles.container}>
            {props.roomName}
        </div>
    );
}