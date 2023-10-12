import musiccity from "../../assets/img/musiccity.jpg"
import CartWidget from "../CartWidget/CartWidget"



function NavBar () {
    return (
        <div className="menu">

            <img className="imgBrand" src={musiccity} alt="brand" />

            <ul>
                <li className="caja">Inicio</li>
                <li className="caja">Instrumentos</li>
                <li className="caja">Musica</li>
                <li className="caja">Ultimos ingresos</li>
            </ul>

            <CartWidget/>

        </div>
    )
}

export default NavBar