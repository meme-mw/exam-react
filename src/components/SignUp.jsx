import { useState ,useEffect } from 'react'
import Nav from './Nav'
function SignUp(props) {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [showLog, setShowLog] = useState(false)
    const [name1, setName1] = useState("")
    const [password1, setPassword1] = useState("")
function logUser(){
    console.log(name1,password1)
    if(name1.length<4||password1.length<5){
        alert("user name must be more than 4 characters and passowrd must be more than 5 characters")
    }else{
        fetch(`https://66ea7db455ad32cda47915a6.mockapi.io/exam/users?name=${name1}&password=${password1}`, {
            method: 'GET',
            headers: {'content-type':'application/json'},
          }).then(res => {
            if (res.ok) {
                return res.json();
            }
        
          }).then(user => {
            props.uid(user.id)
            props.uname(user.name)
            props.pass(user.password)
            props.logged(true)
            props.show(true)
            props.showLog(true)
          }).catch(error => {
            // handle error
          })}
        }
        
   function postUser(){
    console.log(name,password)
    if(name.length<4||password.length<5){
        alert("user name must be more than 4 characters and passowrd must be more than 5 characters")
    }else{
        fetch('https://66ea7db455ad32cda47915a6.mockapi.io/exam/users', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            // Send your data in the request body as JSON
            body: JSON.stringify({
                name: name,
                password: password
              })
          }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
          }).then(user => {
            props.uid(user.id)
            props.uname(user.name)
            props.pass(user.password)
            props.logged(true)
            props.show(true)
            console.log(props.show)
          }).catch(error => {
            // handle error
          })}
        }
        
    return (<>
    <Nav/>
     {!showLog?<section className='h-[100%] flex items-center'>
    <div className='md:w-2/4 sm:w-[100%] mx-auto flex flex-col justify-center' >
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" className="grow" placeholder="Username" onChange={(e)=>setName(e.target.value)}/>
</label>
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type="password" className="grow"  onChange={(e)=>setPassword(e.target.value)}/>
</label>
<button className='btn-e mx-auto' onClick={()=>postUser()}>Sign Up</button>
  
<a href="" style={{color:"blue",textDecoration:"underline"}} onClick={()=>setShowLog(true)}>log in you have an account</a>
</div>
  </section>:
   <section className='h-[100%] flex items-center'>
   <div className='md:w-2/4 sm:w-[100%] mx-auto flex flex-col justify-center' >
<label className="input input-bordered flex items-center gap-2">
 <svg
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 16 16"
   fill="currentColor"
   className="h-4 w-4 opacity-70">
   <path
     d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
 </svg>
 <input type="text" className="grow" placeholder="Username" onChange={(e)=>setName(e.target.value)}/>
</label>
<label className="input input-bordered flex items-center gap-2">
 <svg
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 16 16"
   fill="currentColor"
   className="h-4 w-4 opacity-70">
   <path
     fillRule="evenodd"
     d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
     clipRule="evenodd" />
 </svg>
 <input type="password" className="grow"  onChange={(e)=>setPassword(e.target.value)}/>
</label>
<button className='btn-e mx-auto' onClick={()=>logUser()}>Log In</button>
 

</div>
 </section>}

  </>
  
    )
}

export default SignUp