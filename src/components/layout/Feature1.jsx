import React from 'react'
import styled from 'styled-components'
import Text from '../styles/Text'
import TextWithTopBar from '../styles/TextWithTopBar'

const MyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items : flex-start;
  gap: 140px;
  margin-top: 200px;
  position: relative;
  @media screen and (max-width: 1170px) {
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
    @media screen and (max-width: 1170px) {
      gap: 70px;
    }
  }

  .left {
    flex: 1;

    a{
      margin-top: 35px;
      display: inline-block;
    }
    @media screen and (max-width: 1170px) {
      h2{
        text-align: center;
      }
      a{
        display: block;
        text-align: center;
      }
      @media screen and (max-width: 700px) {
        h2{
          width: 100%;
          font-size: 25px;
          line-height: 35px;
        }
      }
    }
  }
  
  .right {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media screen and (max-width: 1170px) {
      flex-wrap: wrap;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      
      @media screen and (max-width: 700px) {
        gap: 50px;
      }
    }

    .row{
      display: flex;
      justify-content: space-between;
      align-items : flex-start;
      gap: 10px;

      h6{
        transform: translateY(7px);
      }

      p{
        width: 334px;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #81AFDD;
      }
      @media screen and (max-width: 700px) {
        flex-direction: column;
        align-items: flex-start;
        h6{
          width: 100%;
          font-size: 16px;
        }
        p{
          width: 100%;
        }
      }
    }
  }

  .effect{
    width: 777px;
    height: 777px;
    position: absolute;
    left: 0px;
    top: 50%;
    background: #07325F;
    filter: blur(282px);
    transform: translate(-75%, -50%);
    z-index: -1;
  }
`

const Feature = () => {
  return (
    <MyContainer className="container">
      <div className="left">
        <Text width="425" fontSize="34" lineHeight="45" letterSpacing="0">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</Text>
        <Text as="a" href="#" fontSize="16" lineHeight="30" fontWeight="500" letterSpacing="0">Request Early Access to Get Started</Text>
      </div>
      <div className="right">
        <div className="row">
          <TextWithTopBar as="h6" fontSize="18" lineHeight="24" width="180" letterSpacing="0.04">Improving end distrusts instantly</TextWithTopBar>
          <p>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.</p>
        </div>
        <div className="row">
          <TextWithTopBar as="h6" fontSize="18" lineHeight="24" width="180" letterSpacing="0.04">Become the tended active</TextWithTopBar>
          <p>Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
        </div>
        <div className="row">
          <TextWithTopBar as="h6" fontSize="18" lineHeight="24" width="180" letterSpacing="0.04">Message or am nothing</TextWithTopBar>
          <p>Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.</p>
        </div>
        <div className="row">
          <TextWithTopBar as="h6" fontSize="18" lineHeight="24" width="180" letterSpacing="0.04">Really boy law county</TextWithTopBar>
          <p>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.</p>
        </div>
      </div>

      <div className="effect"></div>
    </MyContainer>
  )
}

export default Feature