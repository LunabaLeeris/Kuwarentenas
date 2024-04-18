import './index.css';
import { Link } from 'react-router-dom';

function Card({ image, name, path, description }) {
    return (
        <Link className="col-md-3 col-12 px-1 text-decoration-none text-black" to={path}>
            <div className="container card-container">
                <div className="row d-flex justify-content-center">
                    <img className="card-img" src={image}></img>
                </div>
                <div className="p-1" style={{height: "100px"}}>
                    <p className="text-center fw-bold">{name}</p>
                    <p className='text-center' style={{fontSize: "10px", lineHeight: "0px"}}>{description}</p>
                </div>
            </div>
        </Link>
    );
};

export default Card;