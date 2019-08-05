# Node.js and Express REST API with live CSV Data :bar_chart:

:crown: This API takes live CSV data as it is hosted on Amazon S3's Cloud Service by the [UK Goverment under Her Majesty's Land Registy](https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads). This is a Property Price Paid Statistical Data Set which Contains HM Land Registry data © Crown copyright and database right 2019. This data is licensed under the Open Government Licence v3.0.

:large_orange_diamond: This REST API is built using Node.js with the Express.js framework using asynchronous streams to provide fast requests, which was tested using Postman. 

:chart_with_downwards_trend: As the data set contains 30 million records the application can in its current state be deployed; but as the data set grows the array size will meet the heap limit of Node's (and Chrome's) V8 engine which is set to 1 GB by default . To overwrite this to 8GB for example use: 
```
node --max-old-space-size=8000 server.js
```
 
:rocket: **Run:**
```
npm install
node server
```

:books: Created for educational purposes.