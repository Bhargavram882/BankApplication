import {BrowserRouter as Router ,Link,Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import styled from "styled-components";
import { useState,useEffect } from "react";
import store from "./store";
import axios from "axios";

const NavUnlisted = styled.ul`
  text-decoration: none;
  font-size: 1.3rem;  
`;

const linkStyle = {
  
  textDecoration: "none",
  color: "#FFF"
};

function Main({user}){

  const [bl,setBl]=useState("");
  const [accn,setAcc]=useState("");


  const gu=async()=>{
    console.log(store.getState().user);
    const st="http://localhost:5000/users/"+store.getState().user;
    console.log("user in gu",st);
    axios.get(st).then((res)=>{
      const ac=res.data.balance;
      const accn = res.data.acc;
      setBl(ac);
      setAcc(accn);
      console.log(ac);
      return;

  }).catch((err)=>{
    console.log("err fail");
   // response.status(400).json("user does not exist");
    return;
  })
  // {bl}
  
  }
 useEffect(() => {
    gu();
 }, [])


    //var p=true
    return (<>
    
    

    
    <h3>Your Balance  :{bl} </h3>
    <h3>Your Accno : {accn}</h3>
    <center>
    <div class="context">
    
    <div class="container">
    <Link to="/ShowRequest" style={linkStyle}>
     <div class="card">
         <div class="box">
           <div class="content">
           <h2>Show Request</h2>
            </div>  
             </div></div>
             </Link>
             <Link to="/Loan/payloan" style={linkStyle}>   
       <div class="card">
         <div class="box">
           <div class="content">
           <h2>Pay Loan</h2>
            
               </div>  
             </div></div> 
             </Link>  
             <Link to="/Loan/giveloan" style={linkStyle}>
             <div class="card">
         <div class="box">
           <div class="content">
           <h2>Take Loan</h2>
              
               </div>  
             </div></div>       
             </Link>
       </div>    
  </div> 
  </center>
  </>)
    }


const mapStateToProps = (state)=>{
    return {
        user: state.user
    };
}


export default connect(mapStateToProps)(Main);
//export default Main;