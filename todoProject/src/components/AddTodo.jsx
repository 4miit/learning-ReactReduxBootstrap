function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row newrow">
        <div class="col-5">
          <input type="text" placeholder="enter todo here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" className="btn btn-success kgbutton">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
