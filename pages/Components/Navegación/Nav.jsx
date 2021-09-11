import Link from 'next/link'
import { FcHome } from 'react-icons/fc';
import { Container, Col, Row, Nav, Navbar } from 'react-bootstrap'
import {  BsCodeSlash } from 'react-icons/bs'
import { MdContactMail } from 'react-icons/md'


const Navegacion = () => {

    {/**Caracteristicas de la fuente de navegacion */ }
    let font = {
        fontFamily: 'Tangerine',
        fontSize: '2.5vw',

    }


    return (
        <>
            {/**Barra de navegación */}
            <Navbar bg="primary" expand="md" style={font} >
                <Container  fluid>
                    <Navbar.Brand>
                        <Col>
                            <Link href="/">
                                <a >
                                    <FcHome title="Inicio"></FcHome> Home
                                </a>
                            </Link>
                        </Col>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="mr-auto">
                            <Link href="/Portafolio">
                                <a >
                                    Portfolio
                                    <BsCodeSlash />
                                </a>
                            </Link>


                            <Link href="/Contact">

                                <a>
                                    Contacto
                                    <MdContactMail />
                                </a>


                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >

            <style jsx >{`
                a{
                    height: 50px;
                    text-align: center;
                    margin: 30px;
                    text-decoration: none;
                    color: white;
                },


            `}
            </style>
        </>
    )
}
export default Navegacion