
import Navbara from '../../layout/Navbar/Navbara'
import Footer from '../../layout/Footer/Footer'
import Inicio from '../../layout/Inicio/Inicio'
import Mostruario from '../../layout/Mostruario/Mostruario'
import '../../Style/Site.css'

export const Home = () => {
    return (
        <div className='fundo'>
            <Navbara />
            <Inicio />
            <Mostruario />
            <Footer />
        </div>
    )


}
