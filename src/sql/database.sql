

SELECT COUNT(Producto), Producto
from venta
GROUP by producto
ORDER by COUNT(Producto) DESC;


SELECT cajeros.NomApels, productos.Nombre,productos.Precio, maquinas_registradoras.Piso
FROM (((venta
INNER JOIN cajeros ON venta.Cajero = cajeros.Cajero)
INNER JOIN productos ON venta.Producto = productos.Producto)
INNER JOIN maquinas_registradoras ON venta.Maquina = maquinas_registradoras.Maquina);

SELECT SUM(productos.Precio),maquinas_registradoras.Piso
FROM ((venta
INNER JOIN productos ON venta.Producto=productos.Producto)
INNER JOIN maquinas_registradoras ON venta.Maquina=maquinas_registradoras.Maquina)
GROUP BY maquinas_registradoras.Piso;


SELECT cajeros.cajero, cajeros.NomApels, SUM(productos.Precio)
FROM ((venta
INNER JOIN cajeros ON venta.Cajero=cajeros.Cajero)
INNER JOIN productos ON venta.Producto=productos.Producto)
GROUP BY venta.Cajero;
