import { useRouter } from 'next/router';
import React from 'react';
import { SidebarContainer, SidebarList, SidebarRow, SidebarIcon, SidebarTitle, Img } from './SidebarStyles';
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
        </SidebarContainer>
    )
}

export default Sidebar;