const express = require('express');
const router = express.Router();
const elastic = require('elasticsearch');
const bodyParser = require('body-parser').json();
var client = require('./connection.js');

//some sample Data

router.get("/", (req, res) =>
res.status(200)
.send({ message: "Hello from the server !"}));

/*let vendor = [
    {
        "sku": "1sample",
        "name": "Ansh Goyal",
        "ratings": "96.16"
    }

];



//Post method to add data

router.post('/vendor', bodyParser, (req, res)=>{
    client.index({
      index: 'vendor',
      body: req.body
    })
    .then(resp=>{
      return res.status(200).json({
        msg: 'vendor indexed'
      });
    })
    .catch(err=>{
      return res.status(500).json({
        msg: 'Error',
        err
      });
    })
  });

  //get method to get by name
  
  router.get('/vendor/:name', (req, res)=>{
    let query = {
      index: 'vendor',
      name: req.params.name
    }
    client.get(query)
    .then(resp=>{
      if(!resp){
        return res.status(404).json({
          vendor: resp
        });
      }
      return res.status(200).json({
        vendor: resp
      });
    })
    .catch(err=>{
      return res.status(500).json({
        msg: 'Error not found',
        err
      });
    });
  });

  //Put method to update vendor by name
  
  router.put('/vendor/:name', bodyParser, (req, res)=>{
    client.update({
      index: 'vendor',
      name: req.params.name,
      body: {
        doc: req.body
      }
    })
    .then(resp=>{
      return res.status(200).json({
        msg: 'vendor updated'
      });
    })
    .catch(err=>{
      console.log(err)
      return res.status(500).json({
        msg: 'Error',
        err
      });
    })
  });

  // Delete method to delete vendor by name
  
  router.delete('/vendor/:name', (req, res)=>{
    client.delete({
      index: 'vendor',
      name: req.params.name
    })
    .then(resp=>{
      res.status(200).json({
        'msg': 'vendor deleted'
      });
    })
    .catch(err=>{
      res.status(404).json({
        'msg': 'Error'
      });
    });
  });

  // GET method to get list of all vendors
  
  router.get('/vendor', (req, res)=>{
    let query = {
      index: 'vendor'
    }
    if (req.query.vendor) query.q =  `*${req.query.vendor}*`;
    client.search(query)
    .then(resp=>{
      return res.status(200).json({
        vendor: resp.hits.hits
      });
    })
    .catch(err=>{
      console.log(err);
      return res.status(500).json({
        msg: 'Error',
        err
      });
    });
  });*/
  
  module.exports = router;