var mysql = require('mysql');
var connection = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'godis1girl',
    database:'mogujie'
});

module.exports = {
    connection:connection
}