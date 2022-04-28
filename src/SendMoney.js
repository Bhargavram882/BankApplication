import {useState,useEffect} from "react";
import api from "./api/jsonServer";
import api2 from "./api/request";

import {useHistory,useLocation} from "react-router-dom";
import trans from "./api/transactions"
import axios from "axios";
// import "./Login.css";
 import store from "./store";
import { uuid } from "uuidv4";
import { Timestamp } from "mongodb";
// import {useHistory} from "react-router-dom";
function SendMoney(){
    const [username,setUsername]=useState();
    const [amount,setAmount]=useState();
    const [cu,SetCu]=useState();
    const [tid,settid]=useState();

    const location=useLocation();
   const idd=location.id;
    const ant=location.acc;
    const amt=location.amm;
   

    const history=useHistory();
    const addUserHandler=async (f,t)=>{
    console.log(f,t);
        let re={};  
        if(amount!=undefined)
        {
         re={
          "acc":f,  
        "from":f,
        "to":t,
        "amount":amount,
        "tid":Date.now()+f+t+amount
        };
    }
    else{
        re={
          "acc":f,  
        "from":f,
        "to":t,
        "amount":amt,
        "tid":Date.now()+f+t+amt

        };

    }
    const token=store.getState().token;


           console.log(re)
        // const response=await(trans.post("/transactions",request));
        axios.post("https://appbankiiits.herokuapp.com/transactions/",re,{ headers: {"token":token} }).then((res)=>{// axios sends the http async req to end points , here we are sending to port o 4000.
        console.log("success");
        //if(username!=undefined)
      //  history.push("/Main/Transactions/");
        //else{
        if(ant==undefined){
            history.push("/Main/Transactions"); 
        }
        if(ant!=undefined){ 
        const g= async()=>{
                    console.log(idd);
                    // const response=await api2.delete(`./requestmoney/${idd}`);
                    axios.delete("https://appbankiiits.herokuapp.com/req/"+idd,{ headers: {"token":token} }).then((res)=>{
                    }).catch((err)=>{
                      console.log(idd,"err fail---1");
//                      response.status(400).json("req does not exist");
                      return;
                    })
                }
                g();
                history.push("/Main/Transactions");   
        }
        }).catch((err)=>{
            console.log(err);
           
        })
        
      }

    const gu=async()=>{
        const st="https://appbankiiits.herokuapp.com/users/"+store.getState().user;
        let all;
        let p;
        var f={};
        const token=store.getState().token;

        
             axios.get(st,{ headers: {"token":token} }).then((res)=>{
            all=res.data;
            f=all;
            console.log(all);
            if(all==null)
            {
                alert("invalid username");
            }
            if(amount<=0 || amt<=0)
            {
                alert("amount should be greater than zero");
            }
            if(amount!=undefined)
            {
                if(parseInt(all.balance)-parseInt(amount)<0)
                {
                    alert("Insufficient amount");
                }
                else
                {
                    all.balance=parseInt(all.balance)-parseInt(amount);
                }
            }
            else{
                if(parseInt(all.balance)-amt<0)
                {
                    alert("Insufficient amount");
                }
                else
                {
                    all.balance=parseInt(all.balance)-amt;
                }

            }
            console.log(all);
            

            // first patch
            const req=all.balance;
            const fa=all.acc;
         

           if(username!=null)
           {
               p="https://appbankiiits.herokuapp.com/users/"+username;

           }
           else
           p="https://appbankiiits.herokuapp.com/users/"+ant;
           axios.get(p,{ headers: {"token":token} }).then((res)=>{
            all=res.data;
            console.log(all);
            if(all==null)
            {
                alert("invalid username");
            }
            if(amount!=undefined)
            {
               
                
                    all.balance=parseInt(all.balance)+parseInt(amount);
                
            }
            else{
              
            
                    all.balance=parseInt(all.balance)+amt;
                
            }
            console.log(all);
            const to=all.balance;
            const ta=all.acc;


            // second patch
                const obj={
                    "from":req,
                    "f":fa, 
                    "t":ta,
                    "to":to
                };
            
            const t="https://appbankiiits.herokuapp.com/dbt";
                console.log()
                if(username!=undefined)
            addUserHandler(all.acc,username)  
            else
            addUserHandler(all.acc,ant) 
        
            axios.patch(t,obj,{ headers: {"token":token} }).then((res)=>{
                console.log(res);
            }).catch((err)=>{
                if(err)
                alert("invalid username");
                console.log(err);
            })
           }   ).catch((err)=>{
            if(err)
            alert("invalid username");
            console.log(err);
           })
           console.log(f);
              
    });
}




    return(
        <div className = "form-box">
            <h1 className ="form-step">Send Money</h1>
            
                <div className ="field1">
                    <input type="username" placeholder="enter ACC" value={ant} onChange={(e)=>setUsername(e.target.value)}/><br/>
                
                    <input type="Amount" placeholder="enter Amount" value={amt} onChange={(e)=>setAmount(e.target.value)}/><br/>
                </div>
                
            
                
                <button className="submitBtn" onClick={gu}>Send</button>
            </div>
            
        
    )
}


export default SendMoney;

























/*import {useState,useEffect} from "react";
import api from "./api/jsonServer";
import api2 from "./api/request";

import {useHistory,useLocation} from "react-router-dom";
import trans from "./api/transactions"
// import axios from "axios";
// import "./Login.css";
 import store from "./store";
import { uuid } from "uuidv4";
// import {useHistory} from "react-router-dom";
function SendMoney(){
    const [username,setUsername]=useState();
    const [amount,setAmount]=useState();
   
    
    const location=useLocation();
   const idd=location.id;
    const ant=location.acc;
    const amt=location.amm;
   

    const history=useHistory();
    const addUserHandler=async (f,t)=>{
    let request={};  
        if(amount!=undefined)
        {
         request={
            "id":uuid(),
          "acc":f,  
        "from":f,
        "to":t,
        "amount":amount
        };
    }
    else{
        const request={
            "id":uuid(),
          "acc":f,  
        "from":f,
        "to":t,
        "amount":amt
        };

    }

           console.log(request)
        const response=await(trans.post("/transactions",request));
        console.log(response) 
        if(username!=undefined)
        history.push("/Main");
        else{
            const fun=()=>{
                const g= async()=>{
                    console.log(idd);
                    const response=await api2.delete(`./requestmoney/${idd}`);
                }
                g();
                history.push("/Request");
        
            };
            
                
             fun();   
            
        }
      }
    const retrieve=async(acc)=>{
        const response=await(api.get("/Users"));
        // console.log(response.data);
        // const sol=response.data;
        const sol=response.data;
            for (let index = 0; index < sol.length; index++) {
                if(sol[index].acc === acc)
                {
                    return sol[index];
                }
                
            }
            return false;
        
      }
      const r=async(user)=>{
        const response=await(api.get("/Users"));
        // console.log(response.data);
        // const sol=response.data;
        const sol=response.data;
        console.log(user);
        console.log(sol);
        
            for (let index = 0; index < sol.length; index++) {
                if(sol[index].name === user)
                {
                    return sol[index];
                }
                
            }
            return false;
        
      }
        
     
      
      const gu=async()=>{
        let all;
          const getall=async()=>{
              console.log(store.getState().user);
              all= await r(store.getState().user);
              console.log(all) 
              };
             await getall();
             
              
              console.log(all);
              console.log(amount+" "+amt);
            //   if(parseInt(all.balance)-parseInt(amount)<0)
            //   {
            //       alert("Insufficient amount"); 
            //       return;
            //   }
            if(amount!=undefined)
            {
             all.balance=parseInt(all.balance)-parseInt(amount);
            }
            else{
               
                    all.balance=parseInt(all.balance)-amt;
            
                
            }
          const response = api.put(`./Users/${all.id}`,all);
          let acc=fun();
          const get=async()=>{
            await addUserHandler();
            };
            if(username!=null)
            addUserHandler(all.acc,username)  
            else
            addUserHandler(all.acc,ant)  
            
      } 
     
      
      const fun=async()=>{
      let all;
        const getall=async()=>{
            if(username!=null)
            all= await retrieve(username);
            else
            all= await retrieve(ant);
            
            console.log(all) 
            };
           await getall();
           if(all === false)
           {
               alert("Invalid username");
               return;
           }
           
            console.log(all);
            if(amount!=null)
            {
           all.balance=parseInt(all.balance) + parseInt(amount);
            }
            else{
                if(amt!=null)
                {
                    all.balance=parseInt(all.balance) + amt;
           
                }
            }
        const response = api.put(`./Users/${all.id}`,all);
       return all.acc;

    }

    return(
        <div className = "form-box">
            <h1 className ="form-step">Send Money</h1>
            
                <div className ="field1">
                    <input type="username" placeholder="enter ACC" value={ant} onChange={(e)=>setUsername(e.target.value)}/><br/>
                
                    <input type="Amount" placeholder="enter Amount" value={amt} onChange={(e)=>setAmount(e.target.value)}/><br/>
                </div>
                
            
                
                <button className="submitBtn" onClick={gu}>Send</button>
            </div>
            
        
    )
}


export default SendMoney;


*/