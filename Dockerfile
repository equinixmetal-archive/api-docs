FROM packethost/nginx
MAINTAINER Sam Tresler "quay@packethost.net"

ADD ./ /usr/share/nginx/html
ADD docker/nginx/developer.packet.net /etc/nginx/sites-available/developer.packet.net    
ADD docker/nginx/htpasswd /etc/nginx/htpasswd

WORKDIR /usr/share/nginx/html

RUN \
  apt-get update && \
  apt-get install -qy npm && \
  ln -s /usr/bin/nodejs /usr/bin/node && \
  npm install -g grunt-cli && \ 
  rm /etc/nginx/sites-enabled/default && \
  ln -s /etc/nginx/sites-available/developer.packet.net /etc/nginx/sites-enabled/default && \
  npm install && \
  grunt compile && \
  mv dist/index.html ./ 

# Define default command.
CMD ["nginx"]

# Expose ports.
EXPOSE 80
EXPOSE 443

