const dbconnection = require('../../config/dbconnection');

module.exports=app=>{
  const connection=dbconnection();

  app.get('/inicio',(req,res)=>{
    connection.query('SELECT * FROM productos',(err,result)=>{
      res.send(result);
      console.log(result);
      //res.render('news/news',{
        //  news:result
      //  });
    });
  });

  app.post('/productos',(request,res)=>{
    const {Producto, Nombre, Precio}=request.body;
    console.log(request.body);
    connection.query('INSERT INTO productos SET?',{
      Producto,
      Nombre,
      Precio
    },(err,result) =>{
      if(err){
        res.send(err.message);
      }
      res.send("datos guardados")
    });
  });

    app.post('/cajeros',(req,res)=>{
      const {Cajero,NomApels}=req.body;
      connection.query('INSERT INTO Cajeros SET?',{
        Cajero,
        NomApels
      },(err,result) =>{
        if(err){
          res.send(err.message);
        }
        res.send('Datos guardados')
      });
    });

    app.post('/maquinas',(req,res)=>{
      const {Maquina,Piso}=req.body;
      connection.query('INSERT INTO Maquinas_registradoras SET?',{
        Maquina,
        Piso
      },(err,result) =>{
        if(err){
            res.send(err.message);
        }
        res.send('datos guardados')
      });
    });

    app.post('/venta',(req,res)=>{
      const {Cajero,Maquina,Producto}=req.body;
      connection.query('INSERT INTO venta SET?',{
        Cajero,
        Maquina,
        Producto
      },(err,result) =>{
        if(err){
          res.send(err.message);
        }
        res.send('se han guardados los datos');
      });
    });

    app.get('/ventasproduct',(req,res)=>{
      connection.query('SELECT COUNT(Producto), Producto from venta GROUP by producto ORDER by COUNT(Producto) DESC',(err,result)=>{
        res.send(result);
        console.log(result);
      });
    });

}
