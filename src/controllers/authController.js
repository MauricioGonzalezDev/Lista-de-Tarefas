const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const SECRET = "segredo_super_forte"

// REGISTER
exports.register = async (req, res, next) => {
    try {
        const { email, password } = req.body

        const hash = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: { email, password: hash }
        })

        res.status(201).json(user)

    } catch (error) {
        next(error)
    }
}

// LOGIN
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body

        const user = await prisma.user.findUnique({
            where: { email }
        })

        if (!user) throw new Error("INVALID_CREDENTIALS")

        const senhaValida = await bcrypt.compare(password, user.password)

        if (!senhaValida) throw new Error("INVALID_CREDENTIALS")

        const token = jwt.sign(
            { userId: user.id },
            SECRET,
            { expiresIn: "1d" }
        )

        res.json({ token })

    } catch (error) {
        next(error)
    }
}