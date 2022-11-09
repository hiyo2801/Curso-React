# MayDay - Ecoomerce
MayDay es un proyecto ecommerce de una tienda ficticia de venta de artículos de tatuaje para el curso [ReactJS] de Coderhouse.

## :nut_and_bolt: Tecnologias
Para modificar este proyecto es necesario saber las tecnologias basicas de la web `html`, `css` y `javascript`. Adicional a esto, la aplicación fue construida usando las siguientes tecnologias:

* [React](https://reactjs.org/) \
Libreria para `JavaScript` que nos ayuda a construir interfaces reactivas.
* [Firebase](https://firebase.google.com/) \
Plataforma de desarrollo de Google, que nos sirve de backend para usar los servicios de base de datos llamado `firestore` y la autentificación de usuarios (login).
* [React Toastify](https://fkhadra.github.io/react-toastify/how-to-style/) \
Libreria para `react` usado para mostrar notificaciones al usuario sobre eventos correctos o incorrectas en la aplicación. *Por ejemplo: cuando se agrega un producto al carrito, cuando los correos no coinciden, cuando no hay stock suficiente, etc.*
* [react-qr-code](https://rosskhanas.github.io/react-qr-code/)
Libreria para `react` que nos permite generar una imagen con codigo qr. En nuestro caso se genera un codigo qr en cada venta, asi en un entorno real sirve para un consulta rápida de la compra tanto por parte de comprador como de la empresa que vende.
* [Sass](https://sass-lang.com/) \
Es un pre-procesador para `css`. Es con el que esta escrito todo el estilo de esta aplicación.\
*La aplicacion es pequeña por lo que no se uso algún otro framework o complemento css por el peso de estos.*
* [Box Icons](https://boxicons.com/)\
Es una coleccion de iconos usados en este proyecto.

## :books: Firebase
Para replicar este proyecto necesitaras, adicional al código fuente, un backend como `firebase` donde hacer las peticiones.

> :warning: IMPORTANTE :warning:\
> Recuerda remplazar tus credenciales de firebase en el archivo `.env`.

### firestore
Es una base de datos `NoSql` donde guardamos los productos, categorias y ordenes. Debe tener las siguientes colecciones:

**categories**
```javascript
Categorías de produtos a vender
```

**products**
```javascript
Lista de productos que se comeecializarán
```

**orders**
```javascript
Colección donde se geristrrán los datos de cada compra realizada, se incluyen
    * Datos del compradoor
    * Detalles de la compra
```

### authentication
Para que los compradores puedan identificarse con sus redes sociales(`google` y `facebook`), en lugar de llenar el formulario con sus datos, debes habilitar el modulo `authentication` y agregar los proveedores(providers) respectivos.

> De momento no se puede realizar la autentificación de facebook, por problemas en la implementación.
