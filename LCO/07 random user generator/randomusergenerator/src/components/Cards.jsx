
function Cards({details}) { 
    return (
      <div className="card" style={{width: "18rem"}}>
    <img src={details.picture?.large} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Name: {details.name?.first} no: {details.phone}</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button
       className="btn btn-primary"
       onClick={()=>window.location.reload()}
       >Click Here</button>
    </div>
  </div>
    )
  }
export default Cards