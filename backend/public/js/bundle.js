/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/UI.js":
/*!************************!*\
  !*** ./frontend/UI.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_BookService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/BookService */ \"./frontend/services/BookService.js\");\n\r\n\r\nconst bookService = new _services_BookService__WEBPACK_IMPORTED_MODULE_0__[\"default\"] ()\r\n\r\n\r\n\r\n\r\n\r\nclass UI {\r\n\r\n  \r\n  // pintar libros por pantalla\r\n  async renderBooks(){\r\n  const books =await bookService.getBooks();\r\n  console.log(books)\r\n  const BooksCardsContainer = document.getElementById(\"books-cards\");\r\n  console.log(document.getElementById(\"books-cards\"))\r\n   //para asegurarrse que el contenedpr no tenga ningun elemento html\r\n   BooksCardsContainer.innerHTML= '' ;\r\n   //recorro los libros\r\n   books.forEach(book => {\r\n    //crear elemento hmtl con javascript\r\n    const div = document.createElement('div');\r\n    div.className = ``;\r\n    //lo que va a contener dentro del div\r\n    div.innerHTML = `\r\n    <div class=\"card m-2\"> \r\n     <div class=\"row\">\r\n        \r\n        <div class=\"col-md-4\">\r\n         <img src=\"http://localhost:8060${book.imagepath}\" alt=\"\" class=\"img-fluid\"/>\r\n        </div>\r\n        \r\n        <div class=\"col-md-8\">\r\n          <div class=\"card-block px-2\">\r\n            <h4 class=\"card-title\">${book.title}</h4>\r\n            <p class=\"card-text\">${book.author}</p>\r\n            <a href=\"#\" class=\"btn btn-danger delete\" _id=\"${book._id}\">X</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n      \r\n     ${book.created_at}\r\n    </div>\r\n    `\r\n    ;\r\n    \r\n    BooksCardsContainer.appendChild(div);\r\n    \r\n   });\r\n   \r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  // agregar nuevo libro\r\n  async addAnewBooks(book){\r\n  await bookService.postBooks(book);\r\n  //llama este metodo para limpiar el formulario\r\n  this.clearBooksForm()\r\n  this.renderBooks();\r\n  }\r\n  \r\n  \r\n  // limpiar formulario\r\n  clearBooksForm(){\r\n  document.getElementById('book-form').reset();\r\n  }\r\n  // renderizar un mensaje\r\n  RenderMessage(message,colorMessage,timeToRemove){    \r\n    //creo un div con su color y mensaje\r\n    const div = document.createElement('div');\r\n    div.className =`alert alert-${colorMessage} message`;\r\n    div.appendChild(document.createTextNode(message));\r\n    \r\n    //selecciono donde voy a colocarlo\r\n    const container = document.querySelector('.col-md-4');\r\n    const bookForm = document.querySelector( '#book-form');\r\n\r\n    container.insertBefore(div,bookForm)\r\n    //una vez colocado establezco un tiempo para removerlo.\r\n   setTimeout(() => {\r\n    document.querySelector('.message').remove();\r\n    \r\n   },timeToRemove );\r\n  }\r\n\r\n\r\n\r\n\r\n  //borrar libro\r\n  async deleteBook(BookId){\r\n    await bookService.deleteBooks(BookId)\r\n    this.renderBooks();\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n//# sourceURL=webpack://tapas-de-libros/./frontend/UI.js?");

/***/ }),

/***/ "./frontend/app.js":
/*!*************************!*\
  !*** ./frontend/app.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ \"./frontend/styles/app.css\");\n/* harmony import */ var _models_libro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/libro */ \"./frontend/models/libro.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ \"./frontend/UI.js\");\n\r\n\r\n\r\n\r\n\r\nconst ui =new _UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\r\n\r\n\r\n\r\n       //trae los datps desde el backend al frontend\r\n       document.addEventListener('DOMContentLoaded', ()=>{\r\n        const ui =new _UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n        ui.renderBooks();\r\n        \r\n       });\r\n    \r\n     \r\n\r\n\r\n      //para obtener el elemento lo busca por id\r\n      document.getElementById('book-form')\r\n      //lo captura por el submit\r\n      .addEventListener('submit', e =>{\r\n        //no se guarda solo el valor sino todo el input, para guardar solo el valor se pone . value ( imagen = file)\r\n        const title = document.getElementById('title').value;\r\n        const author = document.getElementById('author').value;\r\n        const isbn = document.getElementById('isbn').value;\r\n        const image = document.getElementById('image').files;\r\n      //formulario virtual para almacenar los datos que se capturan para enviarlos al backend mediante el post \r\n        const formData =  new FormData();\r\n         formData.append('image',image[0]);\r\n         formData.append('title',title);\r\n         formData.append('author',author);\r\n         formData.append('isbn',isbn);\r\n         \r\n         \r\n         for (var pair of formData.entries()) {\r\n          console.log(pair[0] + \", \" + pair[1]);\r\n        }\r\n\r\n\r\n        const libro = new _models_libro__WEBPACK_IMPORTED_MODULE_1__[\"default\"](title,author,isbn)\r\n\r\n         if (libro.title == '' || libro.author == '' || libro.isbn =='') {\r\n          console.log('corregir errores')\r\n          ui.RenderMessage('Ingrese todos los datos necesarios','danger', 1000);\r\n          e.preventDefault();\r\n        } else {\r\n\r\n        ui.addAnewBooks(formData)\r\n        ui.RenderMessage('contenido cargado','success',1500)\r\n        //cancela el evento para que nop se reinicie en consola\r\n        \r\n        }\r\n        e.preventDefault();\r\n    })\r\n       //captura el id book-cards del DOM\r\n    document.getElementById('books-cards')\r\n      .addEventListener('click', e => {\r\n        if(e.target.classList.contains('delete')) {\r\n          const ui =new _UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n          ui.deleteBook(e.target.getAttribute('_id'));\r\n          ui.RenderMessage('libro eliminado','danger',1500)\r\n        }\r\n        //para bloquear que lo lleve al inicio de la pagina (arriba)\r\n        e.preventDefault();\r\n\r\n      })\r\n\n\n//# sourceURL=webpack://tapas-de-libros/./frontend/app.js?");

/***/ }),

/***/ "./frontend/models/libro.js":
/*!**********************************!*\
  !*** ./frontend/models/libro.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Libro\": () => (/* binding */ Libro),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Libro {\r\n    constructor(title,author,isbn){\r\n        this.title=title\r\n        this.author=author\r\n        this.isbn=isbn\r\n    }\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Libro);\n\n//# sourceURL=webpack://tapas-de-libros/./frontend/models/libro.js?");

/***/ }),

/***/ "./frontend/services/BookService.js":
/*!******************************************!*\
  !*** ./frontend/services/BookService.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\n//una clase con metodos para reutilizar a la hora de hacer peticiones       \r\nclass BookService {\r\n\r\n\r\n    constructor(){\r\n        this.URI = 'http://localhost:8060/libros'\r\n    }\r\n    \r\n    async getBooks(){\r\n        //nos devuelve un dato en formato string.. para convertirlo hay que convertirlo a un Json\r\n        const response = await fetch(this.URI)\r\n        const Books = await response.json();\r\n        return Books ;\r\n    } \r\n      \r\n     // cabeceras : informacion extra para decirle que le esta enviando al backend\r\n     async postBooks (book){\r\n        const response = await fetch(this.URI,{\r\n            \r\n                method: 'POST',\r\n                body : book,\r\n                \r\n\r\n             })\r\n\r\n             // convertimos la respuesta a  un formato json;\r\n             const data = await response.json()\r\n             return data;\r\n             \r\n            }\r\n    \r\n       \r\n       \r\n            async deleteBooks(booksId) {\r\n\r\n        // se concatena la direccion mas el Id desde el frontend hacia el backend\r\n        const response = await fetch(`${this.URI}/${booksId}`, {\r\n            // se manda application/json porque es solo un json a diferencia de post\r\n            // ya q tambien va a enviar una imagen por eso post seria como un formulario\r\n            headers: {\r\n                'content-type': 'application/json'\r\n            },\r\n            method : 'DELETE',\r\n\r\n        })\r\n        const dato = await response.json();\r\n        console.log(dato);\r\n     }\r\n\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookService);\n\n//# sourceURL=webpack://tapas-de-libros/./frontend/services/BookService.js?");

/***/ }),

/***/ "./frontend/styles/app.css":
/*!*********************************!*\
  !*** ./frontend/styles/app.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tapas-de-libros/./frontend/styles/app.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./frontend/app.js");
/******/ 	
/******/ })()
;