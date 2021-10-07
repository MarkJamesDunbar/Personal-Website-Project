import styled, { keyframes } from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  height: 100%;
  padding-left: ${(props) => props.indent ? "8rem" : "0" };
  
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

export const Anchor = styled.p`
  background-color: red;
  background-image: linear-gradient(to right top, #6b3d91, #813993, #963492, #ab2c8e, #bf2188, #d0157f, #de0674, #eb0068, #f60456, #fd1b42, #ff322a, #ff4700);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  font-size: 22pt;
  font-family: 'Permanent Marker';
  transition: transform 0.6s;
  transform: scale(1);
  transform-origin: 25% 25%;
  &:hover {
        cursor: pointer;
        transform: scale(1.08);
    }
`;

const animate_out = keyframes`
  0% {
    box-shadow: inset 0 0 0 0 #31302B;
    color:#31302B;
    background: #FFF;
  }
  100% {
    box-shadow: inset 250px 0 0 0 #31302B;
    color:#FFF;
    background: #FFF;
  }
`

const animate_in = keyframes`
  0% {
		box-shadow: inset 0 0 0 0 #FFF;	
	  background: #31302B;
		color:#FFF;
	}
	100% {
		box-shadow: inset 250px 0 0 0 #FFF;	
	  background: #31302B;
		color:#31302B;
	}
`

export const Button = styled.button`
  padding: 12px 17px;
  margin: 25px 0 25px 0;
  font-family: 'Space Grotesk';
  border: 3px solid #31302B;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  border-radius: 2px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  animation: ${animate_out} 0.5s 1;
  animation-fill-mode:forwards;
  &:hover {
    animation: ${animate_in} 0.5s 1;
	  animation-fill-mode:forwards;
  }
`;


        
