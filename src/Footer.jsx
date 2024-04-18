import './index.css'

function Footer() {
    return (
        <>
            <div className="row text-white p-5" id="footer" style={{bottom: "0"}}>
                <div className="col">
                    <p className='fw-bold'>@ 2024 Kuwarentenas PH</p>
                    <div className='row d-flex align-items-center"'>
                        <div className='col' style={{ lineHeight: "5px" }}>
                            <p className='small-text'>Kuwarentenas@gmail.com</p>
                            <p className='small-text'>+63 961 546 3343</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Footer;