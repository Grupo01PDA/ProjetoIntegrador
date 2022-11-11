import "./index.css";

function Search(){
  return(
    <div className="pesquisa">
        <div className="divBusca">
            <input type="text" className="txtBusca" placeholder="O que gostaria de saber..." />
            <button className="lupa">
                <svg width="20" height="20" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M30.2388 16.343C30.2388 25.1222 23.5531 32.186 15.3694 32.186C7.18575 32.186 0.5 25.1222 0.5 16.343C0.5 7.56377 7.18575 0.5 15.3694 0.5C23.5531 0.5 30.2388 7.56377 30.2388 16.343Z"
                        stroke="#0F0F0F" />
                    <line y1="-0.5" x2="21.3975" y2="-0.5"
                        transform="matrix(-0.685076 -0.728472 0.685076 -0.728472 42 42)" stroke="#0F0F0F" />
                </svg>
            </button>
        </div>
    </div>
  )
}

export default Search

