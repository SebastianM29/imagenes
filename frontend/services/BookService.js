

//una clase con metodos para reutilizar a la hora de hacer peticiones       
class BookService {


    constructor(){
        this.URI = '/libros'
    }
    
    async getBooks(){
        //nos devuelve un dato en formato string.. para convertirlo hay que convertirlo a un Json
        const response = await fetch(this.URI)
        const Books = await response.json();
        return Books ;
    } 
      
     // cabeceras : informacion extra para decirle que le esta enviando al backend
     async postBooks (book){
        const response = await fetch(this.URI,{
            
                method: 'POST',
                body : book,
                

             })

             // convertimos la respuesta a  un formato json;
             const data = await response.json()
             return data;
             
            }
    
       
       
            async deleteBooks(booksId) {

        // se concatena la direccion mas el Id desde el frontend hacia el backend
        const response = await fetch(`${this.URI}/${booksId}`, {
            // se manda application/json porque es solo un json a diferencia de post
            // ya q tambien va a enviar una imagen por eso post seria como un formulario
            headers: {
                'content-type': 'application/json'
            },
            method : 'DELETE',

        })
        const dato = await response.json();
        console.log(dato);
     }

}



export default BookService ;