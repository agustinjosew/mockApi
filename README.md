# Mock API - Concepto LBD

<h3 align="center"><img src="https://i.imgur.com/Ypvo6rs.png" alt="logo" height="550px"></h3>


<p align="center">
  <a href="">
    <img src="https://img.shields.io/badge/template-tmpMsg-success">
  </a>
</p>

***

# Que vamos a realizar:

```
Crear una version simulada de API funcional con JSON-Server y Heroku en pocos minutos, 
lista para usar de manera minima.
```

***

# Manos a la obra:

<details>
<summary>Paso 1 - Base de Datos</summary>

```
Crear la base de datos.
```

>  database.json

> Crear el esqueleto:
```json
  {
            "id" : 0,
            "zona": "Centrica",
            "item": "Mochila",
            "caractetistica": "Moto blanca y negra, sin patente, dos ocupantes masculinos",
            "direccion" :[
                {
                    "direccionId" : "0",
                    "numero": "1810",
                    "nombre": "25 de mayo",
                    "codigoPostal": "4000",
                    "provincia": "donde vos quieras"
                }
            ]
        },
```

> Podes usar lo que vos quieras, siempre respetando el formato JSON

</details>


<details>
<summary>Paso 2 - Instalar paquete</summary>

```
Obtener paquete para poder crear la base de datos online
```

>  npm install -g json-server

<p align="center">
  <a href="">
    <img src="https://i.imgur.com/sdRNrvT.png">
  </a>
</p>

</details>

</details>


<details>
<summary>Paso 3 - Iniciar servidor Json</summary>

```
Levantar el servidor Json indicando [ database.json ] como origen de datos:
```

>  json-server --watch database.json

<p align="center">
  <a href="">
    <img src="https://i.imgur.com/lfXVL8w.png">
  </a>
</p>

> Y ahi podemos ver que levanta el servidor con los datos de [ database.json ] y nos indica como URL de  visualizacion en :

```
Resources
  http://localhost:3000/incidencias

  Home
  http://localhost:3000
```
<p align="center">
  <a href="">
    <img src="https://i.imgur.com/i4CZ8oZ.png">
  </a>
</p>

</details>

<details>
<summary>Paso 4 - Registarnos en Heroku</summary>

```
Para registrarnos vamos a Heroku, en el caso que ya estemos registrados solamente iniciamos sesion 
y completamos los campos.
```

> heroku.com

> Iniciamos sesion o nos registramos

> Seleccionamos donde dice Create a new app , en mi caso prefiero hacerlo directamente desde la terminal :)

<p align="center">
  <a href="">
    <img src="https://i.imgur.com/24XAR7T.png">
  </a>
</p>
</details>

> Antes de continuar, prefiero hacer un commit & push de todo lo que voy haciendo hasta el momento, incluida esta documentacion que estoy haciendo en local.


***

