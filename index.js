const request=require('request');
const csv=require('csvtojson');

csv({
    noheader: true,
    headers: ['id','price','date','postcode','type','is_new','duration','PAON','SAON','street','locality','town_city','district','county','ppd','status']
})
.fromStream(request.get('http://prod.publicdata.landregistry.gov.uk.s3-website-eu-west-1.amazonaws.com/pp-complete.csv'))
.subscribe((json)=>{
    return new Promise((resolve,reject)=>{
        resolve(console.log(json));
        reject('Data not fecthed?!');
    })
});
