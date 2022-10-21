import "./index.css";

function UsuariosFeed(){
    return(
        <nav class="posts_etc">
            <button id="posts" class="postagens btnActive">
                <svg class="posts-svg" width="34" height="34" viewBox="0 0 34 34" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="14" height="14" stroke="#0F0F0F" />
                    <rect x="19.5" y="0.5" width="14" height="14" stroke="#0F0F0F" />
                    <rect x="0.5" y="19.5" width="14" height="14" stroke="#0F0F0F" />
                    <rect x="19.5" y="19.5" width="14" height="14" stroke="#0F0F0F" />
                </svg>
                <span className="userInputs">Meus posts</span>
            </button>
            <button id="salvos" class="salvos">
                <svg class="salvos-svg" width="28" height="36" viewBox="0 0 28 36" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.5" y1="0.500488" x2="26.9438" y2="0.500488" stroke="#0F0F0F"
                        stroke-linecap="round" />
                    <path d="M1.1875 34.9996L1.1875 0.999976" stroke="#0F0F0F" stroke-linecap="round" />
                    <path d="M1.1875 34.9994L14.2231 21.9638" stroke="#0F0F0F" stroke-linecap="round" />
                    <path d="M27.2563 35L27.2563 1.00034" stroke="#0F0F0F" stroke-linecap="round" />
                    <path d="M27.2563 34.9996L14.2208 21.9641" stroke="#0F0F0F" stroke-linecap="round" />
                </svg>
                <span className="userInputs">Salvos</span>
            </button>
            <button id="provas" class="gabaritos">
                <svg class="provas-svg" width="23" height="34" viewBox="0 0 23 34" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="21.6667" height="33" stroke="#0F0F0F" />
                    <line x1="2.6792" y1="4.44543" x2="20.1943" y2="4.44543" stroke="#0F0F0F" />
                    <line x1="2.6792" y1="8.56665" x2="20.1943" y2="8.56665" stroke="#0F0F0F" />
                    <line x1="2.6792" y1="12.6879" x2="20.1943" y2="12.6879" stroke="#0F0F0F" />
                    <line x1="2.6792" y1="16.8091" x2="20.1943" y2="16.8091" stroke="#0F0F0F" />
                    <line x1="2.6792" y1="20.9303" x2="20.1943" y2="20.9303" stroke="#0F0F0F" />
                    <line x1="2.6792" y1="25.0515" x2="20.1943" y2="25.0515" stroke="#0F0F0F" />
                    <line x1="2.6792" y1="29.1727" x2="20.1943" y2="29.1727" stroke="#0F0F0F" />
                </svg>
                <span className="userInputs">Provas e Gabaritos</span>
            </button>
        </nav>
    )
}

export default UsuariosFeed;