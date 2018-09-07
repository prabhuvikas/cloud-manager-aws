var AWS = require('aws-sdk');
// load the environment 
require('dotenv').load();
// Set the region 
AWS.config.update({region: 'ap-southeast-1'});
console.log('The value of PORT is:', process.env.AWS_ACCESS_KEY_ID);
// Create EC2 service object
var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

var params = {
  DryRun: false
};

// call EC2 to retrieve policy for selected bucket
ec2.describeInstances(params, function(err, data) {
  if (err) {
    console.log("Error", err.stack);
  } else {
    console.table("Success", data);
  }
});