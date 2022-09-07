
import BookService from './services/BookService';
const bookService = new BookService ()





class UI {

  
  // pintar libros por pantalla
  async renderBooks(){
  const books =await bookService.getBooks();
  console.log(books)
  const BooksCardsContainer = document.getElementById("books-cards");
  console.log(document.getElementById("books-cards"))
   //para asegurarrse que el contenedpr no tenga ningun elemento html
   BooksCardsContainer.innerHTML= '' ;
   //recorro los libros
   books.forEach(book => {
    //crear elemento hmtl con javascript
    const div = document.createElement('div');
    div.className = ``;
    //lo que va a contener dentro del div
    div.innerHTML = `
    <div class="card m-2"> 
     <div class="row">
        
        <div class="col-md-4">
         <img src="${book.imagepath}" alt="" class="img-fluid"/>
        </div>
        
        <div class="col-md-8">
          <div class="card-block px-2">
            <h4 class="card-title">${book.title}</h4>
            <p class="card-text">${book.author}</p>
            <a href="#" class="btn btn-danger delete" _id="${book._id}">X</a>
          </div>
        </div>
      </div>
      <div class="card-footer">
      
     ${book.created_at}
    </div>
    `
    ;
    
    BooksCardsContainer.appendChild(div);
    
   });
   
  }
  
  
  
  
  // agregar nuevo libro
  async addAnewBooks(book){
  await bookService.postBooks(book);
  //llama este metodo para limpiar el formulario
  this.clearBooksForm()
  this.renderBooks();
  }
  
  
  // limpiar formulario
  clearBooksForm(){
  document.getElementById('book-form').reset();
  }
  // renderizar un mensaje
  RenderMessage(message,colorMessage,timeToRemove){    
    //creo un div con su color y mensaje
    const div = document.createElement('div');
    div.className =`alert alert-${colorMessage} message`;
    div.appendChild(document.createTextNode(message));
    
    //selecciono donde voy a colocarlo
    const container = document.querySelector('.col-md-4');
    const bookForm = document.querySelector( '#book-form');

    container.insertBefore(div,bookForm)
    //una vez colocado establezco un tiempo para removerlo.
   setTimeout(() => {
    document.querySelector('.message').remove();
    
   },timeToRemove );
  }




  //borrar libro
  async deleteBook(BookId){
    await bookService.deleteBooks(BookId)
    this.renderBooks();
  }
};

export default  UI ;