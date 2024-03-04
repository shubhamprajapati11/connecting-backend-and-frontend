import express  from "express"
const app = express()

app.get('/', (req, res)=>{
    res.send('Server is ready')
})

app.get("/api/jokes", function(req, res){
    const jokes = [
        {
            id: 1,
            title: "1 Joke"
        },
        {
            id: 2,
            title: "2 Joke"
        },
        {
            id: 3,
            title: "3 Joke"
        },
        {
            id: 4,
            title: "4 Joke"
        },
        {
            id: 5,
            title: "5 Joke"
        },
        {
            id: 6,
            title: "6 Joke"
        }
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log(`Server is listening on the port ${port}`)
})