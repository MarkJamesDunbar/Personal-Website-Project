import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import { Container, Box } from './LayoutStyles';
import { SidebarWrapper } from '../styles/GlobalComponents';

export const Layout = ({children}) => {
  return (
    
    <Container>
      <SidebarWrapper>
        <Sidebar/>
        <main>{children}</main> 
      </SidebarWrapper>
    </Container>
  )
}
