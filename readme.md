# Node.js and Express REST API with live CSV Data :bar_chart:

:crown: This API takes live CSV data as it is hosted on Amazon S3's Cloud Service by the [UK Goverment under Her Majesty's Land Registy](https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads). This is a Property Price Paid Statistical Data Set which Contains HM Land Registry data © Crown copyright and database right 2019. This data is licensed under the Open Government Licence v3.0.

:large_orange_diamond: This REST API is built using Node.js with the Express.js framework using asynchronous streams to provide fast requests tested using Postman. 

:chart_with_downwards_trend: However, as the data set is too large, with millions of records the application will require high amounts of memory if deployed and the array size is limited as Node's (and Chrome's) V8 engine has a heap limited to 1 GB. To overwrite this to 8GB use: 
''' 
node --max-old-space-size=8000 server.js
'''
 
:rocket: **Run:**
```
npm install
node server
```

:books: Created for educational purposes.