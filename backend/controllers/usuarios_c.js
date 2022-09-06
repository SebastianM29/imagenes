

const {  response, request }= require ('express');
const { findByIdAndDelete } = require('../models/modeloLibro');
const modeloLibro = require('../models/modeloLibro');
const fs = require('fs-extra');
const path = require('path');

//const Libros = require ('../models/modeloLibro')





const usuariosGet = async( req=request , res=response)=> {

  const libros = await modeloLibro.find()
   res.json(
          libros
    );
  }

  const usuariosPost = async( req=request , res=response)=> {
    try {
      const {title,author,isbn} = req.body;


      if(!title || !author || !isbn)
      return res.status(400).json({message: "Ingrese todos los datos"});

      const newLibro = new modeloLibro ({title,author,isbn});

      if (req.file) {
        newLibro.imagepath = "/uploads/" + req.file.filename;
      }
      
      const savedLibro = await newLibro.save();
      
      
      res.json({
        msg : 'libro guardado'
        
      });

    } catch (error) {
      return res.status(400).json({message: error.message})
      
    }
    
    
  }

  const usuariosDelete = async(req=request, res=response)=> {
          
    //busca el id en el modelolibro que esta en el models
    const books = await modeloLibro.findByIdAndDelete(req.params.id);
    // como modeloLibro te devuelve un libro (books) ... ubico ahi el imagepath y lo concateno con la direccion y utilizo unlink para remover (tmb path  :) )
    fs.unlink(path.resolve('./backend/public' + books.imagepath))
    
    res.json({
          
        msg : 'libro borrado'

    });
  }


  module.exports = { usuariosGet,usuariosPost,usuariosDelete}
 