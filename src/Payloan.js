import React from 'react'
import api2 from "./api/loan_api";
import store from "./store";
import {useState,useEffect} from "react";
import api1 from "./api/jsonServer";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";

import styled from "styled-components";
import './Header.css';
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
export default function Payloan() {
   const history=useHistory();// this is used for getting the present url
      const [ln,setLn]=useState([]);// for storing all the loans
 

      const gu=async()=>{// thi sfunction uses the above fn etrieve
     
        const st="http://localhost:5000/users/"+store.getState().user;
        console.log(st)
        axios.get(st).then((res)=>{// axios sends the http async req to end points , here we are sending to port o 4000.
      //  console.log("res data  ... ",res.data);
        const ac=res.data.acc
        console.log(ac);
        const st1="http://localhost:5000/loan/"+ac;
        axios.get(st1).then((res)=>{
            setLn(res.data);
    //        setItems(res.data);
        }).catch((err)=>{
          console.log("err fail,11",err);
       //   response.status(400).json("loan does not exist");
          return;
        })

        }).catch((err)=>{
          console.log("err fail");
       //   response.status(400).json("user does not exist");
          return;
        })
      } 
     



    useEffect(() => {
        gu();
    }, [])
   
    return (
        <div>
             <div>
            <h1> {store.getState().user} , Your Loan</h1>
           
           <div>
               <Styles>
           <table className="center">
                <thead>
                  <tr>
                    <td>accno</td>
                    <td>loan amount</td>
                    <td>interest</td>
                    <td>timeperiod</td>
                    <td>amount to be period</td>
                    <td>payloan</td>
                  </tr>
                </thead>
                <tbody>
                    {ln && ln.map(ln =>
                       
                       <tr>
                           
                           
                           <td> {ln.acc}</td>
                            <td>{ln.loan_amount}</td>
                            <td>{ln.interest}<br/></td>
                            <td>{ln.no_of_months}<br/></td>
                            <td>{ln.amount_to_be_payed}</td> 
                            <td><Link to={{pathname:"/paymoney",id:ln._id,acc:ln.acc}} style={linkStyle}>Pay Loan</Link></td>
                            
                            </tr>
                            
                    )}
                    </tbody>
                    </table>
                    </Styles>
             </div>  
        </div>
        </div>
    )
}
