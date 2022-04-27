import api from './api/loan_api';
import {useHistory} from "react-router-dom";
import { useState } from "react";
import loan from  "./assets/loan.json";
import {connect} from "react-redux";
import axios from "axios";
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import Fileupload from "./Fileupload";

import { uuid } from "uuidv4";
function Takeloan(){
    const [acc1,setAcc]=useState("");//usestate for account number
    const [amount1,setAmount]=useState("");//usestate for amount
    const history= useHistory();// for url at that current postion and use this to redirect to other
    const [time1,setTime]=useState("");//usestate for time
    const [img,setImg]=useState();
    const addTransacHandler=async ()=>{
        //this function is called after the user 
        //pressed on sanction loan buttonn after filled the detailsformdata.append('acc',acc1);
        
        const formdata=new FormData();
        formdata.append('acc',acc1);
        formdata.append('loan_amount',amount1);
        formdata.append('no_of_months',time1);  
        formdata.append('interest',time1);
        formdata.append('amount_to_be_payed',amount1*time1);
        formdata.append('profileImg',img);

        
           axios.post("http://localhost:5000/loan", formdata).then((res)=>{// axios sends the http async req to end points , here we are sending to port o 4000.
            console.log("loan success");
        }).catch((err)=>{
            console.log("loan fail");
           
        })

        history.push("/Main");//redirecting to the main page
      }
      //taking the input from the user
      return (<div className="form-box">
      <h1>Take loan</h1>
      <div className="field1">
      <input type='acc1' placeholder="enter ur accno" onChange={(e)=>setAcc(e.target.value)} /><br/>
          <input type='amount' placeholder="enter amount" onChange={(e)=>setAmount(e.target.value)} /><br/>
      
          <input type='no_of_month' placeholder="enter no of months" onChange={(e)=>setTime(e.target.value)} /><br/>
          </div>
          <input type="file" onChange={(e)=>setImg(e.target.files[0])} />  
          <button className="submitBtn" onClick={addTransacHandler} >Sanctionloan</button>
     
          
       </div>)
}

export default Takeloan;