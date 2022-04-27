import api from './api/loan_api';
import {useHistory} from "react-router-dom";
import { useState } from "react";
import loan from  "./assets/loan.json";
import {connect} from "react-redux";
import axios from "axios";

import { uuid } from "uuidv4";
function Upload(){
    const [file,setFile]=useState("")

      //taking the input from the user
      return (<div>
          <form className="form-box" action="http://localhost:5000/uploadfile" enctype="multipart/form-data" method="POST">
      <h1>Uplaod Licence</h1>
      <div className="field1">
          <input type="file" placeholder="Licence"  name="myFile"  onChange={(e)=>setFile(e.target.value)}  />
        </div>
          <button className="submitBtn"  >Sanctionloan</button>

          </form>
      </div>)
}

export default Upload;

