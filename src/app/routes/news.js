const dbconnection = require('../../config/dbconnection');

module.exports=app=>{
  const connection=dbconnection();

  app.get('/',(req,res)=>{
    connection.query('SELECT * FROM news',(err,result)=>{
        res.render('news/news',{
          news:result
        });
    });
  });

  app.post('/productos',(req,res)=>{
    const {producto,nombre,precio}=req.body;
    connection.query('INSERT INTO productos SET?',{
      producto,
      nombre,
      precio
    },(err,result) =>{
      res.redirect('/')
    });
  });
}
