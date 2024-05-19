import React from 'react'
import styled from "styled-components"
import Section from './Section'
import Footer from './Footer'
function Home() {
  return (
    <Container>
        <Section
        title="Model 3"
        id="Model_3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        />
        <Section
        title="Model Y"
        id="Model_Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        />
        
        <Section
        title="Model S"
        id="Model_S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        />
        <Section
        title="Model x"
        id="Model_X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        />
        <Section
        title="Solar Panels"
        id="Solar_Panel"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
        />
        <Section
        title="Solar Roof"
        id="Solar_Roofs"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
        />
        <Section
        title="Accessories"
        id="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop now"
  />
      <Footer/>
     </Container>
  )
}
export default Home


const Container = styled.div`
width: 100%;
height: 100vh;
box-sizing: border-box;
`

