import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../userInfoSlice";
import axios from "axios";
import { io } from "socket.io-client";
import { RoomCard } from "../Component/RoomCard";


const socket = io("http://172.16.10.56:1234/chatRoom");

export const Home = () => {


    const [currentState, setCurrentState] = useState<State>();
    const [currentUserId, setCurrentUserId] = useState<string | null>("");
    const [createRoomName, setCreateRoomName] = useState("");
    const [roomList, setRoomList] = useState<ChatRoom[]>([]);
    
    const userInfoFromStore = useSelector(selectUserInfo);

    const SuserId = sessionStorage.getItem("userId")

    socket.on("reRenderRoomList", async () => {
        console.log("From SocketIO >>> reRenderRoomList");
        await axios.get("http://172.16.10.56:8080/api/getRoomList")
        .then(
            (result) => {
                setRoomList(result.data);
            }
       ).catch((e) => {
            console.log(e);
            console.log("방 없음");
       }) 
    });

    useEffect(() => {    
        setCurrentState(userInfoFromStore);
        setCurrentUserId(SuserId);
    }, []);

    useEffect(() => {
        axios.get("http://172.16.10.56:8080/api/getRoomList")
        .then(
            (result) => {
                console.log(result);
                setRoomList(result.data);
            }
       ).catch((e) => {
            console.log(e); 
       })
    },  []);

    const handleChangeRoomName = (e:ChangeEvent<HTMLInputElement>) => {
        setCreateRoomName(e.target.value);
    }



    const handleOnCreateRoom = () => {
        axios.post("http://172.16.10.56:8080/api/createRoom", {roomName: createRoomName, createBy: SuserId})
        .then(
            (response) => console.log(response)
        )  
    } 

    return (
        <div>
            <h1>
                HomePage
            </h1>
            <h3>
                Welcome {SuserId}
            </h3>
            <input type="text" placeholder="생성할 방 이름" value={createRoomName} onChange={handleChangeRoomName} />
            <button onClick={handleOnCreateRoom}>Create Room</button>
            <>
                {roomList.map((roomList) => { return <RoomCard roomName={roomList.roomName}/>})}
            </>
        </div>
    );
}