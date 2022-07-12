let con = require('../config/dbconfig');
let dbquerys = require('../config/dbquerys');
exports.getUserDetails = async function (req, res) {
  await con.query(dbquerys.INSERT_USER_DETAILS,[req.body.USER_NAME,req.body.USER_EMAIL,req.body.SCORE_COUNT] ,(err, data) => {
    if (err) {
      res.json({
        status: 200,
        message: 'Failed',
        data: err.sqlMessage,
      });
    } else {
      res.json({"status":200,message:"Success"});
    }
  });
};


