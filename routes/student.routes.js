const express = require('express');
const router = express.Router();

const student_controller = require('../controllers/student.controller');
const { addUserValidaion } = require('../validation/student/student.validation');

router.post('/create',addUserValidaion ,student_controller.student_create);

router.get('/:id',student_controller.student_details);

router.put('/:id/update',addUserValidaion ,student_controller.student_update);

router.delete('/:id/delete',student_controller.student_delete);

module.exports = router;