//jshint esversion:6
// require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs=require("ejs");
const request=require('request');
const fetch = require('node-fetch');
// const _=require("lodash");
// console.log(process.env.SECRET);
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// userSchema.plugin(encrypt, { secret:process.env.SECRET,encryptedFields: ["password"] });







app.get("/",function(req,res){
    res.render('home', {
        city: null,
        des: null,
        icon: null,

              temp: null,
              temp1:null,
              temp2:null,
              temp3:null,
              temp4:null,
              temp5:null,
              temp6:null,

              humidity:null, humidity1:null, humidity2:null, humidity3:null, humidity4:null, humidity5:null, humidity6:null,
              
              rain:null,rain1:null,rain2:null,rain3:null,rain4:null,rain5:null,rain6:null


      });
})


app.post('/', async (req, res) => {
    const city = req.body.city;
    const url='http://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=metric&appid=API_KEY';
    try {
        await fetch(url)
          .then(res => res.json())
          .then(data => {
            console.log(data.cod);
            if (data.message === 'city not found') {
              res.render('home', {
                city: data.message,
                des: null,
                icon: null,

                temp: null,
                temp1:null,
                temp2:null,
                temp3:null,
                temp4:null,
                temp5:null,
                temp6:null,

                humidity:null, humidity1:null, humidity2:null, humidity3:null, humidity4:null, humidity5:null, humidity6:null,
              
                rain:null,rain1:null,rain2:null,rain3:null,rain4:null,rain5:null,rain6:null

              });
            } else {
              const city = data.city.name;
              const des = data.list[0].weather[0].description;
              const icon = data.list[0].weather[0].icon;

              const temp = data.list[0].main.temp;
              const temp1=data.list[1].main.temp;
              const temp2=data.list[2].main.temp;
              const temp3=data.list[3].main.temp;
              const temp4=data.list[4].main.temp;
              const temp5=data.list[5].main.temp;
              const temp6=data.list[6].main.temp;
              
              const humidity=data.list[0].main.humidity;
              const humidity1=data.list[1].main.humidity;
              const humidity2=data.list[2].main.humidity;
              const humidity3=data.list[3].main.humidity;
              const humidity4=data.list[4].main.humidity;
              const humidity5=data.list[5].main.humidity;
              const humidity6=data.list[6].main.humidity;

              const rainObj=data.list[0].rain;
              const rainObj1=data.list[1].rain;
              const rainObj2=data.list[2].rain;
              const rainObj3=data.list[3].rain;
              const rainObj4=data.list[4].rain;
              const rainObj5=data.list[5].rain;
              const rainObj6=data.list[6].rain;
              var rain='';
              var rain1='';
              var rain2='';
              var rain3='';
              var rain4='';
              var rain5='';
              var rain6='';

              if(rainObj==undefined){
                rain=0;
              }
              else{
                rain=rainObj['3h'];
              }

              if(rainObj1==undefined){
                rain1=0;
              }
              else{
                rain1=rainObj1['3h'];
              }

              if(rainObj2==undefined){
                rain2=0;
              }
              else{
                rain2=rainObj2['3h'];
              }

              if(rainObj3==undefined){
                rain3=0;
              }
              else{
                rain3=rainObj3['3h'];
              }

              if(rainObj4==undefined){
                rain4=0;
              }
              else{
                rain4=rainObj4['3h'];
              }

              if(rainObj5==undefined){
                rain5=0;
              }
              else{
                rain5=rainObj5['3h'];
              }

              if(rainObj6==undefined){
                rain6=0;
              }
              else{
                rain6=rainObj6['3h'];
              }
             
              // console.log(rain);
  
              res.render('home', {
                city, des, icon, 
                temp,temp1,temp2,temp3,temp4,temp5,temp6,
                
                humidity, humidity1, humidity2, humidity3, humidity4, humidity5, humidity6,
                
                rain,rain1,rain2,rain3,rain4,rain5,rain6
              });
            }
          });
        } catch (err) {
          console.log(err);
            res.render('home', {
              city: 'something wrong',
              des: null,
              icon: null,

              temp: null,
              temp1:null,
              temp2:null,
              temp3:null,
              temp4:null,
              temp5:null,
              temp6:null,

              humidity:null, humidity1:null, humidity2:null, humidity3:null, humidity4:null, humidity5:null, humidity6:null,
              rain:null,rain1:null,rain2:null,rain3:null,rain4:null,rain5:null,rain6:null

            });
          }
    
});


 








// 37ab35c275425b4bafeda9ab4e4d466e





let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}








app.listen(port,function(){
    console.log("server has started");
});