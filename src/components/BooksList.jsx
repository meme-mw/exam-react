import { useState ,useEffect } from 'react'
import {Link,useParams} from 'react-router-dom';
import Book from './Book'
import Nav from './Nav'
function BooksList() {
    let {id}=useParams();
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=APtPAemutkCYpUloF96BMK0Kl8kLXTXR")
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data => setBooks(data.results.books))
      },[])
      return (
       
        <>
        <Nav/>
             <section className="flex flex-wrap items-center justify-center">
     
     {books!=[]?books.map(el=><Book title={el.title} img={el.book_image} author={el.author} id={el.rank} uid={id}/>):""}
     </section>
     
         </>
       )
     }
     
     export default BooksList
     