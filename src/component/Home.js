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

  displayMovies(movie){
    console.log('invoked display movie function');
    return( movie.length? movie.map(mov=>{ return( <Movie key={mov.imdbID} name={mov.Title} year={mov.Year} type={mov.Type} image={mov.Poster} />); }) :<Title>"No Movies Searched"</Title> );
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
              { this.state.movie.length ? this.displayMovies(this.state.movie):<Title>"No Movies Searched"</Title>} 
           </ListWrapper>
         </Wrapper>
    );
  }
}
 
export default Home;