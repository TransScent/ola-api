const express = require('express');
const bodyParser = require('body-parser');
const userMaster = require('./routes/user_master');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/userDetails', userMaster);
app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is listening on port 3000`);
});
