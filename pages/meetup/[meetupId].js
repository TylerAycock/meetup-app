//we can connect this to an actual backend which allows you to make a pull request and then display specific data 
//this page is pulled up from the meetup item component when a user clicks the buttons activating the router functionality with its pull request 
import { MongoClient, ObjectId } from "mongodb"
import MeetupDetail from "@/components/meetups/MeetupDetail"
import Head from "next/head"

const MeetUpDetails = (props) => {

    const { image, title, address, description } = props.meetupData.data
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content={description}
                />
            </Head>
            <MeetupDetail
                image={image}
                title={title}
                address={address}
                description={description}
            />
        </>
    )
}

//api call to get staticPaths

export async function getStaticPaths() {
    const client = await MongoClient.connect(
        'mongodb+srv://tyleraycock:rTs2dS6aWCj0WAiP@cluster0.afuimig.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()

    // console.log(meetups)

    client.close()

    return {
        fallback: 'blocking', //can also put true
        paths: meetups.map(meetup => ({
            params: {
                meetupId: meetup._id.toString()
            }
        }))
    }
}

export async function getStaticProps(context) {

    //fetch the unique id
    const meetupId = context.params.meetupId

    //convert the meetupId to an ObjectId
    const id = new ObjectId(meetupId.toString())

    //connect to the db
    const client = await MongoClient.connect(
        'mongodb+srv://tyleraycock:rTs2dS6aWCj0WAiP@cluster0.afuimig.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db()

    const meetupsCollection = db.collection('meetups')


    //finding the selected ID 
    const selectedMeetup = await meetupsCollection.findOne({ _id: id })

    // Convert ObjectId to string 

    const serializedMeetupData = {
        ...selectedMeetup,
        _id: selectedMeetup._id.toString(),
    };

    // console.log(selectedMeetup)
    // console.log(`meetup ID: ${meetupId}`)
    // console.log(serializedMeetupData)

    client.close()

    return {
        props: {
            meetupData: serializedMeetupData
        }
    }

}

// this is hard coded as an example but in general will be dynamically generated 
// export async function getStaticPaths() {
//     return {
//         paths: [
//             {
//                 params: {
//                     meetupId: 'm1'
//                 }
//             },
//             {
//                 params: {
//                     meetupId: 'm2'
//                 }
//             },
//             {
//                 params: {
//                     meetupId: 'm3'
//                 }
//             }
//         ],
//         fallback: false
//     }
// }

//using dummy data to display prerendered content 

// export async function getStaticProps(context) {
//     //fetch the data for a single meetup 
//     const meetupId = context.params.meetupId

//     //this will show up in the developer tools below not on the page 
//     console.log(meetupId)
//     return {
//         props: {
//             meetupData: {
//                 image: 'https://picsum.photos/800/500',
//                 id: meetupId,
//                 title: 'First Meet Up',
//                 address: 'Some Street 5, 12345 Some City',
//                 description: 'This is a first meet up'
//             }
//         }
//     }
// }

export default MeetUpDetails