function Todoitem2() {
  let todoName2 = "Go to Collage";
  let todoDate2 = "4/10/2023";

  return (
    <div class="container">
      <div class="row newrow">
        <div class="col-5">{todoName2} </div>
        <div class="col-4">{todoDate2}</div>
        <div class="col-2">
          <button type="button" className="btn btn-danger kgbutton">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem2;
