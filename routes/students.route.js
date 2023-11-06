const expresss = require('express')
const studentControlles = require('../models/controllers/students.controller')

const app = expresss()

app.get('/students', studentControlles.getStudent)

app.post('/students/', studentControlles.createStudent)

app.delete('/students/:id', studentControlles.deleteStudent)

app.patch('/students/:id', studentControlles.patchStudent)

module.exports = app