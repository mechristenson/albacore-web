FROM node:alpine
MAINTAINER Mark Christenson "mark.evan.christenson@gmail.com"
LABEL Description="Albacore Web App" Version="1.0"

EXPOSE 3000
ENV HOME albacore

ADD . $HOME

WORKDIR $HOME

ENTRYPOINT npm start
