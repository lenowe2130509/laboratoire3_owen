function Header(){
    return (
        < >    
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <a className="navbar-brand" href="index.html"><img src="image/cepi1.png" width="120" height="96" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarNavDropdown" style={{color: "black"}}>
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="index.html"><h1 style={{color: "black"}}>Accueil</h1></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mx-3" href="Forum.html"><h1 style={{color: "black"}}>Forum</h1></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mx-3" href="Support.html"><h1 style={{color: "black"}}>Support</h1></a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link mx-3" href="Aide.html"><h1 style={{color: "black"}}>Aide</h1></a>
                </li>            
            </ul>
            <a className="navbar-brand" href="connexion.html"><img src="image/connection.png" width="120" height="96"/></a>
        </div>
        </nav>
        <form>
            <div class="row">
                <div class="col-lg-6 mb-3">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Rechercher" aria-label="Rechercher" aria-describedby="basic-addon2"/>
                        <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button">Rechercher</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mb-3">
                <div class="input-group">
                    <div class="input-group-prepend">
                    <span class="input-group-text">Trier par:</span>
                    </div>
                    <select class="custom-select">
                    <option selected>Select</option>
                    <option value="1">Alphabétique (A-Z)</option>
                    <option value="2">Alphabétique (Z-A)</option>
                    <option value="3">Date</option>
                    </select>
                </div>
                </div>
            </div>
        </form>
    </> 
    )  
}