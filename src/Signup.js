import { useState } from "react"
import axios from "axios";
import {useHistory} from "react-router-dom";
function Signup(props){
    const [usrname1,setUsername]=useState("");
    const [acc1,setAcc]=useState("");
    const [Password1,setPassword]=useState("");
    const [Mail1,setMail]=useState("");

    const history= useHistory();
    const addUserHandler=()=>{
        let ifsc=["IIITS1823","IIITS1828","IIITS1827","IIITS1825","IIITS1824","IIITS1826","IIITS1829","IIITS1723","IIITS1323","IIITS1123",]
        let x=Math.ceil(Math.random() * 10000)
        let x1=Math.ceil(Math.random() * 10)
        let i1=ifsc[x1]
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!Mail1.match(validRegex)) {  
          alert("Invalid email address!");
            
          history.push("/Signup");
      
        }
        else{
           
        axios.post("http://localhost:5000/users",{"balance":Math.floor(Math.random() * 100000) + 1,
           "name":usrname1,
           "password":Password1,
           "acc":''+i1+x, 
            "mail":Mail1}).then((res)=>{// axios sends the http async req to end points , here we are sending to port o 4000.
            console.log("signup success");
            history.push("/Login");

        }).catch((err)=>{
            console.log("signup fail");
           
        })
    }
      }
  
    return (
        <div className="form-box">

        <h1 className="form-step"> Sign up </h1>
        <div className="field1">
        <input type='username' placeholder="enter username" onChange={(e)=>setUsername(e.target.value)} /><br/>
        <input type='Password' placeholder="enter Password" onChange={(e)=>setPassword(e.target.value)} /><br/>
        <input type='username' placeholder="enter MAIL" onChange={(e)=>setMail(e.target.value)} /><br/>

        </div>
        <button className="submitBtn" onClick={addUserHandler}>Signup</button>
        </div>
    




)

    
    }
    export default Signup;