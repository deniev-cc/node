module.exports = (app) => {

    const {
        mysql,
        mssql,
        redis,
        mongodb,
        postgree
    } = app.database.drivers

    const { config } = app.config.database

    class DatabaseFactory
    {
        static instance(driver)
        {
            switch (driver) {
                // MongoDB
                case 'mongodb':
                    return new mongodb(config.mongo.url)
                
                // MySQL
                case 'mysql':

                    const { 
                        host, 
                        database, 
                        user, 
                        password 
                    } = config.mysq;
                    
                    return new mysql(host, database, user, password)

                // MsSQL
                case 'mssql':

                // PostgreSQL
                case 'postgreesql':
                    return new pos
            }
        }
    }

}