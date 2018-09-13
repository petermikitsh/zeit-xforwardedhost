const express = require('express');
const app = express();

/*
 * The value of req.hostname is derived from the value set in the 
 * X-Forwarded-Host header, which can be set by the client or by
 * the proxy.
 */
app.set('trust proxy', true); 

app.get('/', (req, res) => res.send(req.hostname));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
