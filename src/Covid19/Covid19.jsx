import { Outlet, Link } from "react-router-dom";
import { useState, useEffect, useRef} from "react";
import Footer from '../Footer';
import Info from "./Info";
import Articles from '../Articles';
import Cases from './Cases';
import Symptoms from './Symptoms';
import Prevention from './Prevention'
import '../index.css'


function Covid19() {
    const [object, setObject] = useState(<Articles step={8} virus="covid 19"></Articles>);
    
    return (
        <>
            <img src="/assets/blob1.svg" style={{ position: "absolute", left: "-200px", top: "200px", zIndex: "-5" }}></img>
            <img src="/assets/blob2.svg" style={{ position: "absolute", right: "-50px", top: "0", zIndex: "-5" }}></img>

            <div className="row position-relative" style={{ scrollBehavior: "smooth", overflow: "hidden" }}>
                <img src="/assets/blob3.svg" className=" right-0 bottom-0" style={{ position: "absolute", right: "-200px", zIndex: "-5", width: "600px" }}></img>
                <section id="#top">
                    <nav className="z-3 w-100 row navbar navbar-expand-lg  pt-4 pb-0 px-md-0 px-lg-0 mx-0" data-bs-theme="light">
                        <div className="container-fluid d-flex justify-content-even px-5">
                            <Link className="navbar-brand" to="/"> <h4><b>Kuwarentenas <span className="highlighted">PH</span></b></h4></Link>
                            <Link className="navbar-brand" to="/covid19"> <h2><b>Covid 19</b></h2></Link>
                        </div>
                    </nav>
                </section>
                <div className="col d-flex justify-content-center p-5">
                    <div className="tab-container">
                        <input type="radio" name="tab" onChange={() => setObject(() => <Articles step={8} virus="covid 19"></Articles>)}  id="tab1" className="tab tab--1" />
                        <label className="tab_label"  for="tab1">News</label>

                        <input type="radio" onChange={() => setPage(() => 'info')} name="tab" id="tab2" className="tab tab--2" />
                        <label className="tab_label" onClick={() => setObject(() => <Info/>)} for="tab2">What is it ?</label>

                        <input type="radio" name="tab" id="tab3" className="tab tab--3" />
                        <label className="tab_label" onClick={() => setObject(() => <Cases/>)} for="tab3">Cases</label>

                        <input type="radio" name="tab" id="tab4" className="tab tab--4" />
                        <label className="tab_label" onClick={() => setObject(() => <Symptoms/>)} for="tab4">Symptoms</label>

                        <input type="radio" name="tab" id="tab5" className="tab tab--5" />
                        <label className="tab_label"  onClick={() => setObject(() => <Prevention/>)}  for="tab5">Prevention</label>

                        <div className="indicator"></div>
                    </div>
                </div>
                {object}
                <Footer/>
            </div>
        </>
    );
}

export default Covid19;