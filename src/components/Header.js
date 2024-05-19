import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Header() {
    const[burgerStatus, setBurgerStatus]=useState(false);
function showSideBar(){
    setBurgerStatus(!burgerStatus)
}
  return (
    <Container>
        <a href="#">
            <img src='/images/logo.svg' alt='' />
        </a>
        <Menu>
        <a href='#Model_S'>Model S</a>            
        <a href='#Model_3'>Model 3</a>
        <a href='#Model_X'>Model X</a>
        <a href='#Model_Y'>Model Y</a>
        <a href='#Solar_Panel'>Solar Panel</a>
        <a href='#Solar_Roofs'>Solar Roofs</a>
        </Menu>
        <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={showSideBar}/>
        </RightMenu>
        <BurgerNav show={burgerStatus}>
            <CloseWrapper>
            <CustomClose onClick={showSideBar}/>
            </CloseWrapper>
            <li><a onClick={showSideBar} href='#Model_S'>Model S</a></li>            
            <li><a onClick={showSideBar} href='#Model_3'>Model 3</a></li>
            <li><a onClick={showSideBar} href='#Model_X'>Model X</a></li>
            <li><a onClick={showSideBar} href='#Model_Y'>Model Y</a></li>
            <li><a onClick={showSideBar} href='#Solar_Panel'>Solar Panel</a></li>
            <li><a onClick={showSideBar} href='#Solar_Roofs'>Solar Roofs</a></li>
            <li><a onClick={showSideBar} href='#Accessories'>Accessories</a></li>
            <li><a onClick={showSideBar} href='#'>Shop</a></li>
            <li><a onClick={showSideBar} href='#'>Tesla Account</a></li>
        </BurgerNav>
    </Container>
  )
}
export default Header

const Container = styled.div`

min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
top: 0;
left: 0;
right: 0;
z-index: 1;
transparent: ;
`
const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
}
@media(max-width: 1100px){
    display: none;
}
`
const RightMenu=styled.div`
display: flex;
align-items: center;
a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 10px;
}
@media(max-width: 400px){
    a{
        display: none;
    }
}
`
const CustomMenu = styled(MenuIcon)`
cursor: pointer;

`
const BurgerNav = styled.div`
position: fixed;
top:0;
bottom: 0;
right: 0;
background: white;
width: 300px;
z-index: 16;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
transition: transform 0.2s ease-in;
    li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2 );
    a{
        font-weight: 600;
    }
}
`
const CustomClose = styled(CloseIcon)`
cursor: pointer;
`
const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
`
