import { Container } from 'react-bootstrap/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

//Footer donde tendré las redes sociales y otros enlaces
const Footer = () => {


    return (
        //Contenedor del footer, con una posicion absolute y 0 abajo
        // Dentro del div footer, una lista con los elementos de las redes con un ancho del 35% del espacio para cada enlace
        <Container fluid style={{ position: 'absolute', bottom: 0 }} >
            <div className='footer'>

                <li>
                    <a href="https://www.instagram.com/scailancrei/" target="_blank"><FontAwesomeIcon icon={faInstagram} style={{ width: '35%' }} /></a>
                </li>
                <li>
                    <a href="https://twitter.com/ScaiLanCrei" target="_blank"><FontAwesomeIcon icon={faTwitter} style={{ width: '35%' }} /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/scailancrei61b178176/" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={{ width: '35%' }} /></a>
                </li>



                <style jsx>{`
                .footer{
                    box-sizing: border-box;
                    border-top: 1px solid  #0f6ac7;                    
                    max-height: 100vh;
                    display: grid;
                    grid-template-columns: repeat(3, 15%); /**Un grid basado en 3 columnas al que se le otorga un 15% de ancho */
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                    
                    
                },
                li{                    
                    list-style-type: none;
                },
                a{
                    text-align: center;
                    font-size: 70px;
                    color: #0f6ac7;
                    text-decoration: none;
                    opacity: 2;
                }
                a:hover{
                    color: #2e314b;
                }
                

            `}</style>

            </div>
        </Container>
    )



}

export default Footer