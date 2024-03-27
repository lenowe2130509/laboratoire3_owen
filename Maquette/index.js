function dialog() {
    $(".btn.btn-primary").click(function(ev) {
        ev.preventDefault();
        $("<div></div>").dialog({
            resizable: false,
            height: "auto",
            width: 400,
            modal: true,
            title: "Confirmer l'envoi",
            buttons: {
                "Confirmer": function() {
                    const form = document.getElementById('AddPublication');
                    fetch('http://localhost:3000/Publications', {
                        method: 'POST',
                        body: JSON.stringify({
                            titre: document.getElementById('titre').value,
                            auteur: document.getElementById('auteur').value,
                            date: document.getElementById('datepicker').value,
                            contenu: document.getElementById('contenu').value,
                        }),
                        headers: {
                            'Content-Type': 'application/json; charset=UTF-8',
                        }
                    })
                    .then(response => {
                        if (response.ok) {
                            window.location.href = 'http://127.0.0.1:5502/Maquette/index.html';
                        } 
                        else {
                            alert('Une erreur est survenue');
                        }
                    })
                    .catch(error => {   
                        alert('Une erreur est survenue');
                    });
                    $(this).dialog("close");
                    },
                },
                Annuler: function() {
                    $(this).dialog("close");
                }
            }
        );
    })
}

function App(){
    return <>
    <Header />
    <BlogList/>
    <Footer />
</>
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);