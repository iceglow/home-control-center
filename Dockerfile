FROM node:9

WORKDIR /app/

COPY server.js package.json angular.json tsconfig.json tslint.json karma.conf.js /app/
COPY routes/ /app/routes/
COPY src/ /app/src/

RUN npm i npm@latest -g && \
    npm install && \
    node_modules/@angular/cli/bin/ng build && \
    rm -rf src && \
    cd -

EXPOSE 80

ENTRYPOINT ["node", "server.js"]
