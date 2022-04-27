import homi from "./assets/home.json";
import {BrowserRouter as Router ,Link,Switch, Route} from "react-router-dom";
import prof from "./home.jpeg";
import "./Home.css"

//import a from "./hero-machine.png"
import b from "./sibilings.jpeg"
import c from "./turn-runaway-visitors-into-revenue.png"
import d from "./track-and-improve-results.png"
import f1 from "./pb.jpeg"
import f2 from "./loanpr.jpeg"
import f3 from "./creditcard.jpeg"
import f4 from "./ib.jpeg"
/*import e from "./protect-customer-data.png"
import f from "./build-profitable-relationships.png"
import g from "./blob-blue.svg"
import h from "./blob-pink.svg"
import h1 from "./bank.jpeg";*/
import {useHistory} from "react-router-dom";
import styled from "styled-components";
const Button = styled.button`
  background-color: 	#008080;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;
//import {useHistory} from "react-router-dom";
//      <img src={prof}width={450}  height={450}style={{  marginLeft: '8.2rem', borderImage:"500" , float: "left"} }/> <br/>
/*
 <div>
        <img src={a} width={400}  height={400} style={{marginLeft: '8.2rem', borderImage:"500" , float: "left"} }/><br/> 
        <h2 style={{backgroundColor:"white"}}>We bank gives you a lot of benefits</h2><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        
        </div>
*/ 
function  Home(){
    let p={title : "Welcome to home 1 " , content: "this is home content 1"};
    const newp = [...homi, p] ;
    const history= useHistory();
    function sayHello() {
    history.push("/About")
       
      }
     
     
    return (<div>
        <div className="top">
            
            
        <div >
        <h1 style={{alignContent:"center",color:"white" }}><h1><b>We bank gives you a lot of benefits</b></h1></h1><h2 >our bank application provides you with all the things like loan,transactions</h2><h2 style={{alignContent:"center",color:"white" }}>Less Stress to Get Loan</h2><br/><br/><br/><br/><br/>
        <Button onClick={sayHello}>
  About
</Button>     <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        </div>
        <br/><br/><br/>
        <div>
        <div>
       <Link to ="/Login"><img src={f1} width={200}  height={200} border="10px"  style={{marginLeft: '9.2rem',blockBorder:'black',float: "left"} }   /></Link> 
         
       <Link to="/Signup"><img src={f2} width={200}  height={200} border="10px" style={{marginLeft: '9.2rem', borderImage:"300" ,float: "left"} }/> </Link> 
       <Link to ="/Contact"> <img src={f3} width={200}  height={200} border="10px" style={{marginLeft: '9.2rem', border:{width:200,height:200}, borderImage:"300" ,float: "left"} }/> </Link>
       <Link to ="/Admin"><img src={f4} width={200}  height={200} border="10px" style={{marginLeft: '9.2rem', borderImage:"300" ,float: "left"} }/> </Link>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        </div> 
        

        <div>
        <div>
        <img src={b} width={500}  height={500} style={{marginLeft: '8.2rem', borderImage:"500" ,float: "left"} }/> <br/>
        <h2 ><h1>A better way to bank and borrow</h1></h2><br/>
      
          <li >Life is busy and unpredictable. At IIITS Bank, we are on a mission to find better ways to meet your financial needs </li>
          <li>so you can spend less time banking and more time doing the things you love with the people you love.</li>
          
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        </div>
        <div>
        
        <img src={c} width={400}  height={400} style={{marginLeft: '8.2rem', borderImage:"500" ,float: "left"} }/><br/> 
        <h2 >We bank gives you a lot of benefits</h2>Send Request and Pay Request,Loans with low intrest rate<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        <div>
        
        <img src={d} width={400}  height={400} style={{marginLeft: '8.2rem', borderImage:"500" ,float: "left"} }/> <br/> 
        <h2 >Cards and Savings deposit</h2>Credit Cards would be deposited at ur door step. Best saving policies available at door step <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        
        
        
        {/*{homi.map((hom)=><h1> {hom.title} <br/> {hom.content}</h1>)}
        <h1>new</h1>
        {newp.map((hom)=><h1> {hom.title} <br/> {hom.content}</h1>)}
    */}



        </div>);


}

export default Home;