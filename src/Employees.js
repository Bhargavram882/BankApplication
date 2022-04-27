import homi from "./assets/emloyees.json"
function  Employees(){
    return (<div>

        <h1> Employees</h1>
        {homi.map((hom)=><h1> {hom.title} <br/> {hom.employees.map((x)=><ul><l1> {x} </l1></ul>)}</h1>)}


        </div>);


}

export default Employees;