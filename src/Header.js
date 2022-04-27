import {BrowserRouter as Router ,Link,Switch, Route} from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import './Header.css';
import store from "./store";
const NavUnlisted = styled.ul`
  text-decoration: none;
  font-size: 1.3rem;
  
 
  padding: 20px 32px;
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "#FFF"
};


function Header(props){
  // For Home  Page
if (props.page==="home"){
    return(
        <div className="head" >
          <h1 className="header">IIITS Bank</h1>
            <NavUnlisted>
          <Link to="/" style={linkStyle}> Home </Link>
          <Link to="/About" style={linkStyle} > About </Link>

          <Link to="/Contact" style={linkStyle}> Contact </Link>
        <Link to="/Login" style={linkStyle}>Login</Link>
        <Link to="/Signup" style={linkStyle}>Signup</Link>
        <Link to="/Admin" style={linkStyle}>Admin</Link>

        </NavUnlisted>
        

  
        </div>
    )

}// For Login  Page
if (props.page==="Login"){
    return ( <div className="head"> 
    <h1 className="header">IIITS Bank</h1>
        <NavUnlisted>
        <Link to="/" style={linkStyle}> Home </Link> {"> Login "} 
        </NavUnlisted>
      
      </div>
      )
}
if (props.page==="Main"){// For Main Page
    return (<div className="head">

      <h1 className="header">IIITS Bank</h1>
        <NavUnlisted>
    <Link to="/Main/Transactions" style={linkStyle} > Transactions </Link> 
    <Link to="/Main/SendMoney" style={linkStyle}> Send Money </Link>
    <Link to="/Loan" style={linkStyle}> Loan </Link>
    <Link to="/Request" style={linkStyle}> Payrequest </Link>
    <Link to="/SendRequest" style={linkStyle}> Sendrequest </Link>
    <Link to="/Licence" style={linkStyle}> Licence </Link>

    <Link to="/" style={linkStyle}> Sign out </Link>  
    </NavUnlisted>
    <h1 className="header">User:{store.getState().user}</h1>
    
        </div>
    
    )
}if (props.page==="About"){// For ABout  Page
    return ( <div className="head"> 
    <h1 className="header">IIITS Bank</h1>
        <NavUnlisted>
        <Link to="/" style={linkStyle}> Home </Link> {"> About "} 
        </NavUnlisted>
      
      </div>
      )
}
if (props.page==="Contact"){// For Contact  Page
    return ( <div className="head"> 
    <h1 className="header">IIITS Bank</h1>
        <NavUnlisted>
        <Link to="/" style={linkStyle}> Home </Link> {"> Contact "} 
        </NavUnlisted>
      
      </div>
      )
}
if (props.page==="Upload"){// For Loan details  Page
  return ( <div className="head"> 
  <h1 className="header">IIITS Bank</h1>
      <NavUnlisted>
        <Link to="/Admin" style={linkStyle}> Home </Link>{"> Upload "} <br/>        
        </NavUnlisted>
    </div>
    )
  }

  if (props.page==="Licence"){// For Transaction  Page
    return ( <div className="head"> 
    <h1 className="header">IIITS Bank</h1>
        <NavUnlisted>
          <Link to="/Main" style={linkStyle}> Home </Link> {"> Licence "} 

          </NavUnlisted>
        </div>
        )
}
if (props.page==="Trans"){// For Transaction  Page
    return ( <div className="head"> 
    <h1 className="header">IIITS Bank</h1>
        <NavUnlisted>
          <Link to="/Main" style={linkStyle}> Home </Link> {"> Transactions "} 

          </NavUnlisted>
          <h1 className="header">User:{store.getState().user}</h1>
        </div>
        )
}
if (props.page==="SendMoney"){// For send money   Page
    return  ( <div className="head"> 
    <h1 className="header">IIITS Bank</h1>
        <NavUnlisted>
        <Link to="/Main" style={linkStyle}> Home </Link> {"> Send money  "} 
        </NavUnlisted>
        <h1 className="header">User:{store.getState().user}</h1>
      </div> )
}
if (props.page==="Signup"){// For Signup  Page
    return (
        <div className="head">
          <h1 className="header">IIITS Bank</h1>
            <NavUnlisted>
              <Link to="/" style={linkStyle}> Home </Link> {"> Signup "} 
              </NavUnlisted>
            </div>
    )

}
if (props.page==="Loan"){// For Loan  Page
    return ( <div className="head"> 
    <h1 className="header">IIITS Bank</h1>
        <NavUnlisted>
          <Link to="/Main" style={linkStyle}> Home </Link> {"> Loan "} 
        <Link to="/Loan/giveloan" style={linkStyle}>Take Loan</Link>
        <Link to="/Loan/loandetails" style={linkStyle}>Loan details</Link>
        <Link to="/Loan/payloan" style={linkStyle}>Pay Loan</Link>
        </NavUnlisted>
        <h1 className="header">User:{store.getState().user}</h1>
      </div>
      )
}

if (props.page==="Loandet"){// For Loan details  Page
    return ( <div className="head"> 
    <h1 className="header">IIITS Bank</h1>
        <NavUnlisted>
          <Link to="/Main" style={linkStyle}> Home </Link>{">"}
          <Link to="/Loan" style={linkStyle}> Loan </Link> {"> LoanDetails "} <br/>        
          </NavUnlisted>
          <h1 className="header">User:{store.getState().user}</h1>
      </div>
      )
}
if (props.page==="payLoan"){// For Pay loan  Page
      return ( <div className="head">
        <h1 className="header">IIITS Bank</h1> 
        <NavUnlisted>
          <Link to="/Main" style={linkStyle}> Home </Link>  
          <Link to="/Loan" style={linkStyle}> Loan </Link> {"> payloan "}  
        <Link to="/Loan/loandetails" style={linkStyle}>Loan details</Link>
        
        </NavUnlisted>
        <h1 className="header">User:{store.getState().user}</h1>
      </div>)}
if (props.page==="takeLoan"){// For Take loan  Page
  return ( <div className="head"> 
  <h1 className="header" >IIITS Bank</h1>
    <NavUnlisted>
      <Link to="/Main" style={linkStyle}> Home </Link>  
      <Link to="/Loan" style={linkStyle}> Loan </Link> {"> takeloan "}  
    <Link to="/Loan/loandetails" style={linkStyle}>Loan details</Link>
    <Link to="/Loan/payloan" style={linkStyle}>Pay Loan</Link>
    </NavUnlisted>
    <h1 className="heade">User:{store.getState().user}</h1>
    
  </div>

      )
      
        
        
}
if (props.page==="reqMon"){// For Req money  Page
  return ( <div className="head"> 
    <NavUnlisted>
      <Link to="/Main"  style={linkStyle}> Home </Link> {"> requestedMoney "} 
      </NavUnlisted>
    
    </div>
    )
}
if (props.page==="makereq"){// For Make req  Page
  return ( <div className="head"> 
    <NavUnlisted>
      <Link to="/Main"  style={linkStyle}> Home </Link> {"> Make Request"} <br/>        
      </NavUnlisted>

    
    </div>
    )
}
if (props.page==="showreq"){// For Shw req  Page
  return ( <div className="head"> 
   <NavUnlisted>
      <Link to="/Main"  style={linkStyle}> Home </Link> {"> Show Request"} <br/>        
      </NavUnlisted>

    
    </div>
    )
}

else{// For default  Page
    return <h6></h6>
}

}
export default Header;