const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json());
app.use(require ('.routes/students.route'));

mongoose.connect("mongodb+srv://muradkhalikov211:00000000@cluster0.sh2uq2q.mongodb.net/")
.then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

  app.listen(4000, () => {
    console.log('Сервер запущен успешно http:localhost:4000')
  })  