const express = require('express');
const request = require('request');
const csv = require('csvtojson');
// const testData = require('./Sample');

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is on port: ${PORT}`))

// csv data as json pushed asynchronously into array
const data = [];

csv({
    noheader: true,
    headers: ['id','price','date','postcode','type','is_new','duration','PAON','SAON','street','locality','town_city','district','county','ppd','status']
})
.fromStream(request.get('http://prod.publicdata.landregistry.gov.uk.s3-website-eu-west-1.amazonaws.com/pp-complete.csv'))
.subscribe((json)=>{
    return new Promise((resolve,reject)=>{
        resolve(data.push(json));
        reject('Data not fecthed?!');
    })
});


// all data provided - too large for client
app.get('/api/data', (req, res) => {
    res.send(data);
});

// filter by postcode - includes space in URL / HTTP Request 
app.get('/api/data/:postcode', (req, res) => {
    res.send(data.filter(item => item.postcode === req.params.postcode));
});

// Returns 404 Not Found if request made too early
// CSV data will take time to stream
// app.get('/:postcode', (req, res) => {
//   const found = data.some(item => item.postcode === req.params.postcode;
//   if (found) {
//     res.json(data.filter(item => item.postcode === req.params.postcode;
//   } else {
//     res.status(400).json({ msg: `No property with the postcode of ${req.params.postcode}` });
//   }
// });

