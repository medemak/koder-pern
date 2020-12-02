module.exports = {
    HOST:'localhost',
    USER:'can-dash',
    PASSWORD:'root',
    DB:'koder-pern',
    dialect:'postgres',
    pool: {
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
};