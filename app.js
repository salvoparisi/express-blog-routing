const express = require('express');
const routers = require('./routers/posts.js')
const app = express();
const PORT=3000

app.listen(PORT, () => {
    console.log(`Server listening http://localhost:${PORT}`)
});

app.get('/post', routers.index)
app.get('/post/:slug', routers.show)
