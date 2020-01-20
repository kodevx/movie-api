import styled from 'styled-components';

const Input = styled.input`
    border-color: black;
    border-style: solid;
    border-width: 5px;
    border-right-width: 0px;
    font-family: 'Gotham';
    font-weight: bold;
    font-size: 17px;
    padding: 0px 60px;
  @media (max-width: 875px) {
      font-size: 13px;
      padding: 0px 6px;
  }
`;

export default Input;