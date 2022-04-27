import { useState } from "react"
import axios from "axios";
import store from "./store";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
 import './Header.css';

//{Count}
function LoginAdmin(){
    const [usrname1,setUsername]=useState("");// this is for storing the user name
    const [Password1,setPassword]=useState("");// this is for storing the password
    const history= useHistory();// this is for getting the present url 
    const LoginUser=()=>{
        axios.post("/Login",{username:usrname1,password:Password1 }).then((res)=>{// axios sends the http async req to end points , here we are sending to port o 4000.
            console.log("log success");
            store.dispatch({type:"loginSuccess" ,payload:{ user:usrname1} });
            history.push("/Upload");// redirecting 


        }).catch((err)=>{
            console.log("log fail");
            store.dispatch({type:"loginFail"});
        })
    };
    return (
        <div className="form-box">

        <h1 className="form-step"> login page </h1>
        <div className="field1">
        <input type='username' placeholder="enter username" onChange={(e)=>setUsername(e.target.value)} /><br/>
        <input type='Password' placeholder="enter Password" onChange={(e)=>setPassword(e.target.value)} /><br/>
        </div>
        <button className="submitBtn" onClick={LoginUser}>login</button>
        </div>

    )


}

export default LoginAdmin;