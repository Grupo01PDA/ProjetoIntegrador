import "./index.css";

function Connection() {
  return(
    <div className="links">
      <a className="link" href="/">Entre</a>

      <input className="input-check" type="checkbox" id="checkbox" />
      <label class="checkbox" for="checkbox">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-circle-half" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
        </svg>
      </label>
    </div>
  )
}

export default Connection;