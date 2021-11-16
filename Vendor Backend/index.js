const express = require("express");
const bodyParser = require("body-parser");
const elasticsearch = require("elasticsearch");
const cors=require("cors");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const allowedOrigins=[
    'capacitor://localhost',
    'ionic://localhost',
    'http://localhost',
    'http://localhost:4200',
    'chrome-extension://fhbjgbiflinjbdggehcddcbncdddomop'
];

var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (allowedOrigins.indexOf(req.header('Origin')) !== -1) {
      corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
      corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
}
// if the dependencies are not installed just do npm install express elasticsearch body-parser

app.listen(process.env.PORT || 3000, () => {
    console.log("connected")
});

// connection with elastic search 

const esClient = elasticsearch.Client({
    host: "localhost:9200",
});

// check elasticsearch health first

esClient.cluster.health({},function(err,resp,status) {  
  console.log("-- Client Health --",resp);
});

//  Post to Vendor using body ... mention the details of body in POSTman also

app.post("/vendor", (req, res) => {
    esClient.index({
        index: 'vendor',
        body: {
            "_id": req.body._id,
            "name": req.body.name,
            "ratings": req.body.ratings,
        }
    })
    .then(response => {
        return res.json({"message": "Indexing successful"})
    })
    .catch(err => {
         return res.status(500).json({"message": "Error"})
    })
});

// GET list of vendors by name
// to get vendor in params enter key as text and value as the name of doc that you want to search

app.get("/vendor", (req, res) => {
    const searchText = req.query.text
    esClient.search({
        index: "vendor",
        body: {
            query: {
                match: {"name": searchText.trim()}
            }
        }
    })
  
    .then(response => {
        return res.json(response)
    })
    .catch(err => {
        return res.status(500).json({"message": "Error"})
    })
});

// GET list of all vendors available

app.get("/all",cors(corsOptionsDelegate), (req, res)=>{
    let query = {
      index: "vendor"
    }
    if (req.query.vendor) query.q =  `*${req.query.vendor}*`;
    esClient.search(query)
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
  });

  // Update Vendor by name using put method

  app.put("/vendor/:id", bodyParser, (req, res)=>{
    esClient.update({
      index: "vendor",
      id: req.params.id,
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

  app.delete("/vendor/:id", bodyParser, (req, res)=>{
    esClient.delete({
      index: "vendor",
      id: req.params.id,
      
    })
    .then(resp=>{
      return res.status(200).json({
        msg: 'vendor deleted'
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

