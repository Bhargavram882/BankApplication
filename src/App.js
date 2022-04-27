import './App.css';
import {BrowserRouter as Router ,Link,Switch, Route} from "react-router-dom";
import Main from "./Main"; 
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Signup from "./Signup";
import Transactions from "./Transactions";
import SendMoney from './SendMoney';
import Header from './Header';
import Loan from './Loan';
import Takeloan from './takeloan';
import Loandetai from './loandetails';
import Payloan from './Payloan';
import PayMoney from './PayMoney';
import RequestMoney from "./RequestMoney";
import Requestdelete from "./Requestdelete";
import Sendrequest from './Sendrequest';
import Showrequest from './Showrequest';
import Admin from './Admin';
import TransactionsFull from './TransFull';
import LoanFull from './LoanFull';
import Upload from './UplaodLicence';
import LoginAdmin from './loginAdmin';
import Licence from './Licence';

function App() {
  return (
<div className="App">


   
<Router>
    <Switch>
    <Route exact path="/"> <Header page="home" /> <hr/> <Home/>  </Route>
    <Route exact path="/Login"> <Header page="Login" /> <hr/><Login/>  </Route>
    <Route path="/Signup"> <Header page="Signup" /><hr/><Signup/>  </Route>
    
    
    <Route exact path="/Main"><Header page="Main" /><hr/> <Main/> </Route>
    <Route path="/Main/Transactions"><Header page="Trans" /><hr/><Transactions/> </Route>
    <Route path="/Main/SendMoney"><Header page="SendMoney" /><hr/><SendMoney/> </Route>
    
    
    <Route path="/Contact"> <Header page="Contact" /> <hr/><Contact/>  </Route>
    <Route path="/About"> <Header page="About" /><hr/><About/>  </Route>
    <Route path="/Upload"> <Header page="Upload" /><hr/><Upload/>  </Route>
    <Route path="/Licence"> <Header page="Licence" /><hr/><Licence/> </Route>
    <Route exact path ="/Loan"><Header page="Loan" /><hr/><Loan/></Route>
    <Route path ="/Loan/giveloan"><Header page="takeLoan" /><hr/><Takeloan /></Route>
    <Route path ="/Loan/loandetails"><Header page="Loandet" /><hr/><Loandetai/></Route>
    <Route path ="/Loan/payloan"><Header page="payLoan" /><hr/><Payloan/></Route>
    
    <Route path ="/paymoney"><Header page="payLoan" /><PayMoney/></Route>

    <Route path ="/Request"><Header page="reqMon" /><RequestMoney/></Route>
    <Route path ="/Requestdelete"><Requestdelete/></Route>
    <Route path ="/Sendrequest"><Header page="makereq" /><Sendrequest/></Route>
    <Route path="/Showrequest"><Header page="showreq" /><Showrequest/></Route>

      
    <Route path="/Admin"><Admin/></Route>
    <Route path="/TransactionsFULL"><TransactionsFull/></Route>
    <Route path="/LoanFull"><LoanFull/></Route>
    <Route path ="/LoginAdmin"><Header page="Upload" /> <LoginAdmin/></Route>
  
    </Switch>
</Router>
{/*
<Router >
<Link to="/Signup">Signup</Link>
<Link to="/Login">login</Link>

</Router>*/}


</div>

  );
}

export default App;
