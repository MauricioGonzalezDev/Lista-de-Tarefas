const express = require("express")

const app = express()

app.use(express.json())

let tarefas = []
let id = 1

app.get("/tarefas", (req, res) => {
    res.json(tarefas)
})

app.post("/tarefas", (req, res) => {

    const tarefa = {
        id: id++,
        titulo: req.body.titulo,
        concluida: req.body.concluida
    }

    tarefas.push(tarefa)

    res.status(201).json(tarefa)
})

app.get("/tarefas/:id", (req, res) => {

    const id = parseInt(req.params.id)

    const tarefa = tarefas.find(t => t.id === id)

    if (!tarefa) {
        return res.status(404).json({ mensagem: "Tarefa não encontrada" })
    }

    res.json(tarefa)

})

app.put("/tarefas/:id", (req, res) => {

    const id = parseInt(req.params.id)

    const tarefa = tarefas.find(t => t.id === id)

    if (!tarefa) {
        return res.status(404).json({ mensagem: "Tarefa não encontrada" })
    }

    tarefa.titulo = req.body.titulo
    tarefa.concluida = req.body.concluida

    res.json(tarefa)

})

app.delete("/tarefas/:id", (req, res) => {

    const id = parseInt(req.params.id)

    const index = tarefas.findIndex(t => t.id === id)

    if (index === -1) {
        return res.status(404).json({mensagem: "Tarefa não encontrada"})
    }
    
    tarefas.splice(index, 1)

    res.json({mensagem: "Tarefa removida com sucesso"})
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})