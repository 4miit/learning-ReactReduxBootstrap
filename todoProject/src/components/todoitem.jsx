function Todoitem(){
     
    let todoName = "buy milk"; 
    let todoDate = "4/10/2024"; 


    return  <div class="container">
    <div class="row newrow">
      <div class="col-5">{todoName}</div>
      <div class="col-4">{todoDate}</div>
      <div class="col-2">
        <button type="button" className="btn btn-danger kgbutton">
          Delete
        </button>
      </div>
    </div>
  </div>

}

export default Todoitem;