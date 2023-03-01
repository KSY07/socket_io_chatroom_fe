import React, { useState } from "react";
import { useDispatch, connect, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { loginUser, logoutUser, selectUserInfo } from "../userInfoSlice";
import { Link, RouteChildrenProps, useHistory } from "react-router-dom";
import { io } from "socket.io-client";

interface LoginPageProps extends RouteChildrenProps{
    userInfo: UserInfo;
    login: (arg:string) => void;
}

const Login = ({userInfo, login}:LoginPageProps) => {

    const [userId, setUserId] = useState("");
    const dispatch = useDispatch();
    const userInfoFromStore = useSelector(selectUserInfo);
    const history = useHistory();
    
    const handleIdChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUserId(e.target.value);
    }

    const handleLogin = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginUser(userId));
        sessionStorage.setItem("userId", userId);
        console.log(userInfoFromStore);
        history.push("/home");
    }

    return (
        <div>
            <h1>Chat 로그인</h1>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="아이디" value={userId} onChange={handleIdChange} />
                <button>Login</button>
            </form>
            <h3>Welcome {userInfoFromStore.userInfo.userId}</h3>
        </div>
    );
}

export default Login;