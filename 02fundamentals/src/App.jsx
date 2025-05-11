import { books } from "./books"

function App() {
  return (
    <div>
      <h1 className="font-bold">Famous Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 align-middle">
        {books.map((book, index)=>{
          return (
            <article key={book.id}> 
              <Book {...book} index={index}/>
            </article>
          )
        })}
      </div>
    </div>
  )
}

const Book = ({img,author, title, index}) =>{
 
  return (
    <section className="bg-amber-100">
      <p>{index+1}</p>
      <div className="m-2 p-3 text-center">
        <img src={img} alt={title} className="mx-auto" />
        <h2 className="font-bold mt-2">{title}</h2>
        <p className="font-light">{author}</p>
      </div>
    </section>
  )
}

export default App
