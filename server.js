const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port||5000;
 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers',(req,res) => {
    res.send([
        {
            'id' : 1,
            'image' : 'https://placeimg.com/64/64/1',
            'name' : '홍길동',
            'birthday' : '891111',
            "gender" : 'female',
            'job' : 'student'
          
          },
          {
            'id' : 2,
            'image' : 'https://placeimg.com/64/64/2',
            'name' : '이순신',
            'birthday' : '090919',
            "gender" : 'female',
            'job' : 'student'
          },
          {
            'id' : 3,
            'image' : 'https://placeimg.com/64/64/3',
            'name' : '윤관중',
            'birthday' : '081010',
            "gender" : 'female',
            'job' : 'student'
          }
    ]);
});

app.listen(port,() =>console.log(`Listening on port ${port}`));
//app.listen(5000,console.log("5000서버"))
 
 