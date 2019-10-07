const config = require('./config')
const loader = require('./core/Loader')(config)

loader.loadServer()
