module.exports = (config, loader) => {

    const Server = require('./Server')

    class Koa extends Server
    {
        constructor()
        {
            super(config, loader)
        }
    }

    return new Koa()

}