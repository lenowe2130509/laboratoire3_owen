function BlogCard(props){
  return (
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card" >
          <img src="image/cepi1.png" className="img-fluid mx-auto d-block" width="120" height="96" alt="Article 1"/>
          <div className="card-body">
              <h5 className="card-title">{props.titre}</h5>
              <p className="card-text">{props.contenu}</p>  
              <a href={`blog.html?id=${props.id}`}className="btn btn-primary">Lire la suite</a>
          </div>
        </div>
      </div>
  )   
}