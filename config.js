var express = require("express");
var mysql = require("mysql2");
var app = express();
app.use(express.json());

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ayan*2001',
    database: 'ndb'
});

con.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
    } else {
        console.log("Connected to the database!");
    }
});

app.post('/post', (req, res) => {
    const Person_Name = req.body.Person_Name;
    const location = req.body.location;
    const About = req.body.About;
    const Bio = req.body.Bio;
    const Follower_Count = req.body.Follower_Count;
    const Connection_Count = req.body.Connection_Count;

    con.query('insert into mytable values(?,?,?,?,?,?)', [Person_Name, location, About, Bio, Follower_Count, Connection_Count], (err, result) => {
        if (err) {
            console.error("Error inserting data:", err); // Log the error message
            res.status(500).json({ error: "Failed to insert data" }); // Send an error response to the client
        } else {
            console.log("Posted");
            res.status(200).json({ message: "Data posted successfully" }); // Send a success response to the client
        }
    });
});


const PORT = 3306; // Define the port number

app.listen(PORT, (err) => {
    if (err) {
        console.error("Error:", err);
    } else {
        console.log("Listening on port", PORT);
    }
});
