import styled from "styled-components";

export const Button=styled.button`
padding: 10px 18px;
border-radius: 5px;
background: #000;
color: white;
min-width: 220px;
border:1px solid transparent ;
cursor: pointer;
font-size: 16px;
transition: 0.4s background ease-in;
&:hover{
   background-color :whitesmoke ;
border: 1px solid black;
color: black;
transition: 0.3s background ease-in;
}
`;

export const OutlineButton=styled(Button)`
background-color: whitesmoke;
border: 1px solid black;
color: black;
&:hover{
   background-color : black;
border: 1px solid transparent;
color:whitesmoke ;

}
`;