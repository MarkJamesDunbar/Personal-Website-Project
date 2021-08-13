import React from 'react';
import { useRouter } from 'next/router';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SidebarContainer, SidebarList, SidebarRow, SidebarIcon, SidebarTitle, Img, SocialContainer, Spacer, SocialIcons } from './SidebarStyles';
import {SidebarData} from './SidebarData';



function Sidebar() {
    const router = useRouter();
    return(
        <SidebarContainer>
            <Img src = '/images/sidebarlogo.png'/>
            
            
            <SidebarList>
                {SidebarData.map((val, key) => {
                    return(
                        <SidebarRow isSelected={router.pathname == val.link} key={key} onClick={() => {window.location.pathname = val.link}}>
                            <SidebarIcon>{val.icon}</SidebarIcon> 
                            <SidebarTitle>{val.title}</SidebarTitle>
                        </SidebarRow>
                    )
                })}
            </SidebarList>
            <Spacer/>
            <SocialContainer>
                <SocialIcons href="https://github.com/MerkuMerku">
                    <AiFillGithub size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://www.linkedin.com/in/mark-dunbar-17a426152/">
                    <AiFillLinkedin size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://www.instagram.com/merkumerk/">
                    <AiFillInstagram size="3rem" />
                </SocialIcons>
            </SocialContainer>

            

        </SidebarContainer>
    )
}

export default Sidebar;