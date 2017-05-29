let serviceMethod = (req, res) => {
  res.json({
             msg: 'this is our api!',
           });
};

// more info on imports / exports https://goo.gl/OlTxv2
module.exports = serviceMethod;