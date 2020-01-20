import styled from 'styled-components';

const Title = styled.div`
   @font-face {
    font-family: 'Gotham';
    src: url('../../Fonts/Gotham-Bold.otf') format('otf'),
         url('../../Fonts/Gotham-Light.otf') format('otf'),
         url('../../Fonts/GothamMedium_0.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
   }
   display: flex;
   justify-content: center;
   background-color: cadetblue;
   color: black;
   border: 4px solid black;
   font-size: 2rem;
   padding : 5px 0px;
   font-family: 'Gotham';
   font-weight: bolder;
`;

export default Title;