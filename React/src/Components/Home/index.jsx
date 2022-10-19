import Header from "../../Components/Header";
import Footer from "../../Components/Footer"
import BarraLateral from "../../Components/BarraLateral";
import Empty from "../../Components/Empty"
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