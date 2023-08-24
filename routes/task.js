const express = require('express');
const authMiddleware = require('../middleware/auth'); 
const { createTask, fetchTask, updateTask, deleteTask, filterTask } = require('../controller/taskController');
const router = express.Router();


router.post('/',authMiddleware,createTask);

router.get('/', authMiddleware,fetchTask);

router.put('/:id', authMiddleware, updateTask);

router.delete('/:id', authMiddleware, deleteTask);

router.get('/tasks', authMiddleware, filterTask);


module.exports = router;
