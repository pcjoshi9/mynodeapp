# To build this app
$ docker build -t mynodeapp . --no-cache

# To run this app
$ docker run -p 4900:8080 -d mynodeapp

# To test this app 
$ curl -i localhost:4900

# To test the shared core 
$ http://localhost:4900/core


