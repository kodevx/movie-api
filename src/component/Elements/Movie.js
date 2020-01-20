import React from 'react';
import Wrapper from './Wrapper';
import styled from 'styled-components';

const MovWrapper = styled(Wrapper)`
    padding: 15px;
    display: flex;
    margin-bottom: 30px;
    background-color: white;
    justify-content: space-between;
`;

const MovInfo = styled.div`
    font-family: 'Gotham';
    display: flex;
    font-weight: bold;
    justify-content: space-evenly;
    font-size: 1.5rem;
    color: black;
    flex-direction: column;  
`;

const Img = styled.img`
    border: 4.5px solid black;
    font-family: Gotham;
    font-weight: bold;
    background-color: #906E49;
    background-size: cover;
    height: auto;
    width: 100%;
    color: black; 
`;

const Movie= (props) =>{
  let { name,year,type,image } = props;   
  return ( 
        <MovWrapper>
          <MovInfo>
            <MovInfo>{name}</MovInfo>
            <MovInfo>{year}</MovInfo>
            <MovInfo>{type}</MovInfo>
          </MovInfo>
          <Img src={image} alt="No Poster Available"/>
        </MovWrapper>
    );
  }
 
export default Movie;