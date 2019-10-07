module.exports = (config) => {

    const { server } = config.application

    const { 
        dependencies, 
        controllers 
    } = config.application.servers[server]

    const paths = config.paths

    class Loader
    {
        loadRoutes()
        {
            const routes = []
            
            config.routes.map(route => {
                routes.push(route)
            })

            return routes
        }
    
        loadLibraries()
        {
            return dependencies
        }

        loadServer()
        {
            require('./factories/ServerFactory')(config, this)
        }

        loadKoa()
        {
            return new require('./servers/koa')(config, this)
        }

        loadExpress()
        {
            return new require('./servers/express')(config, this)
        }

        loadRouter(router, app)
        {
            return require(router.classname)(app)[router.method]
        }

        loadController(controller, app)
        {
            return require(`${paths.controllers}${controller}`)(app)
        }

        loadControllers()
        {
            return controllers 
        }

        loadModels(app)
        {
            const models     = []
            const { driver } = config.database
            const { path }   = app.libs

            app.libs.fs.readdirSync(path.join(paths.models, driver)).map(item => {
                const filename = path.parse(item).name
                models.push({ model: [filename],  path: path.join(paths.models, driver, item) })
            })

            return models
        }

        loadModel(item, app)
        {
            return require(item.path)(app)
        }
    }

    return new Loader()

}