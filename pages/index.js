import { MongoClient } from "mongodb"
import MeetupList from "../components/meetups/MeetupList"

// const Dummy_Meetups = [
//     {
//         id: 'm1',
//         title: 'First meetup',
//         image: 'https://picsum.photos/200',
//         address: 'Some Address 5, 12345 Some City',
//         description: 'This is our first meetUp'
//     },
//     {
//         id: 'm2',
//         title: 'Second meetup',
//         image: 'https://picsum.photos/200',
//         address: 'Some Address 5, 12345 Some City',
//         description: 'This is our first meetUp'
//     },
//     {
//         id: 'm3',
//         title: 'Third meetup',
//         image: 'https://picsum.photos/200',
//         address: 'Some Address 5, 12345 Some City',
//         description: 'This is our first meetUp'
//     }
// ]

const HomePage = (props) => {

    return (
        <MeetupList meetups={props.meetups} />
    )
}

//the following ex is for API calls to the mongoDB

export async function getStaticProps() {

    const client = await MongoClient.connect(
        'mongodb+srv://tyleraycock:rTs2dS6aWCj0WAiP@cluster0.afuimig.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db()
    const meetupsCollection = db.collection('meetups') 
    const meetups = await meetupsCollection.find().toArray()

    // console.log(meetups)

    client.close()

    return {
        props: {
            meetups: meetups.map(meetup => {
                const { title, image, address } = meetup.data
                return {
                    id: meetup._id.toString(),
                    title: title,
                    image: image,
                    address: address
                }
            })
        },
        revalidate: 1
    }
}


//this following example is for static dummy data

// export async function getStaticProps(){
//code written here is never accessed on the client side since it is only used in the build form 
//you can do things such as fetch data from an api 
// return {
// props: {
//     meetups: Dummy_Meetups
// },
// revalidate: 10
//revaildate will refresh the server side info every designated time you put in in seconds 
//ensuring the data is always up to date
//     }
// }

// export async function getServerSideProps(context){
//     //this will not run during the build process but ALWAYS on the server after deployment
//     //context gives you access to more data which you can manipulate below in the request and response
//     const req = context.reg;
//     const res = context.res
//     return{
//         props: {
//             meetups: Dummy_Meetups
//         }
//     }
// }

export default HomePage