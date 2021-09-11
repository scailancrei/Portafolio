import 'bootswatch/dist/darkly/bootstrap.min.css'
import Navegacion from '../Navegación/Nav'
import Head from '../../head'
import Footer from '../Footer/footer'

const Layout = ({ children }) => {
    return (
        <main>
            <Head />
            <Navegacion/>
            {children}
            <Footer/>
        </main>
    )
}




export default Layout