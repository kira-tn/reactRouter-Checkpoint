import {BrowserRouter as Router ,Link,Route} from 'react-router-dom';

function MovieList(props){
    return(
        <div className="col-md-4 col-sm-6 border">
            <Link to={`/descriptionpage/${props.keys}`}><div className="card">
                <div className="card-header">
                    <img src={props.img} />
                </div>
                <div className="card-body">
                    <h2>{props.title}</h2>
                    {/* <p>{props.description}</p> */}
                    <h3>Rate : {props.rating}</h3>
                    <h4>{props.posterURL}</h4>

                    
                </div>
            </div>
            </Link>
        </div>
    );
}

export default MovieList;