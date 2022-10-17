import Header from "../../Header";
import EditPErfil from "../EditPErfil";
import Usuarios_Feed from "../Usuario_Feed/index";
import Empty from "../../Empty";
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
