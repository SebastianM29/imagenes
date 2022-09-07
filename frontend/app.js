import './styles/app.css';
import  Libro  from './models/libro'


import UI from './UI';
const ui =new UI();




       //trae los datps desde el backend al frontend
       document.addEventListener('DOMContentLoaded', ()=>{
        const ui =new UI();
        ui.renderBooks();
        
       });
    
     


      //para obtener el elemento lo busca por id
      document.getElementById('book-form')
      //lo captura por el submit
      .addEventListener('submit', e =>{
        //no se guarda solo el valor sino todo el input, para guardar solo el valor se pone . value ( imagen = file)
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;
        const image = document.getElementById('image').files;
      //formulario virtual para almacenar los datos que se capturan para enviarlos al backend mediante el post 
        const formData =  new FormData();
         formData.append('image',image[0]);
         formData.append('title',title);
         formData.append('author',author);
         formData.append('isbn',isbn);
         
         
         for (var pair of formData.entries()) {
          console.log(pair[0] + ", " + pair[1]);
        }


        const libro = new Libro(title,author,isbn)

         if (libro.title == '' || libro.author == '' || libro.isbn =='') {
          console.log('corregir errores')
          ui.RenderMessage('Ingrese todos los datos necesarios','danger', 1000);
          e.preventDefault();
        } else {

        ui.addAnewBooks(formData)
        ui.RenderMessage('contenido cargado','success',1500)
        //cancela el evento para que nop se reinicie en consola
        
        }
        e.preventDefault();
    })
       //captura el id book-cards del DOM
    document.getElementById('books-cards')
      .addEventListener('click', e => {
        if(e.target.classList.contains('delete')) {
          const ui =new UI();
          ui.deleteBook(e.target.getAttribute('_id'));
          ui.RenderMessage('libro eliminado','danger',1500)
        }
        //para bloquear que lo lleve al inicio de la pagina (arriba)
        e.preventDefault();

      })
