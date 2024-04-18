import Card from './Card';
import { Link } from 'react-router-dom';
function About() {
    return (
        <div className="row d-flex justify-content-center   ">
            <div className="col-12" style={{ paddingLeft: "250px", paddingTop: "50px" }}>
                <h1 style={{ fontWeight: "bold" }}>About</h1>
            </div>
            <div className="col-md-7 pt-4">
                <p>Kuwarentenas is a Filipino word which means quarantine, a name synonymous to our goal. Kuwarentenas is a website designed to  inform everyone, especially Filipinos about the current status of different viruses across the Philippines.
                    <br></br><br></br>This website is created by 4 computer science students, Christian Lee Lunaba, Jezreel James Hallasgo, Camillo Cruspero and John Robert Camarite, as a hackathon pitch, a dream and and most importantly as a solution.<br></br><br></br>Our goal is to equip our fellow citizens with accurate, timely and important information about viruses, a threat we once failed to anticipate, a threat that costed us millions.
                    <br></br><br></br>
                    You can help us  through contributing by contacting us through our E-mail or give us donations. Nothing is scarier than the unknown, but together we can bring to light, face and overcome this powerful obstacle. </p>
            </div>
            <div className="row d-flex justify-content-center pt-5">
                
            <Card image="/assets\donate.png " path="/donate" name="Donate"></Card>
            <Card image="\assets\contribute.png"  path="/contribute" name="Contribute"></Card>

            </div>
            

        </div>
    );
}

export default About;