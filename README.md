## Run docker file for nodejs demo server
[More Details](https://onexlab-io.medium.com/docker-node-js-hello-world-ed6c4d16a292)

### 1. Install [Docker](https://www.docker.com/products/docker-desktop/)

### 2. Complete sign in process

### 3. Create `Dockerfile` file in root directrory (example is in)

### 4. Build the project as follow before run
```
docker build -t nodejs .
``` 

### 5. Show all available docker images
```
docker images
```

### 6. Run a docker image
```
# docker run -d -p 3000:3000 --name nodejs nodejs
```

### 7. Get status of runnig all docker images
```
docker ps
```

### 8. Stop running docker image
```
docker stop nodejs
```

### 9. Verify that the container has stopped
```
docker ps
```

### 10 . Remove the stopped container, if not need in future use
```
docker rm ndoejs
```

* Access the app `http://localhost:3000`