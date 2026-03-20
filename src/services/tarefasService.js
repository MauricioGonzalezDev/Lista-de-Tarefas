const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

// LISTAR
exports.listar = async () => {
    return await prisma.tarefa.findMany()
}

// CRIAR
exports.criar = async (dados) => {
    return await prisma.tarefa.create({
        data: dados
    })
}

// BUSCAR
exports.buscarPorId = async (id) => {
    const tarefa = await prisma.tarefa.findUnique({
        where: { id }
    })

    if (!tarefa) {
        throw new Error("NOT_FOUND")
    }

    return tarefa
}

// ATUALIZAR
exports.atualizar = async (id, dados) => {
    try {
        return await prisma.tarefa.update({
            where: { id },
            data: dados
        })
    } catch {
        throw new Error("NOT_FOUND")
    }
}

// DELETAR
exports.deletar = async (id) => {
    try {
        await prisma.tarefa.delete({
            where: { id }
        })
    } catch {
        throw new Error("NOT_FOUND")
    }
}