import {BrowserRouter as Router ,Link,Switch, Route} from "react-router-dom";
import "./Loan.css";
function Loan(){//  this is content for loan page , it shows schemas and inrest rates.etc.
    return (
      <center>
             <div class="context">
             <div class="container">
              <div class="card">
                  <div class="box">
                    <div class="content">
                    <h2>Loan Scheme</h2>
                    <p>Leverage your investments in shares for loans to meet unforeseen expenses!! Avail of loans up to Rs.20.00 lacs against your shares to enable you to meet contingencies, personal needs or even for subscribing to rights or new issue of shares.</p>    
                        </div>  
                      </div></div>
                      
                <div class="card">
                  <div class="box">
                    <div class="content">
                    <h2>Repayment Schedule</h2>
                    <p>Demand Loan :To be liquidated in maximum period of 30 months.<br/>
    Overdraft: Running Overdraft (Auto Renewal every year )</p>    
                        </div>  
                      </div></div> 
                      <div class="card">
                  <div class="box">
                    <div class="content">
                    <h2>Interest rates</h2>
                    <p> upto 1 lakh - 11.2%<br/>
    1lakh-10lakh - 12%<br/>
    10lakh-30lakh - 13%<br/></p>    
                        </div>  
                      </div></div>       
                              
                </div>    
           </div> 
           </center>
            
    )
}
export default Loan;