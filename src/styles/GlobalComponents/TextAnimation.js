import React, { useEffect, useState } from "react"
import { useInterval } from "react-use"
import styled, { keyframes } from "styled-components"

export default function TextAnimation() {
    
    const gitArray =        "Git      ".split("")
    const sqlArray =        "SQL      ".split("")
    const cssArray =        "CSS      ".split("")
    const nodeArray =       "Node     ".split("")
    const htmlArray =       "HTML     ".split("")
    const jsonArray =       "JSON     ".split("")
    const restArray =       "REST     ".split("")
    const yarnArray =       "Yarn     ".split("")
    const flaskArray =      "Flask    ".split("")
    const reactArray =      "React    ".split("")
    const pandasArray =     "Pandas   ".split("")
    const nextjsArray =     "NextJS   ".split("")
    const chartjsArray =    "ChartJS  ".split("")
    const bootstrapArray =  "Bootstrap".split("")
    


    const [items,setItems] = useState(reactArray)
    const [count, setCount] = useState(1)
    const [play, setPlay] = useState(false)

    useInterval(() => {
        if (count == 0) {
            console.log(count)
            setItems(gitArray)
            setCount(1)
            }
        else if (count == 1) {
            console.log(count)
            setItems(sqlArray)
            setCount(2)
            }
        else if (count == 2) {
            console.log(count)
            setItems(cssArray)
            setCount(3)
            }
        else if (count == 3) {
            console.log(count)
            setItems(nodeArray)
            setCount(4)
            }
        
        else if (count == 4) {
            console.log(count)
            setItems(htmlArray)
            setCount(5)
            }
        else if (count == 5) {
            console.log(count)
            setItems(jsonArray)
            setCount(6)
            }
        else if (count == 6) {
            console.log(count)
            setItems(restArray)
            setCount(7)
            }
        else if (count == 7) {
            console.log(count)
            setItems(yarnArray)
            setCount(8)
            }
        else if (count == 8) {
            console.log(count)
            setItems(flaskArray)
            setCount(9)
            }
        else if (count == 9) {
            console.log(count)
            setItems(reactArray)
            setCount(10)
            }
        else if (count == 10) {
            console.log(count)
            setItems(pandasArray)
            setCount(11)
            }
        else if (count == 11) {
            console.log(count)
            setItems(nextjsArray)
            setCount(12)
            }
        else if (count == 12) {
            console.log(count)
            setItems(chartjsArray)
            setCount(13)
            }
        else if (count == 13) {
            console.log(count)
            setItems(bootstrapArray)
            setCount(0)
            }
        },
        play ? 6000 : null
    )

    useEffect(() => {
        const timer = setTimeout(() => {
            setItems(gitArray)
            setCount(2)
            setPlay(true)
        }, 4000)

        return() => clearTimeout(timer)
    }, [])

    return ( 
        <Wrapper>I work with <br/><br/> {items.map((item, index) => (<span key={index}>{item}</span>))}</Wrapper>
    )
}

const animation = keyframes`
    0% { opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(12px); }
    50% { opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px); }
    100% { opacity: 0; transform: translateY(100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(12px); }
`
const Wrapper = styled.h2`
    display: inline-block;
    font-size: 50pt;
    font-weight: 800;
    padding-bottom: 5px;
    padding-top: 5px;
    width: fit-content;
    overflow: visible;
    max-width: 100%;
    font-family: 'Permanent Marker';
    color: #515152;
    
    span {
    display: inline-block;
    font-size: 70pt;
    color: white;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    span:nth-child(1) {
        animation-delay: 0.1s;
    }
    span:nth-child(2) {
        animation-delay: 0.2s;
    }
    span:nth-child(3) {
        animation-delay: 0.3s;
    }
    span:nth-child(4) {
        animation-delay: 0.4s;
    }
    span:nth-child(5) {
        animation-delay: 0.5s;
    }
    span:nth-child(6) {
        animation-delay: 0.6s;
    }
    span:nth-child(7) {
        animation-delay: 0.7s;
    }
    span:nth-child(8) {
        animation-delay: 0.8s;
    }
    span:nth-child(9) {
        animation-delay: 0.9s;
    }
    span:nth-child(10) {
        animation-delay: 1s;
    }
`