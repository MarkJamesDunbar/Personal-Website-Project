import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';

const pulseAnimation = keyframes`${pulse}`;

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
  color: white;
  font-size: 20pt;
  
`;

export const Letter = styled.span`
  position: relative;
  
  &:hover {
      transform: translate(0%, -30%);
      transition: 0.3s ease-out;
    }
`;



  
