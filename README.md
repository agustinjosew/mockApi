# Mock API - Concepto LBD

<h3 align="center"><img src="https://i.imgur.com/Ypvo6rs.png" alt="logo" height="550px"></h3>

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


> Antes de continuar, prefiero hacer un commit & push de todo lo que voy haciendo hasta el momento, incluida esta documentacion que estoy haciendo en local.
</details>

<details>
<summary>Paso 5 - Crear un paquete . json</summary>

```
Vamos a usar npm init, como es la primera vez que lo vamos a ejecutar dentro del proyecto 
nos crea el archivo package.json, de invocarlo nuevamente lo que hace al detectar que 
ya esta creado es actualizarlo.
```

> 1) npm init

> 2) nos indica las configuraciones basicas

> 3) siguiente siguiente y listo

> 4) tenemos nuestro package.json creado

``` json
{
  "name": "mockapi",
  "version": "1.0.0",
  "description": "mock api test & heroku",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/agustinjosew/mockApi.git"
  },
  "author": "Agustin Jose W",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/agustinjosew/mockApi/issues"
  },
  "homepage": "https://github.com/agustinjosew/mockApi#readme"
}

```
Entonces lo que hacemos en este punto es inicializar el proyecto y crear el archivo package.json

Para mas informacion consulta en [NPM INIT](https://docs.npmjs.com/cli/v7/commands/npm-init) .

</details>

<details>
<summary>Paso 6 - Verificamos que Modulos y Dependencias tenemos de Node</summary>

```
Para esto usamos NPM INSTALL, al no especificar ningun paquete se entiende que se desea 
verificar/instalar todas las dependencias dentro del archivo package.json. 
Esto es habitual, cuando se descargan proyectos o aplicaciones de github por ejemplo, 
ya que las dependencias deben ser instaladas luego de descargar el proyecto 
(por razones de tamaño).
```

> desde la consola ingresamos " npm i "

> nos devuelve el resultado y vemos que  se ha creado un archivo  << package-lock.json >>

> este nuevo archivo es el que SI vamos a tener que enviar al repositorio y nos sirve para indicar las dependencias que tiene nuestro proyecto pero sin necesidad de subir al repositorio las mismas, recordemos que aqui estamos tratando con el tema del tamaño...del repo (?), tambien sirve para que cuando bajemos el contenido tener la posibilidad de elegir versiones previas de las dependencias y optimizar el proceso de instalacion de las mismas evitando tener que resolver de nuevo los metadatos de los paquetes instalados previamente.

> para mas informacion de [PACKAGE-LOCK.JSON](https://docs.npmjs.com/cli/v6/configuring-npm/package-lock-json) .

> volvemos a la consola e instalamos el paquete json-server como una dependencia, hasta ahora lo teniamos solamente en local, pero al hacer este paso agregamos ese requisito al archivo de packages que veniamos creando

> usamos npm i json-server , a continuacion vemos que se crea una nueva carpeta node_modules y dentro de la misma mas carpetas

> en package.json vemos ahora que fue insertado lo siguiente:
``` json
 },
    "dependencies": {
    "json-server": "^0.16.3"
  }
```
> dentro de package.json en la seccion de "scripts" voy a crear una nueva declaracion, necesito algo para invocar que levante el servidor, para eso hacemos lo siguiente, donde dice test al final ponemos una coma y debajo :
``` json
"start": "node servidor.js"
```
> guardamos y creamos el archivo porque lo tenemos declarado pero no creado, en esta parte en especial vemos contenidos especificos de backend, si no estas familiarizado con el tema siempre es bueno ponerse a buscar informacion, la logica de esto es: !) obtener el paquete que acabamos de instalar "json-server", 2) usarlo con "create()" y encapsular todo en la variable servidor, 3) luego con router le indicamos donde esta nuestra base de datos "database.json", 4) y luego usamos middlewares, este concepto a nivel general se indica como una funcion que se puede ejecutar ANTES o DESPUES del manejo de una RUTA, tiene incidencia con el acceso a los objetos de Request-Respondes y next(), pudiendo verificar por ejemplo niveles de acceso ANTES de entrar a la RUTA, manejar errores, validar datos, etc ; por ultimo declaramos un puerto, el 3000, para indicar que puerto vamos a aceptar. 

``` js
const jsonServidor = require('json-server');
const servidor     = jsonServidor.create();
const router       = jsonServidor.router('database.json');
const middlewares  = jsonServidor.defaults();
const puerto       = process.env.PUERTO || 3000;

servidor.use(middlewares);
servidor.use(router);
servidor.listen(puerto);

```
> por ultimo agregamos al .gitignore el renglon node_modules (es el nombre de la carpeta que se creo al usar npm install ) para indicar que no suba los modulos, ya vimos que ocupan mucho espacio y son lentos a veces.

<p align="center">
  <a href="">
    <img src="https://i.imgur.com/W4jCXOB.png">
  </a>
</p>

> commit & push de los cambios y seguimos!
</details>

<details>
<summary>Paso 7 - Instalamos el cliente de heroku</summary>

```
Ahora lo que necesitamos es poder comunicarnos con heroku directamente desde nuesta
terminal, para eso vamos a ver la documentacion de heroku:
```

> https://devcenter.heroku.com/articles/heroku-cli#download-and-install

> segun tu sistema operativo seleccionas el que corresponde e instalamos

> verificamos desde la consola o git-bash el estado de la instalacion usando heroku --version

> asociamos la instalacion a nuestro package.json mediante npm install -g heroku

</details>

<details>
<summary>Paso 8 - Creamos una APP en Heroku desde la consola</summary>

> desde la terminal comun o git-bash indicamos con heroku create nombre-de-la-app

> seguramente aparece un mensaje de error, esto se debe a que nunca nos logueamos desde la interface de heroku, presionamos cualquier tecla y seguimos, vemos el mensaje de confirmacion en la consola y wala! ya tenemos creada la app en el "slot" de heroku

> ahora tenemos que pasar desde nuestra carpeta local a heroku todo el contenido, para evitar errores prefiero usar gitbash directamente por lo siguiente:

```
al momento de usar la combinacion de heroku y mi proyecto tengo que hacer uso 
de la sentencia << PUSH >> concatenando << HEROKU >> y el << BRANCH >> que 
quiero subir, entonces me queda para utilizar: git push heroku main
```

> vemos el log en pantalla de lo que va sucediendo, como va empaquetando, detectandro y creando lo que sea necesario:

``` log
remote:        Procfile declares types -> (none)
remote:
remote: -----> Compressing...
remote:        Done: 51.4M
remote: -----> Launching...
remote:        Released v3
remote:        https://nombre-de-la-app.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/nombre-de-la-app.git
 * [new branch]      main -> main

```

> con eso ya tenemos todo listo para poder usar las funciones de GET POST PUT PATCH DELETE OPTIONS

HAPPY CODING! 

</details>



***

