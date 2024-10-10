
import {Link } from "react-router-dom"
function Book(props) {
    // let link=!
    return (
        <div className="w-[330px] h-[450px] m-3">
            <Link to={`/bookinfo/${props.id}`}>
            <div className="card bg-base-100 w-full shadow-xl h-[100%]">
  <figure>
    <img
      src={props.img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {props.title}
     
    </h2>
   
    <div className="card-actions justify-end">
    Author : <div className="badge badge-outline">{props.author} </div>
     
    </div>
  </div>
</div>
</Link> 
        </div>
    )
}

export default Book