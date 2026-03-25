const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const { tarefaSchema } = require("../validators/tarefaValidator")

exports.listarTarefas = async (req, res) => {
    const tarefas = await prisma.tarefa.findMany()
    res.json(tarefas)
}

exports.criarTarefa = async (req, res, next) => {
    try {
        const tarefa = await prisma.tarefa.create({
            data: req.body
        })

        res.status(201).json(tarefa)

    } catch (error) {
        next(error)
    }
}

exports.buscarPorId = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id)

        const tarefa = await prisma.tarefa.findUnique({
            where: { id }
        })

        if (!tarefa) {
            throw new Error("NOT_FOUND")
        }

        res.json(tarefa)

    } catch (error) {
        next(error)
    }
}

exports.atualizarTarefa = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id)

        const tarefa = await prisma.tarefa.update({
            where: { id },
            data: req.body
        })

        res.json(tarefa)

    } catch (error) {
        next(error)
    }
}

exports.deletarTarefa = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id)

        await prisma.tarefa.delete({
            where: { id }
        })

        res.json({ mensagem: "Tarefa removida com sucesso" })

    } catch (error) {
        next(error)
    }
}