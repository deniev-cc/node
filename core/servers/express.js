module.exports = (config, loader) => {

    const Server = require('./Server')

    class Express extends Server
    {
        constructor()
        {
            super(config, loader)
        }
    }

    return new Express()

}