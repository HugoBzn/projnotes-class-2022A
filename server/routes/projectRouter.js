// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador de proyectos
import projectController from '../controllers/projectController';

// Creo una instancia del router
const router = new Router();

/* --- GET --- */
// Listar proyectos
// GET /projects/ | GET /projects/index
router.get(['/', '/index'], projectController.index);

// Envia el formulario para registrar una idea de proyecto
// GET /projects/add
router.get('/add', projectController.add);

/* ------ POST ------ */
// Procesa el formulario que Agrega ideas de proyectos
// POST /projects/add
router.post('/add', projectController.addPost);

// Exportando en enrutador Projects
export default router;