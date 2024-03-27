function Comment(props){
    return (
        <>
          <div className="col-md-4" id="comment">
            <img src="image/connection.png" width="120" height="96" />
            <h5 className="card-title">{props.auteur}</h5>
          </div>  
          <div className="col-md-12">
            <div className="card-body">
              <p className="card-text">{props.contenu}</p>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1"><h3>Réponse :</h3></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <div className="text-right">
                  <button type="submit" className="btn btn-dark" id="envoyerCommentaire">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }