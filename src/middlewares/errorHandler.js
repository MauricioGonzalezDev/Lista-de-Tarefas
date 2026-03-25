module.exports = (err, req, res, next) => {
    console.error(err)// log no terminal

    //erro do Zod
    if (err.issues) {
        return res.status(400).json({
            erro: err.issues.map(e => e.message)
        })
    }

    //erro padrão (ex: não encontrado)
    if (err.message === "NOT FOUND") {
        return res.status(400).json({
            mensagem: "Tarefa não encontrada"
        })
    }

    //erro genérico
    return res.status(500).json({
        mensagem: "Erro interno do servidor"
    })
}