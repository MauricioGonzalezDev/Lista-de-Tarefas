const express = require("express")
const router = express.Router()

const tarefasController = require("../controllers/tarefasController")

router.get("/tarefas", tarefasController.listarTarefas)
router.post("/tarefas", tarefasController.criarTarefa)
router.get("/tarefas/:id", tarefasController.buscarPorId)
router.put("/tarefas/:id", tarefasController.atualizarTarefa)
router.delete("/tarefas/:id", tarefasController.deletarTarefa)

module.exports = router