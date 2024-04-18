function Info() {
    return (
        <div className="">
            <div className="col-12" style={{ paddingLeft: "100px", paddingTop: "50px" }}>
                <h1 style={{ fontWeight: "bold" }}>What is Pertussis ?</h1>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-10 d-flex">
                    <div className="col-7 pt-4 pe-5">
                        <p>Whooping cough, or pertussis, is a respiratory infection that can cause coughing fits. In serious cases, the coughing can become violent and rapid. You may cough so hard that you vomit. The name of the disease comes from the whooping noise you might make when you try to breathe in after coughing.
                            <br></br><br></br>Whooping cough is a serious respiratory infection caused by a type of bacteria called Bordetella pertussis. The infection causes violent, uncontrollable coughing that can make it difficult to breathe. It spreads easily from person to person mainly through droplets produced by coughing or sneezing.
                            <br></br><br></br>Whooping cough can affect people at any age, It mainly affects babies younger than 6 months old who aren't yet fully protected by immunizations, and kids 11 to 18 years old whose immunity has started to fade. it can be deadly for infants and young children. </p>
                    </div>
                    <div className="col-5 d-flex justify-content-center">
                        <img src="/assets/pertussis.png" 
                        style={{ objectFit: "contain", height: "500px", width: "auto"}} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;