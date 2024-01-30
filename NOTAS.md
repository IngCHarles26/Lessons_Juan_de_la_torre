### 01. ADMINISTRADOR DE CITAS
 - jsx significa *javascript sintax extension*.
 - vite requiere que los componentes siempre tengan la extension *.tsx*
 - instalar ```npm i -D tailwindcss postcss autoprefixer```
 - crear el archivo configurador de tailwind ```npx tailwindcss init -p```
 - agregar las directivas de tailwindcss al archivo *index.css*
 ```css
 //index.css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
 ```
 - Para indicar que componentes van a utilizar tailwind, se debe de indicar en el archivo ```tailwind.config.js``` los archivos (aqui se le está indicando que lo aplique al archivo principal html y a todos los archivos de la carpeta src que tengan la extesion tsx)
 ```js
  content: ['./index.html','./src/**/*.tsx'],
 ```

 - Asi como existe *alert* podemos utilizar el *confirm* para confirmar una accion en el navegador
 - Para guardar algo en el loocal storage, utilizamos 
 ```js
  localStorage.setItem('nombre_variable',JSON.stringify(variable))
 ```
 - Para cargar los datos del local storage se hace en la siguiente manera
 ```js
  JSON.parse(localStorage.getItem('nombre_variable')) ?? []
 ```


### 