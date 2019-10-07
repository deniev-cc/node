module.exports = (config, loader) => {

    const { server } = config.application

    class ServerFactory
    {
        static instance()
        {
            switch (server) {
                case 'koa':
                    return loader.loadKoa()
                    break;

                case 'express':
                    return loader.loadExpress()
                    break;
            }
        }
    }

    return ServerFactory.instance()

}