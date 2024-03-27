function AddComment({id}) {
    
    async function envoieCommentaire(id) {
        let contenu = document.getElementById("userComment").value;
        var nouveauCommentaire = {
            "publication": id,
            "date": new Date(),
            "contenu": contenu
        };   
        fetch("http://localhost:3000/Commentaires", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nouveauCommentaire),
        });
    }

    return (
        < > 
        <div className="container">
            <h5 className="d-flex justify-content-start m-3">Commentaires</h5>
            <div className="mb-3">
                <textarea className="form-control" id="userComment" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-dark border border-1 border-white float-end btn-lg" onClick={() => envoieCommentaire(id)}>Submit</button>
        </div>
        </>
    )
}