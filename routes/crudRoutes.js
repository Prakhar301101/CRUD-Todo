const express = require("express");
const router = express.Router();
const crudController= require("../controllers/crudController");
const verifyAuth =require('../middlewares/authMiddleware');

router.post('/api/tasks',verifyAuth,crudController.createTask);
router.get('/api/tasks',verifyAuth,crudController.getTasks);
router.put('/api/tasks/:id',verifyAuth,crudController.updateTaskById);
router.delete('/api/tasks/:id',verifyAuth,crudController.deleteTaskById);

module.exports=router;