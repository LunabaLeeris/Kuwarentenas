import { useState } from "react";
import Article from "./Article";
import { db } from "./config";

function Articles({ step, virus }) {
    let contents = 0;
    const [range, setRange] = useState(step);
    
    return (
        <>
            <div className="row px-2 px-md-3 px-lg-5 gx-3 d-flex justify-content-center">
                {Object.keys(db[virus]).map(g => {
                    return Object.keys(db[virus][g]).map(key => {
                        if (contents == range) return;
                        contents++;
                        return <div className="col-lg-3 col-md-4 col-sm-6  col-12 col-xxl-3 p-1" key={key}> <a href={db[virus][g][key].url} target="_blank" rel="noopener noreferrer">
                            <Article writer={db[virus][g][key].writer} image={db[virus][g][key].image} headline={db[virus][g][key].headline}
                                date={db[virus][g][key].date} summary={db[virus][g][key].summary}></Article>
                        </a> </div>
                    })
                })}
            </div>
            <div className="col d-flex justify-content-center my-5">
                <button type="button" className="btn btn-outline-dark w-50 rounded-0" onClick={() => setRange(prev => prev + step)}>See More</button>
            </div>
        </>
    );
}

export default Articles;