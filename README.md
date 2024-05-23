docker build -t user-guide:1.0.0 .
docker run -p 127.0.0.1:4040:80 --name user-guide user-guide:1.0.0
ssh debian@137.74.94.24 -p 5122
configure nginx