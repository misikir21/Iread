/* eslint-disable import/prefer-default-export */
export const addNewBook = () => {
  const content1 = `<div class="add-book-container" ><h2>Add a new book</h2>
      <div class="form-container">
      <form>
          <input class='book' type="text" name="books" placeholder="tittle"> 
          <input class='author' type="text" name="authors" placeholder="Author"> 
          <div class="btn-container"><button class="add">Add </button></div>
          <span class="msg message">Book sucessfully added</span>
      </form>
    </div>
    </div>`;
  return content1;
};