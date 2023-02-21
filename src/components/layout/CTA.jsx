import React from 'react'
import styled from 'styled-components'

const MyContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 11px;
    padding: 45px;
    margin: 150px auto 0 auto;


    @media screen and (max-width: 1200px) {
        margin: 150px 20px 0 20px;
        flex-direction: column;
        align-items: flex-start;
        gap: 50px;
        @media screen and (max-width: 700px) {
            margin: 100px 20px 0 20px;
            padding: 40px 30px;
        }
    }

    .left{
        p{
            font-weight: 500;
            font-size: 12px;
            line-height: 30px;
            color: #0E0E0E;
        }
        h6{
            font-weight: 800;
            font-size: 24px;
            line-height: 45px;
            color: #000000;
            @media screen and (max-width: 1170px) {
                line-height: normal;
            }
        }
    }

    .right{
        button{
            font-weight: 700;
            font-size: 18px;
            line-height: 30px;
            color: #FFFFFF;
            border: 1px solid #000;
            background-color: #000;
            outline: none;
            padding: 13px 45px;
            border-radius: 40px;
            cursor: pointer;
            transition: background-color 0.2s;
            white-space: nowrap;
            &:hover{
                background-color: #000000a4;
            }
        }
    }
`

const CTA = () => {
    return (
        <MyContainer className="container">
            <div className="left">
                <p>Request Early Access to Get Started</p>
                <h6>Register today & start exploring the endless possiblities.</h6>
            </div>
            <div className="right"><button>Get Started</button></div>
        </MyContainer>
    )
}

export default CTA