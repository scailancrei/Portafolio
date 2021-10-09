import Layout from './Components/Layout/layout'
import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';
import { Container, Button } from 'react-bootstrap'
import { useState } from 'react'



const Index = () => {

    const [estado, setEstado] = useState(true)
    const bounceAnimation = keyframes`${bounceIn}`

    const BouncyDiv = styled.div`
      animation: 3s ${bounceAnimation};`


    function Portada() {
        return (
            <BouncyDiv>
                <Container fluid style={{ textAlign: 'center', margin: '20px' }}>
                    <h1>Hola me llamo Juan Antonio Pérez Lores</h1>
                    <p>Tengo 25 años y soy de Almería.</p>
                    <Button variant="primary" onClick={() => setEstado(!estado)}>Entrar</Button>
                </Container>
            </BouncyDiv>

        )
    }


    return (
        <>



            {estado
                ? <Portada />
                : <Layout />
            }



        </>

    )
}


export default Index