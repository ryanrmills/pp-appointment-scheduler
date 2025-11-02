// Import the express module
import express from 'express';

// Create an instance of an Express application
const app = express();

// Define the port number where our server will listen
const PORT = 3011;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Define a default "route" ('/')
// req: contains information about the incoming request
// res: allows us to send back a response to the client
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/index.html`);
});

app.get("/admin", (req, res) => {
      console.log(appointmentsArray)
      res.sendFile(`${import.meta.dirname}/views/admin.html`);
      res.json({adminAppointments : appointmentsArray});
  });

// Add a route for the form submission

const appointmentsArray = []

app.post('/submit', (req, res) => {


    // Create a JSON object to store the order data

    const appointment = {

        fname: req.body.fname,

        lname: req.body.lname,

        date: req.body.date,

        time: req.body.time,

        timestamp: new Date()

      };

    appointmentsArray.push(appointment);
    console.log(appointmentsArray);
    res.sendFile(`${import.meta.dirname}/views/response.html`)
});

// Start the server and listen on the specified port 
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
}); 

