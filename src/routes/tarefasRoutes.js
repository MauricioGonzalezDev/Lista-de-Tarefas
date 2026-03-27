const express = require("express")
const router = express.Router()

const tarefasController = require("../controllers/tarefasController")
const validate = require("../middlewares/validate")
const { tarefaSchema } = require("../validators/tarefaValidator")
const auth = require("../middlewares/auth")


router.get("/tarefas", auth, tarefasController.listarTarefas)
router.post("/tarefas", auth, validate(tarefaSchema), tarefasController.criarTarefa)
router.get("/tarefas/:id", auth, tarefasController.buscarPorId)
router.put("/tarefas/:id", auth, validate(tarefaSchema), tarefasController.atualizarTarefa)
router.delete("/tarefas/:id", auth, tarefasController.deletarTarefa)

module.exports = router