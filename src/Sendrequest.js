import React from 'react'
import api from "./api/request";
import {useState} from "react";
import uuid from "react-uuid";

import axios from "axios";
import api2 from "./api/jsonServer";
import store from './store';
import { useHistory } from 'react-router-dom';
export default function Sendrequest() {
    const [to,setTo] =useState("");
    const [amount,setAmount] =useState(0);
    const history=useHistory();
    const [ln,setLn]=useState([]);// for storing all the loan details

    const gu=async()=>{
        console.log(store.getState().user);
        const st="http://localhost:5000/users/"+store.getState().user;
        console.log(st)
        axios.get(st).then((res)=>{// axios sends the http async req to end points , here we are sending to port o 4000.
        console.log("res data  ... ",res.data);
        const ac=res.data.acc

        const st1="http://localhost:5000/req/";
        axios.post(st1,{
            "by":ac,
            "to":to,
            "amount":parseInt(amount)
        }).then((res)=>{
            setLn(res.data);
        }).catch((err)=>{
          console.log("err fail");
      //    response.status(400).json("req does not exist");
          return;
        })

      }).catch((err)=>{
        console.log("err fail");
     //   response.status(400).json("user does not exist");
        return;
      })
      history.push("/Main");
    }
   
    return (
        <div className="form-box">
    <h1 className="form-step">Request for Money</h1>
    <div className="field1">
    <input type='acc1' placeholder="enter others accno" onChange={(e)=>setTo(e.target.value)} /><br/>
        <input type='amount' placeholder="enter amount" onChange={(e)=>setAmount(e.target.value)} /><br/>
         </div>
        <button className="submitBtn" onClick={gu}>Send Request</button>
    </div>
    )
}
