import { Link } from "react-router-dom";

function Building() {
    return (
        <div className="row d-flex justify-content-center" style={{paddingTop: "100px"}}>
            <img style={{ width: "400px" }} src="/assets/repair.png"></img>
            <h1 className="text-center"
                style={{ fontWeight: "500", fontSize: "1.5rem" }}>Sorry. This part of the website is under construction</h1>
            <Link to="/" className="col d-flex justify-content-center text-decoration-none">
                <button type="button" class="btn btn-outline-warning" style={{ width: "200px" }}>back to home</button>
            </Link>
        </div>
    );
}

export default Building;