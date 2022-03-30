const { urlencoded } = require('express');
var express = require('express');
var router = express.Router();

var previewEmail = require('preview-email');
var email = require('email-templates');
var nodemailer = require('nodemailer');
var transporterModel = require('../models/transporter');

var uid2 = require('uid2');
var bcrypt = require('bcrypt');

var guestModel = require('../models/guests');
var hostModel = require('../models/host');
var lastConnectionAtModel = require('../models/lastConnectionAt');
var locationModel = require('../models/locations');
var messageModel = require('../models/messages');
var modifiedAtModel = require('../models/modifiedAt');
var profileModel = require('../models/profiles');

/* GET home page. */
// router.get('/', function(req, res, next) {

//   res.render('index', { title: 'Express' });
// });


/* POST - HOST . */


/* POST - HOST - SIGN-UP . */
router.post('/host-sign-up', async function(req,res,next){

  var error = []
  var result = false
  var saveHost = null
  var token = null

  const data = await hostModel.findOne({
    email: req.body.email
  })

  if (data !== null) {
    error.push('this host exists in the database')
  }

  // if (req.body.email === '' || req.body.password === '') {
  //   error.push('empty strings')
  // }

  if (error.length === 0) {

    var hash = bcrypt.hashSync(req.body.password, 10);

    // var newHost = new hostModel({
      
    // })
  
    saveHost = await newHost.save()

    if (saveHost) {
      result = true
      token = saveHost.token
    }
  }

  res.json({ result, saveHost, error, token })
});

/* POST - HOST - SIGN-IN . */
router.post('/host-sign-in', async function(req,res,next) {

  var result = false
  var host = null
  var error = []
  var token = null
  
  // if (req.body.email === '' || req.body.password === '') {
  //   error.push('empty strings')
  // }

  if (error.length === 0) {
    const host = await hostModel.findOne({ email: req.body.email })

    if (host) {
      if (bcrypt.compareSync(req.body.password, host.password)) {
        result = true
        token = host.token
      } else {
        result = false
        error.push('wrong password')
      }
      
    } else {
      error.push('wrong email')
    }
  }

  res.json({ result, host, error, token })
});

/* GET - HOST - IF SIGN-IN - HOST PROFILE (DASHBOARD) . */
router.get('/dashboard', async function(req,res,next) { 

});

/* GET - HOST - IF SIGN-IN - SEE ALL GUEST (DASHBOARD) . */
router.get('/see-guests', async function(req,res,next) { 

});

/* GET - HOST - IF SIGN-IN - SEE ONE GUEST (DASHBOARD) . */
router.get('/see-one-guest', async function(req,res,next) { 

});

/* POST - HOST - IF SIGN-IN - UPDATE ONE GUEST (DASHBOARD) . */
router.post('/update-one-guest', async function(req,res,next) { 

});

/* POST - HOST - IF SIGN-IN - DELATE ONE GUEST (DASHBOARD) . */
router.delete('/delete-one-guest', async function(req,res,next) { 

});

/* POST - HOST - IF SIGN-IN - CREATE TRANSPORTER (NODEMAILER) . */
router.post('/create-transporter', async function(req,res,next) { 

});

/* GET - HOST - IF SIGN-IN - EMAIL TEMPLATE (NEWSLETTER) . */
router.get('/email-template', function(req, res, next) {

/* ALL TAG ARE EDITABLE (AS ON https://notion.so)*/
  res.render('email-template');
});

/* POST - HOST - IF SIGN-IN - NODEMAILER EMAIL TEMPLATE TEST. */
router.post('/email-template', function(req, res, next) {

  var result = false
  var error = []

  /* EMAIL SENT FROM HOST TO HOST */
    res.render('email-template', result, error);
});

router.get('/enter-in-contact-mail', function(req, res, next) {

  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //   user: '',
  //   pass: ''
  //   }
  //   });

  // const mailOptions = {
  //     from: 'hello from confiance cosmetique',
  //     to: 'laura.savickaite@laplateforme.io',
  //     subject: 'Hello from Nodemailer',
  //     text: 'Hello from Nodmailer!',
  //     html: 'index.html',
  //     };
    
  // transporter.sendMail(mailOptions)

  res.render('index', { title: 'Express' });
});

module.exports = router;
