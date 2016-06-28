# trailpack-realtime
:package: Realtime Trailpack. Synchronize the client and server via WebSockets

## Getting Started

### Install

```js
npm install --save trailpack-realtime
```

Then edit `config/main.js `

```js
packs: [
    require('trailpack-core'),
    require('trailpack-repl'),
    require('trailpack-router'),
    require('trailpack-express'), 
    require('trailpack-realtime')
  ],
```

### Configure

Create the config file: `config/realtime.js `

```js
module.exports = {
  primus:{
    options:{
      //these options are passed directly to the Primus constructor: https://github.com/primus/primus#getting-started
    }
  } 
};
```

## Client

You can include the primus client library as a script:
```
<script src="/primus/primus.js"></script>
```

