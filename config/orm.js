const connection = require('./connection.js');

const orm = {
  selectAll: (table, cb) => {
    let query = `SELECT * FROM ${table};`;
    connection.query(query, function(err, res) {
      if (err) {
        throw err;
      }

      cb(res);
      console.log(res);
    });
  },
  selectWhere: (table, condition, cb) => {
    let query = `SELECT * FROM ${table} Where player_id = ${condition};`;
    connection.query(query, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    })
  }
  
};

module.exports = orm;
