let express = require('express');

let bodyParser = require('body-parser');

let app = express();

let commons = [
  {
    name:'张三1',
    message:'今天天气真不错',
    dateTime:new Date()
  },
  {
    name:'张三2',
    message:'今天天气真不错',
    dateTime:new Date()
  },
  {
    name:'张三3',
    message:'今天天气真不错',
    dateTime:new Date()
  },
  {
    name:'张三4',
    message:'今天天气真不错',
    dateTime:new Date()
  }, {
    name:'张三5',
    message:'今天天气真不错',
    dateTime:new Date()
  },
  {
    name:'张三6',
    message:'今天天气真不错',
    dateTime:new Date()
  }
  ];

app.use('/public',express.static('./public/'));

//配置body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//配置使用art-template模板引擎
app.engine('html', require('express-art-template'));


app.get('/',function (req,res) {
 res.render('index.html',{commons:commons});
})
app.get('/admin',function (req,res) {
  res.render('admin/index.html',{
    title:'管理页面'
  });
})
app.post('/post',function (req,res) {
  // console.log('收到表单post请求');
  // console.log(req);
  //在express中获取post数据 使用第三方body-parser
  let body = req.body;
  console.log(req.body);
  commons.push({
    name:body.name,
    message:body.message,
    dateTime:new Date()
  });

  res.redirect('/')
})
app.get('/post',function (req,res) {
  res.render('post.html');
})

app.listen(3000,function () {
    console.log('Service Is Running');
});