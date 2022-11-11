import "./index.css";

function UsuariosFeed(){
    return(
        <nav className="posts_etc">
            <button id="posts" className="postagens btnActive">
                <svg className="posts-svg" width="34" height="34" viewBox="0 0 34 34" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="14" height="14" stroke="#0F0F0F" />
                    <rect x="19.5" y="0.5" width="14" height="14" stroke="#0F0F0F" />
                    <rect x="0.5" y="19.5" width="14" height="14" stroke="#0F0F0F" />
                    <rect x="19.5" y="19.5" width="14" height="14" stroke="#0F0F0F" />
                </svg>
                <span className="userInputs">Meus posts</span>
            </button>
           
         
        </nav>
    )
}

export default UsuariosFeed;