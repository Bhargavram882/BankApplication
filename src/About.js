import homi from "./assets/about.json"
// import "./About.css";
function About() {
    return (
        /*<div>
            <div class="service__banner">
            <h1> Our services</h1>
            </div>
            
            {homi.map((hom)=><h1> {hom.title} <br/> {hom.content}</h1>)}
            <h2> This is an online potral for the bank </h2>
    
            </div>*/
                            <div class="services">
                                <div class="max-width">
                                    <h1>Our Services</h1>
                                    <div class="content">
                                        <div class="card">
                                            <div class="box">
                                                
                                                <h3>Send money</h3>
                                                <p>send money!</p>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="box">
                                                <i class="fa fa-code"></i>
                                                <h3>transactions</h3>
                                                <p> transaction</p>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="box">
                                                <i class="fa fa-mobile"></i>
                                                <h3>Loan</h3>
                                                <p>loan</p>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="box">
                                                <i class="fa fa-line-chart"></i>
                                                <h3>request for money</h3>
                                                <p>request for money</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            );


}

                            export default About;