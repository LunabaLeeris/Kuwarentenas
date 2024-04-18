import Card from './Card';
import './index.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className="row">
                <div className="col-md-6 col-sm-12" style={{ paddingLeft: "250px", paddingTop: "150px" }}>
                    <h1 style={{ fontWeight: "bold" }}>Know your Viruses, <i className='highlighted'>Juan</i></h1>
                    <p className="">Your Go to when It comes to information about viruses in the Philippines</p>
                </div>
                <div className="col-md-6 d-flex justify-content-center" >
                    <div className=" position-relative" style={{ height: "400px", width: "450px" }}>
                        <dotlottie-player src="https://lottie.host/68105563-499c-4f3b-9c2b-bdea9b9f1b56/0YUu0XjrcI.json" background="transparent" speed="1"
                            style={{ width: "242px", height: "238px", position: "absolute" }}
                            loop autoplay></dotlottie-player>

                        <dotlottie-player src="https://lottie.host/feb92348-fb27-44c8-953e-ffd54167e9c2/62S6wMqOro.json" background="transparent" speed="1" style={{ width: "242px", height: "238px", position: "absolute", left: "160px", top: "160px" }} loop autoplay></dotlottie-player>

                        <dotlottie-player src="https://lottie.host/e571823f-7c16-46de-90f2-17a79ca81a6c/BzwJcl1kCq.json" background="transparent" speed="1" style={{ width: "230px", height: "230px", position: "absolute", left: "200px", top: "0px" }} loop autoplay></dotlottie-player>
                    </div>
                </div>
            </div>
            <div className='row px-5 d-flex justify-content-center align-items-center' style={{ marginTop: "50px" }}>
                <Card image="/assets\baby.png" name="Pertussis" path="/pertussis"></Card>
                <Card image="/assets\slab.png" name="Covid-19"  description="(unfinished)" path="/covid19"></Card>
                <Card image="/assets\cough.png" name="Tuberculosis" description="(unfinished)" path="/tuberculosis"></Card>
            </div>
        </>
    )
}


export default Home;