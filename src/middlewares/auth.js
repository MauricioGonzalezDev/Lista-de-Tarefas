const jwt = require("jsonwebtoken")

const SECRET = "segredo_super_forte"

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ erro: "Token não fornecido" })
    }

    const token = authHeader.split(" ")[1]

    try {
        const decoded = jwt.verify(token, SECRET)

        req.userId = decoded.userId

        next()

    } catch {
        return res.status(401).json({ erro: "Token inválido" })
    }
}