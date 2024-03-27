function App(){
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    return <>
    <Header />
    <BlogDetails id={id}/>
    <AddComment id={id}/>
    <CommentList id={id}/>
    <Footer />
</>
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);