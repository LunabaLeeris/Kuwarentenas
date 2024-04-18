function Mobile(){
    return (
        <div className="row d-flex justify-content-center" style={{paddingTop: "100px", paddingBottom: "100px"}}>
            <img style={{ width: "400px" }} src="/assets/repair.png"></img>
            <h1 className="text-center"
                style={{ fontWeight: "500", fontSize: "1.5rem" }}>Sorry but this website is not yet stable for small screens.</h1>
            <h1 className="text-center"
                style={{ fontWeight: "500", fontSize: "1.5rem" }}>Resize your screen to have atleast 950px width</h1>
        </div>
    );
}

export default Mobile