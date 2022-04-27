import React from 'react'
import api2 from "./api/request";
import store from "./store";
import {useState,useEffect} from "react";
import api1 from "./api/jsonServer";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import './Header.css';
import axios from "axios";








const NavUnlisted = styled.ul`
  text-decoration: none;
  font-size: 1.3rem;
  
 
  padding: 20px 32px;
`;
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: ""
};



const Styles = styled.div`
 table {
   border-spacing: 0;
   border: 1px solid black;
   text-align: center;
   vertical-align: middle;
   width:75%;
   tr {
     :last-child {
       td {
         border-bottom: 0;
       }
     }
   }

   th,
   td {
     padding: 0.5rem;
     border-bottom: 1px solid black;
     border-right: 1px solid black;

     :last-child {
       border-right: 0;
     }
   }
  
   th {
     background: green;
     border-bottom: 3px solid blue;
     color: white;
     fontWeight: bold;
   }
   thead {
    background-color: #333;
    color: white;
  }
  tbody tr:nth-child(odd) {
    background-color: #fff;
  }
  
  tbody tr:nth-child(even) {
    background-color: #f38181;
  }
  tbody th {
    background-color: #36c;
    color: #fff;
    text-align: left;
  }
  
  
 }
 table.center{
   margin-left:auto;
   margin-right:auto;
 }
`
export default function Payloan() {// this fn gets all the requested obj by other to this user.
   const history=useHistory();
      let rs;
      const [ln,setLn]=useState([]);// getting all the requested objects
      const gu=async()=>{// uses user name and gets the acc using retrieve fn
        console.log(store.getState().user);
        const token=store.getState().token;

        const st="http://localhost:5000/users/"+store.getState().user;
        console.log(st)
        axios.get(st).then((res)=>{// axios sends the http async req to end points , here we are sending to port o 4000.
        console.log("res data  ... ",res.data);
        const ac=res.data.acc

        
        const st1="http://localhost:5000/req/"+ac+"/1";
        axios.get(st1,{ headers: {"token":token} }).then((res)=>{
            setLn(res.data);
        }).catch((err)=>{
          console.log("err fail");
     //     response.status(400).json("trans does not exist");
          return;
        })

      }).catch((err)=>{
        console.log("err fail");
    //    response.status(400).json("user does not exist");
        return;
      })
      }
    useEffect(() => {
        gu();
    }, [])
    const del=(ln)=>{
        console.log(ln.id)  
        axios.delete("http://localhost:5000/req/"+ln._id).then((res)=>{// axios sends the http async req to end points , here we are sending to port o 4000.
        console.log("success");

        }).catch((err)=>{
            console.log(err);
           
        })
         //  const response = api2.delete(`./requestmoney/${ln.id}`,all);

    }

   
    return (// this is for showing all the reqursted money and they can pay or reject.
        <div>
             <div>
            <h1> {store.getState().user} , Request Money  </h1>
            <Styles>
           <table className="center">
                <thead>
                  <tr>
                    <td>accno</td>
                    <td>requested amount</td>
                    <td>Pay</td>
                    <td>Reject</td>
                    
                    
                  </tr>
                </thead>
                <tbody>
                    {ln && ln.map(l =>
                       
                       <tr>
                          
                           
                           <td> {l.by}</td>
                            <td>{l.amount}</td>
                            <td>  <Link to={{pathname:"/Main/SendMoney",id:l._id,acc:l.by,amm:l.amount}} style={linkStyle}>Pay</Link></td>
                            <td> <Link to={{pathname:"/Requestdelete",id:l._id,acc:l.by,amm:l.amount}} style={linkStyle}>Reject</Link></td>

                            
                            
                            </tr>
                            
                    )}
                    </tbody>
                    </table>
                    </Styles>
           
           
        </div>
        </div>
    )
}
