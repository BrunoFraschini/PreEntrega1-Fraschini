import Greeting from "../Greeting/Greeting"

function ItemListContainer () {

    const TituloApp = "MUSIC CITY"
    const BienvenidaApp = "Bienvenido a Music city, la mejor tienda online de musica del pais."

    return (
        <Greeting titulo={TituloApp} bienvenida={BienvenidaApp}/>
    )
}

export default ItemListContainer