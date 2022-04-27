import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import api from "./api/loan_api"
import axios from "axios";
import {useState,useEffect} from "react";


export default function PayMoney() {
    const location=useLocation();
     const id=location.id;
     const acc=location.acc;
     const [amount,setAmount]=useState();
     const history=useHistory();
    const gu=async()=>{
           console.log("id.......",id);
         let all;
        const st1="http://localhost:5000/loan/"+acc+"/"+id;
        axios.get(st1).then((res)=>{
        all= res.data
        console.log(all);
       // console.log("datat from paymoney",all);
               if(all.amount_to_be_payed-amount==0)// if paying amount is loan amount delete that
               {
//                const ree=api.delete(`./loan/${all.id}`);
                const st1="http://localhost:5000/loan/"+id;
                axios.delete(st1).then((res)=>{
                }).catch((err)=>{
                  console.log("err fail");
                //  response.status(400).json("loan does not exist");
                  return;
                })
               // console.log(ree);
                history.push("/Loan")
            }
            if(all.amount_to_be_payed-amount<0)// validation
            {
             alert("paying more than loan amount");
             history.push("/paymoney")
         }
               else// if not reduce that amount payed
               {
                    all.amount_to_be_payed=all.amount_to_be_payed-amount;
              //     const rw= api.put(`./loan/${all.id}`,all)
                   const st1="http://localhost:5000/loan/"+id;
                   const da={amount_to_be_payed :  all.amount_to_be_payed }
                   axios.patch(st1,da ).then((res)=>{
                }).catch((err)=>{
                     console.log("err fail");
                //     response.status(400).json("loan does not exist");
                     return;
                   })
                  
                  
                  
                   history.push("/Loan")
               }

        }).catch((err)=>{
          console.log("err fail");
        //  response.status(400).json("loan does not exist");
          return;
        })
               
        
       } 
       



    return (
            <div className ="form-box">
            <h1 className="form-step">paymoney page</h1> 
            <div className="field1">
                    <input type="username" placeholder="enter ACC" value={id} /><br/>
                
                
                    <input type="Amount" placeholder="enter Amount" onChange={(e)=>setAmount(e.target.value)}/><br/>
                
                </div>
                
                <button className="submitBtn" onClick={gu}>Send</button>
            </div>
            
        
        
    )
}
