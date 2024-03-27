function CommentList({id}) {
    let [commentaires, setCommentaires] = React.useState([]);

    React.useState(() => {
        async function CreationCommentaire(){
            fetch(`http://localhost:3000/Commentaires?publication=${id}`)
            .then(response => response.json())
            .then(json => setCommentaires(json))
            .catch(err => console.log(err));
        }
        CreationCommentaire();
    },[id]);

    return (
        <div className="row" id="Commentaires"> 
        {commentaires.map(commentaire => 
              <Comment key= {commentaire.id} {...commentaire} />
          )}
        </div>
    )
}