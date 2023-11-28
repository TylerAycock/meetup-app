// /api/new-meet-up
// POST /api/new-meetup

import { MongoClient } from 'mongodb'

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body

        // const { title, image, address, description } = data

        const client = await MongoClient.connect('mongodb+srv://tyleraycock:rTs2dS6aWCj0WAiP@cluster0.afuimig.mongodb.net/meetups?retryWrites=true&w=majority')
        const db = client.db()

        const meetupsCollection = db.collection('meetups') //can name this whatever you want 

        const result = await meetupsCollection.insertOne({ data })

        console.log(result)

        client.close()

        res.status(201).json({ message: 'Meetup Inserted!' })
    }
}

export default handler 