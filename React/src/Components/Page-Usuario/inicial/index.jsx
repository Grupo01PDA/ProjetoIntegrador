import Header from "../../Header";
import EditPErfil from "../PgUsuario/EditPErfil";
import Usuarios_Feed from "../Usuario_Feed/index";
import Empty from "../../Empty";
import './index.css'
// import Footer from "../Footer";

function PgUsuario() { 
    return(
       <div> 
    <Header/>
    <EditPErfil/>
    <Usuarios_Feed/>
    <Empty/>
       </div>

);
}
export default PgUsuario;
