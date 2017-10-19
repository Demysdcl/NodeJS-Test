Sequelize = require('sequelize');

var sequelize = new Sequelize('ALCATEL', 'sa', 'Alcatel135$', {
    host: '172.20.19.228',
    dialect: 'mssql',
    schema: 'db_accessadmin',
    pool: {
        max: 20,
        min: 0,
        idle: 10000
    }
});

module.exports = function () {
    return sequelize;
};

