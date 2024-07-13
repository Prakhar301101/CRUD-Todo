const express = require("express");
const router = express.Router();
const crudController= require("../controllers/crudController");

router.post('/api/tasks',crudController.createTask);
router.get('/api/tasks',crudController.getTasks);
router.get('/api/tasks/:id',crudController.getTaskById);
router.put('/api/tasks/:id',crudController.updateTaskById);
router.delete('/api/tasks/:id',crudController.deleteTaskById);

module.exports=router;