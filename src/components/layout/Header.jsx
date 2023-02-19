import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Button from '../styles/Button';
import NavButton from '../styles/NavButton';
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

const MyHeader = styled.header`
    display: flex;
    justify-content : space-between;
    align-items : center;
    padding-top: 55px;
    position : relative;
`

const Left = styled.div`
    display: flex;
    justify-content : flex-start;
    align-items : center;
    gap: 70px;
`

const Logo = styled.div`
display: flex;
align-items: center;
justify-content: center;
a{
    font-size: 20px;
    color: #fff;
    font-weight: 800;
}`


const Nav = styled.nav`
   @media screen and (max-width: 1151px) {
        position: absolute;
        background-color: #040c18;
        left: -100%;
        top: 0px;
        z-index: 1000;
        width: 100vw;
        height: 100vh;
        overflow: auto;
        transition: left 300ms ;
        &.open{
            left : 0%;
        }
        &.close{
            left: -100%;
        }
    }

    & ul{
        display: flex;
        justify-content : flex-start;
        align-items : center;
        gap: 45px;
        list-style: none;
        @media screen and (max-width: 1151px) {
            padding: 50px 0;
            flex-direction: column; 
        }
    }  
    
    & .mb{
        display: none;
        @media screen and (max-width: 1151px) {
            display: inline;
        }
    }
`

const CloseButton = styled.button`
    background: none;
    border: none;
    outline: none;
    color: #fff;
    font-size: 18px;
    position: absolute;
    right: 30px;
    top: 60px;
    cursor: pointer;
`

const Right = styled.div`
    display: flex;
    justify-content : flex-end;
    align-items : center;
    gap: 45px;
    @media screen and (max-width: 1151px) {
        display: none;
    }
    `
const RightMobile = styled.div`
    display : none;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1151px) {
        display: flex;
    }

`

const OpenButton = styled(CloseButton)`
    position: static;
    font-size : 20px;
    cursor: pointer;

`;

const MyEffect = styled.div`
    position: absolute;
    width: 1013px;
    height: 1013px;
    background: #002853;
    filter: blur(282px);
    left: 0;
    top: 0;
    transform: translate(-50%, -50%);
    z-index: -1;
    
`

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const openNav = () => { setIsNavOpen(true); document.body.style.overflow = 'hidden'; }
    const closeNav = () => { setIsNavOpen(false); document.body.style.overflow = 'unset'; }
    return (
        <>
            <MyHeader className="container">
                <Left >
                    <Logo className="logo"><a href="#">GPT-3</a></Logo>
                    <Nav id='nav' className={isNavOpen ? "open" : "close"}>
                        <ul><li><NavButton onClick={closeNav} className='active' as="a" href="#">Home</NavButton></li>
                            <li><NavButton onClick={closeNav} as="a" href="#">What is GPT?</NavButton></li>
                            <li><NavButton onClick={closeNav} as="a" href="#">Open AI</NavButton></li>
                            <li><NavButton onClick={closeNav} as="a" href="#">Case Studies</NavButton></li>
                            <li><NavButton onClick={closeNav} as="a" href="#">Library</NavButton></li>
                            <li><NavButton onClick={closeNav} className='mb' as="a" href="#">Sign In</NavButton></li>
                            <li><NavButton onClick={closeNav} className='mb' as="a" href="#">Sign Up</NavButton></li>
                            <li><CloseButton onClick={closeNav} className='mb'><AiOutlineClose /></CloseButton></li>
                        </ul>
                    </Nav>
                </Left>
                <Right>
                    <NavButton >Sign in</NavButton>
                    <Button as="a" href="#" fontSize="18px" fontWeigth="500" padding="16px 45px">Sign up</Button>
                </Right>
                <RightMobile className='mb' >
                    <OpenButton onClick={openNav}><GiHamburgerMenu /></OpenButton>
                </RightMobile>
                <MyEffect />
            </MyHeader>

        </>
    )
}

export default Header