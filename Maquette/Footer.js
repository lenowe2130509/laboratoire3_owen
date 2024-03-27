function Footer(){
    return (
        <footer>
            <div className="d-flex justify-content-center">
                <a href="https://fr-ca.facebook.com/" class="mr-5">
                <i className="fab fa-facebook-square" ><img src="image/facebook.png" width="60" height="48"/></i>
                </a>
                <a href="https://twitter.com/" className="mr-5">
                <i className="fab fa-twitter-square"><img src="image/twitter.png" width="60" height="48"/></i>
                </a>
                <a href="https://ca.linkedin.com/" className="mr-5">
                <i className="fab fa-linkedin"><img src="image/linkedin.png" width="60" height="48"/></i>
                </a>
            </div>
            <p className="text-center" style={{color: "white"}}>  Centre d'Expertise et de Perfectionnement en Informatique 2022 </p>
        </footer>
    )
}