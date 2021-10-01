import Link from 'next/link'
import { FcHome } from 'react-icons/fc';
import { Container, Col, Row, Nav, Navbar } from 'react-bootstrap'
import { BsCodeSlash } from 'react-icons/bs'
import { RiCodeSLine } from 'react-icons/ri'
import { MdContactMail } from 'react-icons/md'


const Navegacion = () => {

    {/**Caracteristicas de la fuente de navegacion */ }
    let font = {
        fontFamily: 'Tangerine',
        fontSize: '2.75vw',

    }


    return (
        <>
            {/**Barra de navegación */}
            <Navbar bg="primary" expand="md" style={font} >
                <Container fluid>
                    <Navbar.Brand>
                        <Col>
                            <Link href="/">
                                <a style={font}>
                                    <FcHome title="Inicio"></FcHome> Home
                                </a>
                            </Link>
                        </Col>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="mr-auto">
                           
                            <Link href="/portafolio">

                                <a >
                                    <RiCodeSLine style={{marginRight: '12px'}}/>
                                        Portfolio
                                    <BsCodeSlash style={{marginLeft: '12px'}}/>

                                </a>
                            </Link>


                            <Link href="/contact">

                                <a>
                                    Contacto
                                    <MdContactMail style={{ marginLeft: '12px' }} />
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
                    margin: 3px;
                    text-decoration: none;
                    color: white;
                    
                }

            `}
            </style>
        </>
    )
}
export default Navegacion