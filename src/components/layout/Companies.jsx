import React from 'react'
import styled from 'styled-components'

const MyContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 48px;
   margin-top: 120px;
    & > a > img{
        height: 24px;
    }
`

const Companies = () => {
    return (
        <MyContainer className="container">
            <a href='#'><img src="/companies/google.png" alt="Google" /></a>
            <a href='#'><img src="/companies/slack.png" alt="Slack" /></a>
            <a href='#'><img src="/companies/atlassian.png" alt="Atlassian" /></a>
            <a href='#'><img src="/companies/dropbox.png" alt="Dropbox" /></a>
            <a href='#'><img src="/companies/shopify.png" alt="Shopify" /></a>
        </MyContainer>
    )
}

export default Companies