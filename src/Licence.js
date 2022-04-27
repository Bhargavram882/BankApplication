import homi from "./assets/home.json";
import {BrowserRouter as Router ,Link,Switch, Route} from "react-router-dom";
import prof from "./uploads/myFile.jpg";
//import {useHistory} from "react-router-dom";

function  Licence(){
  
    return (<div>
        <img src={prof}width="500" height="600"/> 
        {/*{homi.map((hom)=><h1> {hom.title} <br/> {hom.content}</h1>)}
        <h1>new</h1>
        {newp.map((hom)=><h1> {hom.title} <br/> {hom.content}</h1>)}
    */}



        </div>);


}

export default Licence;