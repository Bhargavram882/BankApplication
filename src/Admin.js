import {BrowserRouter as Router ,Link,Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import styled from "styled-components";

const NavUnlisted = styled.ul`
  text-decoration: none;
  font-size: 1.3rem;  
  
  padding: 20px 32px;

`;

const linkStyle = {
  
  textDecoration: "none",
  color: "#000"
};

function Admin(){
    //var p=true
    return (<>
       <Link to="/" style={linkStyle}>Home</Link>{"> Admin "}
            <br/>
            
    <br/>
            <hr/>
            <hr/>
         
    <NavUnlisted>
     <Link to="/TransactionsFULL" style={linkStyle} > Transactions </Link> <br/>
     <Link to="/LoanFULL" style={linkStyle} > Loans </Link> <br/>
     <Link to="/LoginAdmin" style={linkStyle} > Licence Upload </Link> 

     </NavUnlisted>
  </>)
    }



export default Admin;
//export default Main;