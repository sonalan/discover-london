

import './Header.css'

const Header = ({serviceModes}) =>{

    return (
        <>
            <nav className="navbar navbar-expand-md bg-uk-navy sticky-top ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        London
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            {serviceModes?
                                serviceModes.map(serviceMode=>{
                                    return(
                                        <li className="nav-item" key={`nav-${serviceMode}`}>
                                            <a className="nav-link text-capitalize" href={`#${serviceMode}`}>{serviceMode}</a>
                                        </li>

                                    )
                                })
                                :<li>...</li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header;
