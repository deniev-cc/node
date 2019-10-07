module.exports = (app) => {
    
    const { UserController } = app.controllers

    class UserRouter
    {
        constructor()
        {
        }

        login()
        {
            const router = require('express').Router()
            return router.get('/', UserController.all)
        }

        register(req, res)
        {
            //return res.send("344")
        }
    }

    return new UserRouter()

}