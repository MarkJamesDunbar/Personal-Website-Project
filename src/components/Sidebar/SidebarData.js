import React from 'react'
import { FaHome, FaFlask, FaProjectDiagram, FaHistory, FaFeather, FaTrophy, FaAddressCard } from 'react-icons/fa';

export const SidebarData = [
    {
        title: "Home",
        icon: <FaHome/>,
        link: '/'
    },
    {
        title: "Projects",
        icon: <FaFlask/>,
        link: '/projects'
    },
    {
        title: "Tech",
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
        icon: <FaFeather/>,
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