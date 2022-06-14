import React from "react";
import { useEffect, useState } from "react";
import test from "../assets/test.svg"
import provate from "../assets/provate.svg"
import shared2 from "../assets/shared2.svg"
import Repo from "./Repo";
import Search from "./Search";


import RepoNotFound from "./RepoNotFound";


function UserInfo() {
    const [uname,setName] =useState('');
    const [userName,setUsername] =useState('');
    const [followers,setFollowers] =useState('');
    const [following,setFollowing] =useState('');
    const [avatar,setAvatar] =useState('');
    useEffect(()=>{
        fetch(`https://api.github.com/users/Gydomi`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])
    const setData = ({uname, login, followers, following, avatar_url}) => {
        setName(uname);
        setUsername(login);
        setFollowers(followers);
        setFollowing(following);
        setAvatar(avatar_url);
    }
  return (
    <div className="user__info">
        <div className="info">
            <img className="avatar" src={avatar}/>
                <h2 className="username">{uname}</h2>
                <a href="/">{userName}</a>
            <div className="follow">
                <div className="followers">
                    <img src={provate}/>
                    <p>{followers} followers</p>
                </div>
                <div className="following">
                    <img src={shared2}/>
                    <p>{following} following</p>
                </div>
            </div>
        </div>
        <Repo/>
        {/* <RepoNotFound/> */}
    </div>
  );
}

export default UserInfo;