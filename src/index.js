const express = require("express")

const app = express()

app.use(express.json())

const tarefasRoutes = require("./routes/tarefasRoutes")

app.use(tarefasRoutes)

const errorHandler = require("./middlewares/errorHandler")

app.use(errorHandler)

const authRoutes = require("./routes/authRoutes")

app.use(authRoutes)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})