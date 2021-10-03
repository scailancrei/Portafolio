import 'bootswatch/dist/darkly/bootstrap.min.css'
import Image from 'next/image'
import Navegacion from '../Navegación/Nav'
import Head from '../../head'
import Footer from '../Footer/footer'
import { Container } from 'react-bootstrap'

const Layout = ({ children }) => {
    return (
        <main>
            <Head />
            <Navegacion />
            <div id="main-container">
                <Container >
                    {children}
                </Container>

            </div>


            <Footer />

            <style jsx>{`

            
        
            #main-container{
                height: 100%;
                display: grid;
                grid-template-columns: repeat(1, 50%);
                
                background-image: url('/fondo.jpg');
                
            }

            `}</style>

        </main>



    )
}




export default Layout