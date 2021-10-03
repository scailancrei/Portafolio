import Link from 'next/link'
import { FcHome } from 'react-icons/fc';
import { Container, Col, Row, Nav, Navbar } from 'react-bootstrap'
import { BsCodeSlash } from 'react-icons/bs'
import { RiCodeSLine } from 'react-icons/ri'
import { MdContactMail } from 'react-icons/md'


const Navegacion = () => {

    {/**Caracteristicas de la fuente de navegacion */ }
    let font = {
        fontFamily: 'Tangerine'
    }


    return (
        <>
            {/**Barra de navegación */}
            <Navbar  collapseOnSelect bg="primary" expand="md" style={font} >
                <Container fluid>
                    <Navbar.Brand>

                        <Link href="/">
                            <a style={font}>
                                <FcHome title="Inicio"></FcHome> Home
                            </a>
                        </Link>
                    </Navbar.Brand>


                    <Navbar.Toggle  aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse  as="nav" id="responsive-navbar-nav" className="justify-content-end">
                        <Link href="/portafolio">
                            <a >
                                <RiCodeSLine style={{ marginRight: '10px' }} />
                                Portfolio
                                <BsCodeSlash style={{ marginLeft: '10px' }} />
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a>
                                Contacto
                                <MdContactMail style={{ marginLeft: '12px' }} />
                            </a>
                        </Link>
                    </Navbar.Collapse>
                </Container>

                <style jsx>{`
                *{
                    font-size: 2em;
                }
                a{
                    height: 50px;
                    text-align: center;
                    margin: 6px;
                    text-decoration: none;
                    color: white;
                    
                }
                a:hover{
                    opacity: 0.6;

                }
                /**Media query para pantallas de 600px o mas pequeñas */
                @media only screen and (max-width: 600px) { 
                    * {
                        font-size: 6vw;
                    }
                    
                  }
            `}
                </style>
            </Navbar >


        </>
    )
}
export default Navegacion