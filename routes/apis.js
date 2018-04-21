var express = require('express');
var router = express.Router();
const User = require('./../models/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
   //res.send('respond with a resource');
});
router
.get('/user',async (req,res,next)=>{
  debugger;
let users = await User.find({});
  res.json(users);
})
.post('/user',async (req,res,next)=>{
  let createdUser = await User.create(req.body);
  res.json(createdUser);
});
router.use(express.json());
router.route(`/user/findOne`)
.get((req,res,next)=>{
  debugger;
  let querypromise = User.findOne(req.query);
})

module.exports = router;
