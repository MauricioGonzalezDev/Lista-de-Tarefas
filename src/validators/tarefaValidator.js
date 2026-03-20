const { z } = require("zod")

const tarefaSchema = z.object({
    titulo: z.string().min(1, "Título é obrigatório"),
    concluida: z.boolean()
})

module.exports = { tarefaSchema }