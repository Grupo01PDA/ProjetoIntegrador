import Header from "../../Components/Header";
import Footer from "../../Components/Footer"
import BarraLateral from "../../Components/BarraLateral";
import Post from "../../Components/Post"
import Posts from "../../Components/Posts"
import "./index.css";

function PaginaInicial(){
  return(
    <div>
      <Header />
      <main className="mainHome">
        <BarraLateral />
        <div className="feed">
          <Post />
          <Posts />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PaginaInicial;