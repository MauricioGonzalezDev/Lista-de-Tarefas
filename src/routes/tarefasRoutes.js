const express = require("express")
const router = express.Router()

const tarefasController = require("../controllers/tarefasController")
const validate = require("../middlewares/validate")
const { tarefaSchema } = require("../validators/tarefaValidator")


router.get("/tarefas", tarefasController.listarTarefas)
router.post("/tarefas", validate(tarefaSchema), tarefasController.criarTarefa)
router.get("/tarefas/:id", tarefasController.buscarPorId)
router.put("/tarefas/:id", validate(tarefaSchema), tarefasController.atualizarTarefa)
router.delete("/tarefas/:id", tarefasController.deletarTarefa)

module.exports = router