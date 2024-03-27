function BlogDetails({id}) {
    const [Publications, setPublications] = React.useState({});

    React.useEffect(() => {        
        async function CreationBlog(){
            fetch(`http://localhost:3000/Publications/${id}`)
            .then(response => response.json())
            .then(json => setPublications(json))
            .catch(err => console.log(err));
        }
        CreationBlog();
    },[id]);

    return (
        < > 
            <div>     
                <img src="image/planete.png" className="img-fluid mx-auto d-block" width="210" height="172" />
                <h1 className="display-4">{Publications.titre}</h1>
                <div id="texting"> {Publications.contenu}</div>
            </div>
                     
        </>
    )
}