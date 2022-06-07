const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let coffee = {
    'monte real': {
        'flavor': 'chocolate',
        'acidity': '5/10',
        'rarity': 'uncommon',
        'roast': 'dark',
        'profile': 'bold'

    },
 
    'bustelo': {
        'flavor': 'regular',
        'acidity': '6/10',
        'rarity': 'common',
        'roast': 'dark',
        'profile': 'bold'

    },

    'folgers': {
        'flavor': 'hazelnut',
        'acidity': '3/10',
        'rarity': 'common',
        'roast': 'medium',
        'profile': 'medium'

    },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    response.json(coffee)
  })

app.get('/api/:name', (request, response) => {
    const coffeeName = request.params.name.toLowerCase()
    if(coffee[coffeeName]){
        response.json(coffee[coffeeName])
    }else{
        response.json(coffee['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})