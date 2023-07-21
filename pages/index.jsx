import Layout from './Components/Layout/layout'

import { Container } from 'react-bootstrap'
import { useState } from 'react'
import Portada from './Components/Portada/portada'



//Componente principal de Index donde se gestiona el estado de la portada y el layout.
const Index = () => {

    const [estado, setEstado] = useState(false)

    const handleEstado = () => {
        setEstado(true)
    }

    return (
        <>

            {estado
                ? <Layout  >
                    <Container className="contenedor-principal" fluid style={{ maxWidth: '100vw', maxHeight: '100vh', overflow: 'auto', border: '2px solid', msOverflowStyle: 'none' }}>
                        <h1>Hola</h1>
                        <h1>Hola</h1>
                        <h1>Hola</h1>
                        <h1>Hola</h1>
                        
                        
                    </Container>
                </Layout>
                : <Portada cambiarEstado={handleEstado} />
            }

        </>

    )
}


export default Index