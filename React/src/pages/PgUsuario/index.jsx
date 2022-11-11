import Header from "../../Components/Header";
import EditPErfil from "../../Components/EditPErfil";
import Footer from "../../Components/Footer"
import UsuariosFeed from "../../Components/UsuarioFeed";
import EmptyUser from "../../Components/EmptyUser"


function PgUsuario() { 

    return(
        <div>
            <Header />
            <EditPErfil />
            <UsuariosFeed />
            <EmptyUser />
            <Footer />
        </div>
    )
}
export default PgUsuario;
