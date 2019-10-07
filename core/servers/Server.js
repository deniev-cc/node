module.exports = (() => {

    class Server
    {
        constructor(config, loader)
        {
            this.app        = {}
            this.app.config = config
            this.loader     = loader
            
            this.init()
        }

        init()
        {
            this.setLibraries()
            this.setModels()
            this.setControllers()
            this.setRoutes()

            this.app.server.listen(this.app.config.application.port)
        }

        setRoutes()
        {            
            this.loader.loadRoutes().map(route => {
                this.app.server.use(route.path, this.loader.loadRouter(route, this.app)())
            })
        }

        setLibraries()
        {
            this.app.libs = {}

            const { server } = this.app.config.application

            this.loader.loadLibraries().map(library => {
                this.app.libs[library] = require(library)

                if (library == server) {
                    this.app.server = new this.app.libs[library]
                }
            })
        }

        setMiddlewares()
        {

        }
        
        setControllers()
        {
            this.app.controllers = {}

            this.loader.loadControllers().map(controller => {
                    this.app.controllers[controller] = this.loader.loadController(controller, this.app)
                }
            )
        }

        setModels()
        {
            this.app.models = {}

            this.loader.loadModels(this.app).map((item) => {
                this.app.models[item.model] = this.loader.loadModel(item, this.app)
            })
         }
    }

    return Server

})()