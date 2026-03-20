const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const { tarefaSchema } = require("../validators/tarefaValidator")

exports.listarTarefas = async (req, res) => {
    const tarefas = await prisma.tarefa.findMany()
    res.json(tarefas)
}

exports.criarTarefa = async (req, res) => {
    try {
        const dados = tarefaSchema.parse(req.body)

        const tarefa = await prisma.tarefa.create({
            data: dados
        })

        res.status(201).json(tarefa)

    } catch (error) {
        res.status(400).json({
    erro: error.issues.map(e => e.message)})
    }
}

exports.buscarPorId = async (req, res) => {
    const id = parseInt(req.params.id)

    const tarefa = await prisma.tarefa.findUnique({
        where: { id }
    })

    if (!tarefa) {
        return res.status(404).json({ mensagem: "Tarefa não encontrada" })
    }

    res.json(tarefa)
}

exports.atualizarTarefa = async (req, res) => {
    const id = parseInt(req.params.id)

    try {
        const dados = tarefaSchema.parse(req.body)

        const tarefa = await prisma.tarefa.update({
            where: { id },
            data: dados
        })

        res.json(tarefa)

    } catch (error) {
       res.status(400).json({
    erro: error.issues.map(e => e.message)})
    }
}

exports.deletarTarefa = async (req, res) => {
    const id = parseInt(req.params.id)

    try {
        await prisma.tarefa.delete({
            where: { id }
        })

        res.json({ mensagem: "Tarefa removida com sucesso" })

    } catch {
        res.status(404).json({ mensagem: "Tarefa não encontrada" })
    }
}