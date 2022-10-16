import Header from "../Header";
import EditPErfil from "../PgUsuario/EditPErfil";
import Usuarios_Feed from "./Usuario_Feed/index";
import Empty from "../Empty";
import Footer from "../Footer";
import { Fragment } from "react";

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
