import styled, { keyframes } from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  height: 100%;
  padding-left: ${(props) => props.indent ? "4rem" : "0" };
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    overflow: visible;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Anchor = styled.a`
  background-color: red;
  background-image: linear-gradient(to right top, #6b3d91, #813993, #963492, #ab2c8e, #bf2188, #d0157f, #de0674, #eb0068, #f60456, #fd1b42, #ff322a, #ff4700);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  font-size: 20pt;
  font-family: 'Permanent Marker';
`;



        
