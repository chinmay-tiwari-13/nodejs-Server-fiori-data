const express = require('express');
const app = express();
const port = 3023;

app.use(express.json());

let data = [
  {
    id: 1,
    driver: "Max Verstappen",
    constructor: "Red Bull Racing",
    country: "Netherlands",
    wins: 55,
    podiums: 98,
    points: 2500
  },
  {
    id: 2,
    driver: "Lewis Hamilton",
    constructor: "Mercedes",
    country: "United Kingdom",
    wins: 103,
    podiums: 197,
    points: 4500
  },
  {
    id: 3,
    driver: "Charles Leclerc",
    constructor: "Ferrari",
    country: "Monaco",
    wins: 5,
    podiums: 32,
    points: 1000
  },
  {
    id: 4,
    driver: "Lando Norris",
    constructor: "McLaren",
    country: "United Kingdom",
    wins: 1,
    podiums: 15,
    points: 700
  },
  {
    id: 5,
    driver: "Fernando Alonso",
    constructor: "Aston Martin",
    country: "Spain",
    wins: 32,
    podiums: 105,
    points: 2100
  },
  {
    id: 6,
    driver: "Sergio Pérez",
    constructor: "Red Bull Racing",
    country: "Mexico",
    wins: 6,
    podiums: 35,
    points: 1400
  },
  {
    id: 7,
    driver: "George Russell",
    constructor: "Mercedes",
    country: "United Kingdom",
    wins: 1,
    podiums: 12,
    points: 650
  },
  {
    id: 8,
    driver: "Carlos Sainz",
    constructor: "Ferrari",
    country: "Spain",
    wins: 3,
    podiums: 18,
    points: 900
  },
  {
    id: 9,
    driver: "Oscar Piastri",
    constructor: "McLaren",
    country: "Australia",
    wins: 0,
    podiums: 4,
    points: 300
  },
  {
    id: 10,
    driver: "Yuki Tsunoda",
    constructor: "RB (Visa Cash App)",
    country: "Japan",
    wins: 0,
    podiums: 0,
    points: 150
  }
];

app.get('/pooraData' , (req,res) => {
    res.json(data);
}); 

app.get('/yeWalaData/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const specificData = data.find((data) => {
        if(data.id === id){
            return data;
        }
    });
    res.json(specificData);
});

app.post('/addKarData', (req,res) => {
    const tempData = {
        id: req.body.id,
        driver: req.body.driver,
        constructor: req.body.constructor,
        country: req.body.country,
        wins: req.body.wins,
        podiums: req.body.podiums,
        points: req.body.points
    };
    data.push(tempData);
    res.status(201).json(tempData);
});

app.put('/updateKarData/:id', (req,res) => {
    const id = req.params.id;
    data.find((data) => {
        if(data.id === id){
            data.driver = req.body.driver;
            data.constructor = req.body.constructor;
            data.country = req.body.country;
            data.wins = req.body.wins;
            data.podiums = req.body.podiums;
            data.points = req.body.points;
        }
        return data;
    });
});

app.delete('/deleteKarData/:id', (req, res) => {
    const id = req.params.id;
    const deletedData = data.find((data) => {
        if(data.id === id){
            return data;
        }
    });
    data.pop(deletedData);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});



