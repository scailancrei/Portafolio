import Layout from './Components/Layout/layout'
import Image from 'next/image'
import styled, { keyframes } from 'styled-components';
import { bounceIn, fadeInLeft } from 'react-animations';
import { Container, Button } from 'react-bootstrap'
import { useState } from 'react'


const bounceAnimation = keyframes`${bounceIn}`

const BouncyDiv = styled.div`
    animation: 2s ${bounceAnimation};
    `

const fadeInAnimation = keyframes`${fadeInLeft}`

const FadeDiv = styled.div`
    animation: 5s ${fadeInAnimation};
    animation-delay: 3;
  `




//La portada de la web al entrar
//Si se pulsa el botón de entrar cambia el estado de la portada a false y entramos en el layout
const Portada = ({ cambiarEstado }) => {

    return (

        <Container fluid style={{ display: 'flex', justifyContent: 'space-around' }}>
            
                <FadeDiv>
                    <Image src={'/mi foto.jpg'} width={'100px'} height={'100px'} ></Image>
                </FadeDiv>
            
            <BouncyDiv>
                <h1>Hola me llamo Juan Antonio Pérez Lores</h1>
                <p>Tengo 25 años y soy de Almería.</p>

                <Button variant="primary" onClick={cambiarEstado}>Entrar</Button>
            </BouncyDiv>



        </Container>


    )
}


//Componente principal de Index donde se gestiona el estado de la portada y el layout.
const Index = () => {

    const [estado, setEstado] = useState(false)

    const handleEstado = () => {
        setEstado(!estado)
    }

    return (
        <>

            {estado
                ? <Layout />
                : <Portada cambiarEstado={handleEstado} />
            }



        </>

    )
}


export default Index