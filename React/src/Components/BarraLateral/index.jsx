import "./index.css";

function BarraLateral(){
  return(

    <aside className="barra-lateral">
    
      <div className="lista">
        
        <li><h3 href="/usuario">Perfil</h3></li>
        <li><h3 href="/">Comunidade</h3></li>
        <li><h3 target="_blank" rel="noreferrer" href="https://discord.com/channels/1032357491792687145/1032357492413440111">Grupos</h3></li>
      </div>
    </aside>
  )
}

export default BarraLateral;