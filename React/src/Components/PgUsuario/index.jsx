import Header from "../Header";
import EditPErfil from "../PgUsuario/EditPErfil";
import Usuarios_Feed from "./PostsUsuario_Feed/index";
import Empty from "../Empty"
import Footer from "./Footer"


function PgUsuario() { 
    return(
       <div> 
    <Header/>
    <EditPErfil/>
    <Usuarios_Feed/>
    <Empty/>
    <Footer/>
</div>

);
}
export default PgUsuario;
