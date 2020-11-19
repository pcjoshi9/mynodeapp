# To build this app
$ docker build -t mynodeapp .

# To run this app
$ docker run -p 4900:8080 -d mynodeapp

# To test this app 
$ curl -i localhost:4900
