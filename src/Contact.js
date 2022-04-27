import homi from "./assets/contact.json"
function  Contact(){
    return (<div>

        <h1> Contact</h1>
        {homi.map((hom)=><h1> {hom.title} <br/> {hom.address}</h1>)}


        </div>);


}

export default Contact;