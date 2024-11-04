const express = require('express');
const app = express();
const routers = require('./routers/posts.js');
const PORT=3000

app.listen(PORT, () => {
    console.log(`Server listening http://localhost:${PORT}`)
});

app.use('/posts', routers)
