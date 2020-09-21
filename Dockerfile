###
### Compile Typescript code
###
FROM node:13 as tsc-builder
WORKDIR /usr/src/app

# Install OS deps
RUN \
  apt-get update && \
  apt-get install -qq -y build-essential --no-install-recommends

# Install build deps
COPY package.json .
RUN npm install
COPY . .

# Build
RUN npm run tsc

###
### Build production image
###
FROM node:13 as runtime-container
WORKDIR /usr/src/app

# Install OS deps
RUN \
  apt-get update && \
  apt-get install -qq -y --fix-missing --no-install-recommends \
      pdftk \
      poppler-utils \
      ghostscript

COPY --from=tsc-builder /usr/src/app/dist ./dist
COPY --from=tsc-builder /usr/src/app/package.json ./
COPY --from=tsc-builder /usr/src/app/package-lock.json ./

COPY covers ./covers

RUN npm ci --production

CMD [ "npm", "run", "serve" ]
