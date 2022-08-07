import React from "react";
import Link from "next/link";
import styled from "styled-components";
// import LogoIMG from "../../public/logo192.png";

export default function Header() {
    return(
        <SContainer> 
            {/* <SLogo src={ LogoIMG } alt = 'Logo'></SLogo> */}
            <SNav>
                <Sul> 
                    <Sli>
                        <SLink href="/">Home</SLink>
                        <SLink href="/About">About</SLink>
                        <SLink href="/Contact">Contact</SLink>
                    </Sli>
                </Sul>
            </SNav>
        </SContainer>
    )
}

const SContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    background-color: #f6efdb;
    border-bottom: 2px solid dimgray;
    // margin-botom: 50px;
    // justify-content:flex-end
`

// const SLogo = styled.img`
//     float: left;
//     height: 80px;
//     // justify-self: flex-start;
//     // position: sticky;
//     // z-index: 2;
//     // display: flex;
// `
const SNav = styled.nav`
    display: flex;
    text-transform: uppercase;
    justify-contet: center;
    position: sticky;
    z-index: 1;
    // opacity: 0.9
`

const Sul = styled.ul`
    display: flex;
    justify-content: flex-end;
    list-style: none;
    // margin-right:30px;
    // opacity: 0.5;
`

const Sli = styled.li`
    // display: inline;
    // padding: 0 10px;
    margin:10px;
`

const SLink = styled(Link)`
    color: #778899;
    padding:30px;
    // margin: 100px
    font-size: 24px;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        opacity:0.5;
    }
`