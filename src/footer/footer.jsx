import React from "react";
import styled from "styled-components";


export const Footer = () => {
    return(
        <SWrapper>
            <SText>©2022 Yoshihiro Netsu</SText>
        </SWrapper>
    )
}

const SWrapper = styled.div`
    background-color: #432;
    text-align: center;
    padding: 26px 0;
`

const SText = styled.p`
    color: #fff;
    font-size: 20px;
`