import Header from "../Header";
import Footer from "../Footer"
import BarraLateral from "../BarraLateral";
import Empty from "../Empty"
import "./index.css";

function PaginaInicial(){
  return(
    <div>
      <Header />
      <main>
        <BarraLateral />
        <div className="feed">
          <Empty />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PaginaInicial;