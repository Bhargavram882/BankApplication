import { useState } from "react"
import axios from "axios";
import store from "./store";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
 import './Header.css';
 import { FaUniversity } from "react-icons/fa";
 var jwt=require("jsonwebtoken");

//{Count}
function Login(){
    const [usrname1,setUsername]=useState("");
    const [Password1,setPassword]=useState("");// this is for storing the password
    const history= useHistory();// this is for getting the present url 
    
    const LoginUser=()=>{
        let b=1;
       if(!usrname1) {
      return;
  }
  if(!Password1) {
      return;
  }
     const st="https://appbankiiits.herokuapp.com/users/"+usrname1;
console.log(st)
     console.log(usrname1);
  axios.get(st).then((res)=>{// axios sends the http async req to end points , here we are sending to port o 4000.
   console.log("res data  ... ",res.data);
   if(res.data.password==Password1){
    console.log("success");
    const id=res.data.id;
    const token=jwt.sign({id},"Vikram@123",{expiresIn:300,});

  //  response.status(200).json("user authenticated");
   store.dispatch({type:"loginSuccess" ,payload:{ user:usrname1,token:token} });
            history.push("/Main");// redirecting 
   }
}).catch((err)=>{
//alert("Log Fail");
   console.log("1log fail");
   //response.status(400).json("user does not exist");
    store.dispatch({type:"loginFail"}); 
   return;
  
})

     }
    return (
        <div className="form-box">
        <div class="full-page"></div>
       <h1 className="form-step"> Login </h1>
       <FaUniversity size="80px"/>
       <div className="field1">
           
       <input type='username' placeholder="enter username" onChange={(e)=>setUsername(e.target.value)} /><br/>
       <input type='Password' placeholder="enter Password" onChange={(e)=>setPassword(e.target.value)} /><br/>
       </div>
       <button className="submitBtn" onClick={LoginUser}>login</button>
       </div>

   )



}





//const mapStateToProps = (state)=>{
//    return {
//        Count: state.Count
//    };
//}
  
  
//export default connect(mapStateToProps)(Login);
export default Login;