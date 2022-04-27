import React from 'react'
import {useHistory, useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import axios from "axios";

import ReactPaginate from "react-paginate";


export default function Requestdelete() {
    const history=useHistory();
    const location=useLocation();
    const id=location.id;
    const fun=()=>{
        console.log(id);
        axios.delete("https://appbankiiits.herokuapp.com/req/"+id).then((res)=>{// axios sends the http async req to end points , here we are sending to port o 4000.
        console.log("success");
        history.push("/Request");

        }).catch((err)=>{
            console.log("errr=----",err);

            history.push("/Request");

        })


    };
    useEffect(() => {
        
     fun();   
    })

    return (
        <div>
            
        </div>
    )
}
