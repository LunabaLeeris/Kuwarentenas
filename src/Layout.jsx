import { Link, Outlet} from "react-router-dom";
import Footer from './Footer';
import './index.css'

function Layout() {
    return (<>
    <img src="/assets/blob1.svg" style={{position: "absolute", left: "-50px", top: "100px", zIndex: "-5"}}></img>
    <img src="/assets/blob2.svg" style={{position: "absolute", right: "-50px", top: "0", zIndex: "-5"}}></img>
    
        <div className="row position-relative" style={{ scrollBehavior: "smooth", overflow: "hidden" }}>
        <img src="/assets/blob3.svg" className=" right-0 bottom-0" style={{position: "absolute", right: "-200px", zIndex: "-5", width: "600px"}}></img>
            <section id="#top">
                <nav className="z-3 w-100 row navbar navbar-expand-lg  pt-4 pb-0 px-md-0 px-lg-0 mx-0" data-bs-theme="light">
                    <div className="container-fluid d-flex justify-content-even px-5">
                        <Link className="navbar-brand" to="/"> <h4><b>Kuwarentenas <span className="highlighted">PH</span></b></h4></Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active me-3" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active me3" to="/donate">Donate</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active me-3" to="/contribute">Contribute</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
            <Outlet />
            <Footer />
        </div>
        </>
    );
}

export default Layout;