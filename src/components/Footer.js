import React from 'react'
import styled from "styled-components"
function Footer(){
    
    return(
        <FooterContainer>
            <TextItem>
                Tesla © 2022
            </TextItem>
            <TextItem>
                Privacy & Legal
            </TextItem>
            <TextItem>
                Vehicle Recalls
            </TextItem>
            <TextItem>
                Contact
            </TextItem>
            <TextItem>
                Careers
            </TextItem>
            <TextItem>
                News
            </TextItem>
            <TextItem>
                Engage
            </TextItem>
            <TextItem>
                Locations
            </TextItem>
        </FooterContainer>
    )

}export default Footer;

const FooterContainer = styled.div`
width: 100%;
padding: 0 0 2.5rem 0;
display: flex;
justify-content: center;
flex-wrap: wrap;
align-items: center;
@media(max-width: 600px){
    padding: 0 0 1.5rem 0;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
}
`
const TextItem = styled.a`
cursor: pointer;
margin: 0.2rem 0.7rem;
`