import "./index.css";

function BarraLateral(){
  return(
    <aside class="barra-lateral">
      <div class="lista">
        <li><a href="/usuario">Perfil</a></li>
        <li><a href="/">Comunidade</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://discord.com/channels/1032357491792687145/1032357492413440111">Grupos</a></li>
      </div>
    </aside>
  )
}

export default BarraLateral;