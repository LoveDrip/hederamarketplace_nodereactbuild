const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const cors = require('cors');





const app = express();
app.use(cors());
app.use(express.json());
// app.get('/', (req, res) => {

//     res.send('Hello World!')

//     res.setHeader('X-Foo', 'bar')

// })

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/frontend')));

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname + '/frontend', 'index.html'));
});
app.listen(port, () => console.log("server started at 5000"));