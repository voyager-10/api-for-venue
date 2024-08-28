const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors());

// Sample data
const data = [
    {
        id: 1,
        title: "Annual Gala",
        image: "https://thumbs.dreamstime.com/b/fashion-show-crowd-20590373.jpg",
        description: "Join us for the Annual Gala where we celebrate achievements and enjoy an evening of entertainment."
    },
    {
        id: 2,
        title: "Tech Conference 2024",
        image: "https://www.thedigitalbridges.com/wp-content/uploads/2018/02/tech-conference.jpg",
        description: "A conference featuring the latest trends and innovations in technology. Network with industry experts."
    },
    {
        id: 3,
        title: "Summer Music Fest",
        image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "Experience live performances from top bands and artists at our Summer Music Fest."
    },
    {
        id: 4,
        title: "Art Exhibition",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*9NJlqVUQpUbPm1ptkCKI0w.jpeg",
        description: "Explore a diverse range of artworks from local and international artists at the Art Exhibition."
    },
    {
        id: 5,
        title: "Startup Pitch Night",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYubrgQ_tS1XVdQiVlcSA_fgoR6r7Wqo2hC2oMRAna-9TiTKtCTPfNkWZc2faWY8umEK4&usqp=CAU",
        description: "Watch promising startups pitch their ideas to investors and industry leaders at Startup Pitch Night."
    },
    {
        id: 6,
        title: "Film Festival",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9QOcUa-tEgA9w6wtj8nn1BZrCz0zj_FpntzKEYRlbjBAL8siP0C9kR2Ss1cnnh1fIPMo&usqp=CAU",
        description: "Enjoy a curated selection of films from around the world at our Film Festival. Experience diverse storytelling and cinematic artistry."
    }
];

// API endpoint to serve the data
app.get('/', (req, res) => {
    res.json(data);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

