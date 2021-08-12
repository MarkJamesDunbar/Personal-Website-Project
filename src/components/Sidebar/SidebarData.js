import React from 'react'
import { FaHome, FaFlask, FaProjectDiagram, FaHistory, FaInfo, FaTrophy, FaAddressCard } from 'react-icons/fa';

export const SidebarData = [
    {
        title: "Home",
        icon: <FaHome/>,
        link: '/home'
    },
    {
        title: "Projects",
        icon: <FaFlask/>,
        link: '/projects'
    },
    {
        title: "Technologies",
        icon: <FaProjectDiagram/>,
        link: '/tech'
    },
    {
        title: "Timeline",
        icon: <FaHistory/>,
        link: '/timeline'
    }
    ,{
        title: "Blog",
        icon: <FaInfo/>,
        link: '/blog'
    }
    ,{
        title: "Achievements",
        icon: <FaTrophy/>,
        link: '/achievements'
    },
    {
        title: "Contact",
        icon: <FaAddressCard/>,
        link: '/contact'
    }
]