import log from '../config/winston';

/* Action Methods */
// Lista los proyectos
// GET /projects | GET /projects/index
const index = (req, res) => {
  res.send('Listando proyectos 🚧');
  //   TODO: Agregar codigo de listado de proyectos
};

// Agrega ideas de proyectos
// GET /projects/add
const add = (req, res) => {
  res.render('projects/addProjectView', {});
};

// Procesa el formulario que Agrega ideas de proyectos
// POST /projects/add
const addPost = (req, res) => {
  const { errorData: error } = req;
  if (error) {
    log.info('Se retorna objeto de error de validacion');
    // La validacion falló
    res.status(200).json(error);
  } else {
    // Desestructurando la informacion
    // del formulario
    const { validData: project } = req;
    log.info('Se retorna objeto project valido');
    // Regresar un objeto con los datos
    // obtenidos del formulario
    res.status(200).json(project);
  }
};

// Exportando el controlador
export default {
  index,
  add,
  addPost,
};
