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
    margin-top: 150px;

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