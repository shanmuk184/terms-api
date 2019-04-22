const Sequelize = require('sequelize');
function create_connection_uri() {
    return 'postgres://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME
}

function db_connection(){
    const sequelize = new Sequelize(create_connection_uri());
    return sequelize
}
    

module.exports = {db_connection};
