import React,{ Component } from 'react';
import Title from './Elements/Title.js';
import SrchBtn from './Elements/Button';
import SrchWrapper from './Elements/SrchWrapper';
import ListWrapper from './Elements/ListWrapper';
import Input from './Elements/SrchInput';
import Wrapper from './Elements/Wrapper';
import Movie from './Elements/Movie';
class Home extends Component {
  state ={  
    name:"",
    movie:[ ]
  }
    
  // componentWillMount() {
  //   console.log("Will Mount");
  //   fetch('http://www.omdbapi.com/?s=Jurassic&apikey=e372d343')
  //   .then((results)=>{
  //       return results.json();
  //   })
  //   .then(data=>{
  //      data.Search.map(mov=>{
  //       //console.log(mov); 
  //       this.setState({movie:[...this.state.movie,mov]})
  //      })
  //   });
  // }

  handleSearch(name){
    fetch(`http://www.omdbapi.com/?s=${name}&apikey=e372d343`)
    .then((results)=>{
        return results.json();
    })
    .then(data=>{
       data.Search.map(mov=>{
        //console.log(mov); 
        this.setState({movie:[...this.state.movie,mov]})
       })
    });
  }

  clearData(){
     let movie = this.state.movie;
     //console.log("Cleardata function: ",movie);
     movie.splice(0,movie.length);
     this.setState({movie});
  }

  handleName(e){
    console.log("Inside handleName function: ",e.target.value);
    let name = e.target.value;
    console.log("Search Name: ",name);
    this.setState({ name });
  }

  displayMovies(){
    console.log('invoked display movie function');
    this.state.movie.length?this.state.movie.map(movie=>{ return( <Movie id={movie.imdbID} name={movie.Title} year={movie.Year} type={movie.Type} />); }): 'No Movies Searched'
  }

  render() { 
    // console.log("Array Length:",this.state.movie.length);
    // console.log("State Movie",this.state.movie);
    //console.log("Search Movie: ",this.state.name);
      return(
         <Wrapper>
           <Title> M O V I E - L I S T </Title>
           <SrchWrapper>
             <Input type='txt' placeholder='Enter any Movie Name :)' onChange={ (e)=>{ this.handleName(e); } }/>
             <SrchBtn onClick={ ()=>{ this.clearData(); } }> ↺ </SrchBtn>
             <SrchBtn onClick={ ()=>{ this.handleSearch(this.state.name); }}>S E A R C H</SrchBtn>
           </SrchWrapper>
           <ListWrapper>
              {this.state.movie.length ?this.state.movie.map(movie=>{ return( <Movie key={movie.imdbID} name={movie.Title} year={movie.Year} type={movie.Type} image={movie.Poster} />); }) :<Title>"No Movies Searched"</Title>}
           </ListWrapper>
         </Wrapper>
    );
  }
}
 
export default Home;