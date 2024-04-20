const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'web_ardika'
});

app.post('/test', (req, res) => {
    const sql = "SELECT * FROM test where email = ?";
    const values = [
        req.body.email,
        req.body.description
    ]
    db.query(sql, [values], (err,data) => {
        if(err){
            console.log(err);
            res.status(500).send('Internal server error');
        } else {
            res.status(200).send(data);
        }
    })
}
);


app.listen(8081, () => {
    console.log('Server is running on port 8081');
});
