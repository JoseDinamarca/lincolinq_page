#

<p align="center">
  <img src=src/img/logo_devpro.png alt="Logo Dev & Pro"/>
</p>

#

## Descripción de repositorio

Este repositorio almacena el sitio web de la consultora Dev&Pro. Esto permitirá revisar cambios y servir de guía para futuras iteraciones del mismo sitio web.

#

## Clonación de proyecto

Para poder realizar cambios al proyecto de sitio, este debe ser clonado en su equipo para poder trabajar la edición del código fuente. Para esto utilizaremos el siguiente comando:
```
git clone https://github.com/DevProConsultora/website
```

#

## Verifica en que rama estas trabajando

El proyecto cuenta con diversas ramas en su desarrollo, algunas más avanzadas que otras, es por eso que es importante revisar en que rama estás trabajando, esto lo puedes hacer con el siguiente comando, que te entregará la lista de todas las ramas, destacando en cual te encuentras actualmente.
```
git branch
```
Si deseas cambiarte de rama, debes utilizar el siguiente comando:
```
git checkout [rama]
```
Finalmente, si deseas realizar otras acciones relacionadas a las ramas, es preferible que consultes la [documentación oficial de git](https://git-scm.com/docs/git-branch) respecto a las ramas y sus distintas opciones de trabajo.

#

## Instalación de proyecto

Al estar trabajando con **Vue.js** y dependencias de **Node.js**, debemos realizar las instalaciones pertinentes sobre nuestro repositorio recién clonado para poder trabajar y montar el proyecto sin problemas, para eso utilizaremos el gestor de paquetes npm a través del siguiente comando:
```
npm install
```

### Compilación y recarga en el desarrollo

Para poder compilar, montar y recargar nuestra aplicación web debemos utilizar el siguiente comando:
```
npm run serve
```

### Montar servidor

Ya que nuestro sitio web realiza ciertas acciones desde el lado del servidor, es importante montarlo al momento de trabajar para hacer las pruebas de manera correcta. Dicho servidor se monta en el puerto 3000 y se inicia con el siguiente comando:
```
node server.js
```

### Compilación y build de producción

Finalmente, para que nuestro proyecto pueda ser pasado a producción, debemos utilizar el siguiente comando:
```
npm run build
```
