import { Container } from 'react-bootstrap/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

//Footer donde tendré las redes sociales y otros enlaces
const Footer = () => {


    return (
        <Container fluid style={{ position: 'absolute', bottom: 0 }} >
            <div className='footer'>

                <a href="https://www.instagram.com/scailancrei/" target="_blank"><FontAwesomeIcon icon={faInstagram} style={{ width: '35%' }} /></a>
                <a href="https://twitter.com/ScaiLanCrei" target="_blank"><FontAwesomeIcon icon={faTwitter} style={{ width: '35%' }} /></a>
                <a href="https://www.linkedin.com/in/scailancrei61b178176/" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={{ width: '35%' }} /></a>

                <style jsx>{`
                .footer{
                    height: 10%;
                    display: flex;
                    background-color: #A2DBFA;
                    
                    justify-content: center;
                    align-items: center;
                    
                }
                .faInstagram{
                    margin: 30px;
                }
                a{
                    max-width: 35%;
                    margin-right: 10%;
                    color: #053742;
                }
                a:hover{
                    color: #0f6ac7;
                }
                

            `}</style>

            </div>
        </Container>
    )



}

export default Footer