import { useState ,useEffect } from 'react'
import {Link } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SignUp from './components/SignUp'
import './App.css'
import Nav from './components/Nav'
import Book from './components/Book'

function App() {
  const [books, setBooks] = useState([])
  const [uName, setUname] = useState("")
  const [pass, setPass] = useState("")
  const [uId, setUId] = useState("-1")
  const [show, setShow] = useState(true)
  const [logged, setLogged] = useState(false)
 
  return (
   
    <>
     {!show?<SignUp uname={setUname} pass={setPass} logged={setLogged} uid={setUId} show={setShow}/>:""}
<Nav/>
  <section className='flex justify-around flex-wrap'>
    <div className='md:w-1/3 sm:w-full flex items-center'>
    <img src="https://storage.googleapis.com/du-prd/books/images/9780593449592.jpg" alt="" className="im pic1"/>
    <img src="https://storage.googleapis.com/du-prd/books/images/9781250178633.jpg" alt="" className=" im pic2"/>
    <img src="https://storage.googleapis.com/du-prd/books/images/9780374602635.jpg" alt="" className="im pic3"/>
    </div>
    <div className='md:w-1/3 sm:w-full p-5'>
    <h1 className='text-[3rem] p-5'>My Books</h1>
    <p>My books website gives you a track of most popular books and allows you to share your fav list and keep track of what you read</p>
    <Link to={`/bookslist/${uId}`} className='btn-e mt-3' >Show books list</Link>
    </div>
  </section>
    </>
  )
}

export default App
