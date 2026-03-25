module.exports = (Schema) => {
    return (req, res, next) => {
        try {
            const dadosValidados = Schema.parse(req.body)

            req.body = dadosValidados // substitui pelos dados validos

            next() // continua a funcao para o controller sendo dados validos.

        } catch (error) {
            next(error)
        }
    }
}