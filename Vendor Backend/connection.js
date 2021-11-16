
var elasticsearch = require('elasticsearch');
/*var client = new elasticsearch.Client({
   hosts: [ 'localhost:9200']
   //ssl:{ rejectUnauthorized: false, pfx: [] }
});*/
var client = new elasticsearch.Client({
    hosts: [ 'https://elastic:YBmV8PF7k47nIlJDnLiIaP3o@demodeployment.es.eastus2.azure.elastic-cloud.com:9243'],
    ssl:{ rejectUnauthorized: false, pfx: [] }
 })


module.exports = client;


// I used the ssl to bypass security check
