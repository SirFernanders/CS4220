const
    express = require('express'),
    path = require('path'),
    router = express.Router(),
    superagent = require('superagent')

module.exports = () => {

    router.get('/api/search', (req, res) => {
        const show  = req.query.show // this is the same as const show = req.query.show
        const type = req.query.type
        const artistID = req.query.id

      //  https://api.spotify.com/v1/search?type=album&q=artist%3Aabba&market=US
        superagent
            .get('https://api.spotify.com/v1'+artistID+'/'+ type + show)
            .end((err, response) => {
                if (err)
                    res.send(err)
                else
                    if(show===""){
                        res.json(response.body.items)
                        console.log(response.body.items)

                    }
                    else
                    res.json(response.body.artists.items)


            })
    })

    router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'))
    })

    return router
}