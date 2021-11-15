import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import MovieCard from './components/MovieCard';
import info from './components/movieLists';
import './App.css';

// const Category = ({match}) => (
//   <div>
//     <h2>Category</h2>
//     {console.log(match.url)}
//     <ul>
//       <li><Link to={`${match.url}/Shoes`}> Shoes </Link></li>
//       <li><Link to={`${match.url}/Boots`}>Boots</Link></li>
//       <li><Link to={`${match.url}/Footwear`}>Footwear</Link></li>
//     </ul>
//     <Route path={`${match.path}/:name`} render= {({match}) =>( <div> <h3> {match.params.name} </h3></div>)}/> 

//   </div>
// )

const descriptionPage = ({match}) =>(
  <div className="container">
    <h2>Description Page    </h2>
    <h3> Name  : {info[match.params.id-1].title} </h3>
    <p>{info[match.params.id-1].description}</p>

    <iframe width="560" height="315" src={info[match.params.id-1].trailer}
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
  </div>
)

function App(){
  return(
    // <Router>
    //       <div className="App">
    //          <nav className="navbar navbar-light">
    //           <ul>
    //             <li><Link to="/">Homes</Link></li>
    //             <li><Link to={"/category"}>Category</Link></li>
    //             <li><Link to="/products">Products</Link></li>
    //           </ul>
    //         </nav>
    //         <Route exact={true} path="/" component={Home} />
    //         <Route  path="/category" component={Category} />
    //         <Route path="/products" component={Products} /> 
    //       </div>
    // </Router>
    <Router>
          <Link to="/"> <div className="container navbar bg-dark rounded text-light"> <h2>HOME</h2> </div> </Link>
          <Route exact={true} path="/" component={MovieCard} />
          <Route exact={true} path="/descriptionpage/:id" component={descriptionPage} />
    </Router>
        );
}

export default App;
// component={descriptionPage}