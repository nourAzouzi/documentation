FROM httpd:2.4
WORKDIR /var/www/html/user-guide
RUN apt-get update && \
    apt-get install --no-install-recommends -y \
    ca-certificates libapache2-mod-auth-openidc
COPY build .
COPY httpd.conf /usr/local/apache2/conf/
