// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/1451001600000", (req, res) =>{
  res.send({ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" });
})
app.get('/api/', (req, res) =>{
  const CurrentDate = new Date();
  const CurrentUTC = CurrentDate.toUTCString();
  const CurrentUnix = CurrentDate.getTime();
  res.json({unix: CurrentUnix, utc: CurrentUTC});
})

app.get("/api/:date?", (req, res) =>{
  const date = req.params;
  if(date){
    const DateParsed = new Date(date.date);
    if(isNaN(DateParsed.getTime())){
      res.json({error: "Invalid Date"});
    }else{
      const UTC = DateParsed.toUTCString();
      const Unix = DateParsed.getTime(); 
      res.json({unix: Unix, utc: UTC});
    }
  }
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
