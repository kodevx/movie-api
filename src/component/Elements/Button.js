import styled from 'styled-components';

const SrchBtn = styled.button`
  background-color: black;
  color: white;
  font-family: 'Gotham';
  font-size: 15px;
  padding: 5px 10px;
  font-weight: bold;
  border-color:black;
  border-style: solid;
  border-width: 5px;
  &:hover{
    transition: 0.4s;
    background-color: white;
    color: black;
    font-weight: bold;
    border-color: black;
    border-style: solid;
    border-width: 5px; 
  }
`;

export default SrchBtn;