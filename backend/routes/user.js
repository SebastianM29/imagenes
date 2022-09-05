const  {Router} = require ('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete } = require('../controllers/usuarios_c');
const router = Router ();






router.get('/', usuariosGet  );

router.post('/', usuariosPost );

router.delete('/:id', usuariosDelete );





module.exports = router