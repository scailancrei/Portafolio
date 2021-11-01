import Layout from './Components/Layout/layout'
import Image from 'next/image'
import styled, { keyframes } from 'styled-components';
import { bounceIn, fadeInLeft } from 'react-animations';
import { Button, Container } from 'react-bootstrap'
import { useState } from 'react'
import {RiDoorOpenFill} from 'react-icons/ri'


//Componente del efecto rebotar para la presentación
const bounceAnimation = keyframes`${bounceIn}`

const BouncyDiv = styled.div`
    animation: 2s ${bounceAnimation};
    `

//Componente del efecto deslizante para la foto y ponerle un borde redondo
const fadeInAnimation = keyframes`${fadeInLeft}`

const FadeDiv = styled.div`
margin-right: 5vw;
margin-left: 5vw;
animation: 5s ${fadeInAnimation};
animation-delay: 3;

.imagen{
    border-radius: 50%;   
}
`




//La portada de la web al entrar
//Si se pulsa el botón de entrar cambia el estado de la portada a false y entramos en el layout
const Portada = ({ cambiarEstado }) => {

    return (
        <div className="bg-img">
            <FadeDiv>
                <Image className="imagen" src={'/mi foto.jpg'} width={'200px'} height={'200px'} />
            </FadeDiv>

            <BouncyDiv>
                <h1 >Hola me llamo Juan Antonio Pérez Lores 👋</h1>
                <h3>Soy Desarrollador Web. 👨‍💻</h3>
                
                 <Button style={{ position: 'relative', fontSize: '25px' }} variant="primary" onClick={cambiarEstado}><RiDoorOpenFill style={{ marginRight: '5px'}}/>Entrar</Button>
            </BouncyDiv>

            <style jsx>{`
                
                .bg-img{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    position: relative;                    
                }

                .bg-img::before{
                    opacity: 0.25;
                    content: "";
                    position: absolute;
                    background-repeat: no-repeat;
                    background-image: url('/fondo.jpg');
                    background-size: cover;
                    background-position: top center;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;

                }
                `}</style>
        </div>



    )
}


//Componente principal de Index donde se gestiona el estado de la portada y el layout.
const Index = () => {

    const [estado, setEstado] = useState(false)

    const handleEstado = () => {
        setEstado(true)
    }

    return (
        <>
            
            {estado
                ? <Layout />
                : <Portada cambiarEstado={handleEstado} />
            }
            

            <Container fluid style={{ marginTop: '4%',maxWidth: '100vh' , maxHeight: '35vh', overflow: 'auto', border: '2px solid', msOverflowStyle: 'scrollbar'}}>
            <h1>Hola</h1>
            <h1>Hola</h1>
            <h1>Hola</h1>
            <h1>Hola</h1>
            <h1>Hola</h1>
            <h1>Hola</h1>
            <h1>Hola</h1>
            <h1>Hola</h1>
            <h1>Hola</h1>
            <h1>Hola</h1>
            <h1>Hola</h1>
            <h1>Hola</h1>
            <h1>Hola</h1>
            <h1>Hola</h1>

            <h1>Hola</h1>
            <h1>Hola</h1>
            <h1>Hola</h1>
            <h1>Hola</h1>
            <h1>Hola</h1>

            
            <h1>UWU</h1>
            </Container>


        </>

    )
}


export default Index