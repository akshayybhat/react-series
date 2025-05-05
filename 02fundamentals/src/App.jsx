

function App() {
  const books = [
    {
      img: 'https://images-na.ssl-images-amazon.com/images/I/91ZVf3kNrcL._AC_UL600_SR600,400_.jpg',
      author:"Mel Robbins",
      title: "The Let Them Theory",
      id: 1,
    },
    {
      img: 'https://images-na.ssl-images-amazon.com/images/I/61o5Q8IIq4L._AC_UL600_SR600,400_.jpg',
      author: "Suzanne Collins",
      title:"Sunrise on the Reaping ",
      id: 2,
      
    },
    {
      img: 'https://images-na.ssl-images-amazon.com/images/I/71fD+iFwL1L._AC_UL600_SR600,400_.jpg',
      author:"Emily Henry ",
      title: "Sunrise on the Reaping",
      id: 3,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 align-middle">
      {books.map((book)=>{

        return (
          <article key={book.id}>
            <Book {...book} />
          </article>
        )
      })}
    </div>
  )
}

const Book = ({img,author, title}) =>{
  
  return (
    <section className="bg-amber-100">
      <div className="m-2 p-3 text-center">
        <img src={img} alt={title} className="mx-auto" />
        <h2 className="font-bold mt-2">{title}</h2>
        <p className="font-light">{author}</p>
      </div>
    </section>
  )
}

export default App
