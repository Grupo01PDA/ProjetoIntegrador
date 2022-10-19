import "./index.css";

function BarraLateral(){
  return(
    <aside class="barra-lateral">
      <ul class="lista">
        <li><a href="/">Perfil</a></li>
        <li><a href="/cadastro">Cadastro</a></li>
        <li><a href="/">Grupos</a></li>
        <li><a href="/">Provas anteriores</a></li>
        <li><a href="/">Simulados</a></li>
        <li><a href="/">Gabaritos</a></li>
        <li><a href="/">Encontre um Professor</a></li>
      </ul>
    </aside>
  )
}

export default BarraLateral;