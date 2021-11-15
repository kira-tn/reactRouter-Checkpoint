import MovieList from './MovieList';
import info from './movieLists';
import {Component} from 'react';
import {BrowserRouter as Router ,Link,Route} from 'react-router-dom';


class MovieCard extends Component{

    constructor(){
        super()
        this.state={

            info: info,
            members:[],
            counter:0,
        }
        this.clickEvent = this.clickEvent.bind(this);
    }

    clickEvent(){

        if(this.state.counter <this.state.info.length){
            this.state.members.push(this.state.info[this.state.counter]);
            this.setState(function(prevState){
                return {counter : prevState.counter + 1}
            });
            this.newMembers = this.state.members.map(
                member => {
                    return <MovieList keys={member.id} img={member.img} title={member.title} description={member.description} posterURL={member.posterURL} rating={member.rating}/>
                })
        }
        
    }
    render(){
        return(
            <div className="container">
            <div className="row">
                 {this.newMembers}
                <button className="btn btn-primary btn-lg btn-block m-1" onClick={this.clickEvent}>ADD MORE MOVIE</button>
            </div>
            </div>
        );
    }

}

export default MovieCard;