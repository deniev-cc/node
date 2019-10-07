const path = require('path')

const config = {
    application: {
        server: 'express',
        port: 3000,
        servers: {
            koa: {
                options: {},
                dependencies: ['koa', 'koa-router', 'axios']
            },
            express: {
                options: {},
                dependencies: ['pg', 'path', 'cors', 'axios', 'express', 'fs', 'lodash'],
                controllers: ['UserController']
            }
        }
    },

    database: {
        driver: 'postgre',
        mongodb: {
            url: '',
            options: ''
        },
        mysql: {
            host: '',
            database: '',
            user: '',
            password: ''
        },
        mssql: {
            host: '',
            database: '',
            user: '',
            password: ''
        },
        postgre: {
            url: "postgres://user:NtO>AQ2fN4_V+K@85.192.32.17/PostgreSQL-1050"
        }
    },

    routes: [
        { 
            path      : '/user/login', 
            classname : path.join(__dirname, 'core', 'routers', 'UserRouter'), 
            method    : 'login'
        }
    ],

    paths: {
        routers: path.join(__dirname, 'core', 'router', '/'),
        controllers: path.join(__dirname, 'core', 'controllers', '/'),
        models: path.join(__dirname, 'models', 'database')
    }
}

module.exports = config