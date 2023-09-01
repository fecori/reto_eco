# Para iniciar Reactjs con docker

### Compilar imagen
docker build -f Dockerfile.dev -t react_eco .

### Iniciamos el contenedor
docker run -p 3000:3000 react_eco:latest

### Verificamos que este creado el contenedor
docker container ps

# Iniciar Reactjs sin docker

### Instamalos las dependencias npm
npm install

### Iniciamos el proyecto
npm run start

### Se inicia automaticamente en el navegador con la siguiente url
[http://localhost:3000](http://localhost:3000)
