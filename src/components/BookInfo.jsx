import { useState ,useEffect } from 'react'
import {Link,useParams} from 'react-router-dom';

function BookInfo(props) {
    // const [books, setBooks] = useState([])
    const [book, setBook] = useState("")
    let {id}=useParams();
    useEffect(() => {
        fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=APtPAemutkCYpUloF96BMK0Kl8kLXTXR")
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data => setBook(data.results.books.filter(el => el.rank==id)))
      },[])
    //   books!=[]?setBook(books.filter(el => el==id)):"";
    return ( 
        <section className='h-[100%]'>
        <div className="md:w-2/3 min-[500px]:w-full mx-auto">
            <div className="card bg-base-100 w-full shadow-xl ">
  <figure>
    <img
      src={book!=""?book[0].book_image:""}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {book!=""?book[0].title:""}
     
    </h2>
   
    <div className="card-actions justify-end">
    Author : <div className="badge badge-outline">{book!=""?book[0].author:""} </div>
     
    </div>
    <div className="card-actions justify-end">
      <a className="btn btn-primary" href={book!=""?book[0].amazon_product_url:""}>Buy Now</a>
    </div>
  </div>
</div>
        
        </div>
    </section>
)
}

export default BookInfo