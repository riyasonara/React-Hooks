import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            ReactHOOKS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Counter">
                  useState
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/FetchData">
                  useEffect
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Render">
                  useRef
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  useMemo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  useCallback
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  useContext
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
