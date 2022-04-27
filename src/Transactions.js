//import transactions from "./assets/transactions.json";
import store from "./store";
import users from "./assets/users.json";
import {connect} from "react-redux";
import { useState,useEffect } from "react";
import './Header.css';
import axios from "axios";

//import trans_sub from "./trans_sub";
//import ReactPaginate from "react-paginate";
import api2 from "./api/transactions";
import api1 from "./api/jsonServer";

import ReactPaginate from "react-paginate";

import styled from "styled-components";
import "./Transactions.css";

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

function Transactions(){
    // const [acc,setAcc]=useState();
    const[items, setItems]=useState([]);//  this is for pagination , all objects willbw stored here
    const [pageNumber, setPageNumber]= useState(0);// number of pages
    const itemsPerPage = 6 //no. of items per page
    const pagesVisited = pageNumber*itemsPerPage// how many pages visited till then
    const displayItems=items.slice(pagesVisited, pagesVisited+itemsPerPage).map((ln)=> <tr><td>{ln.t_id}</td> <td>{ln.from}</td> <td>{ln.to}</td><td> {ln.amount}</td></tr>)// showing to the UI
    console.log('Items.length'+ items.length);
    console.log('Items'+ itemsPerPage);

    const PageCount = Math.ceil(items.length / itemsPerPage);// based on number of objs decide how many pages will be.
    const changePage = ({selected})=>{
        setPageNumber(selected);
    };
    
      const [ln,setLn]=useState([]);//usestate for all the transactions

      const gu=async()=>{//this is to retreive the username 
        const token=store.getState().token;

        console.log(store.getState().user);
        const st="https://appbankiiits.herokuapp.com/users/"+store.getState().user;
        console.log(st)
        axios.get(st,{ headers: {"token":token} }).then((res)=>{// axios sends the http async req to end points , here we are sending to port o 4000.
        console.log("res data  ... ",res.data);
        const ac=res.data.acc
        const st1="https://appbankiiits.herokuapp.com/transactions/"+ac;

        
        axios.get(st1,{ headers: {"token":token} }).then((res)=>{
          console.log("data from file , ",res.data);
            setLn(res.data);
            setItems(res.data);
        }).catch((err)=>{
          console.log("err fail");
     //     response.status(400).json("trans does not exist");
          return;
        })

      }).catch((err)=>{
        console.log("err fail");
 //       response.status(400).json("user does not exist");
        return;
      })
      
      } 
      
     useEffect(() => {
        gu();;//this is the starting part gu function is called
        
     }, [])
    
    return (//printing the transactions this user involved in using map ,ln is the transactions list
        <div>
            <h1> {store.getState().user} , Your transactions</h1>
            <center>
            <Styles>
            <table className="center">
            <thead>
        <tr>
        <td>TID</td> <td>accno from</td><td>acc to</td><td>amount</td></tr>
            </thead>
            <tbody>

            {displayItems}
            <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={PageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}/>
                        </tbody>  
    
    </table>

        </Styles>
    </center>
               
        </div>
    )
}

    
export default Transactions;





