import 'bootswatch/dist/darkly/bootstrap.min.css'
import Navegacion from '../Navegación/Nav'
import Head from '../head'
import Footer from '../Footer/footer'


//Si el estado inicial es true se muestra la presentación de la web
//Si el estado inicial es false entra en el index.
const Layout = ({ children }) => {

    return (

        <main>
            <Head />
            <Navegacion />
            <div className="main-container">
                {children}
            </div>
            <Footer />

            <style jsx>{`

            .main-container{
                display: grid;
                grid-template-columns: repeat(1fr, 50%);
                max-height: 100vh;
                
            }

            .main-container::after{
                content: "";
                background-image: url('/fondo.jpg');
                background-repeat: no-repeat;               
                opacity: 0.2;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                position: absolute;
                z-index: -1;   
            }

            `}</style>

        </main>



    )
}




export default Layout