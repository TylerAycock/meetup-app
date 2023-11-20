import MeetupList from "../components/meetups/MeetupList"

const Dummy_Meetups = [
    {
        id: 'm1',
        title: 'first meetup',
        image: 'https://picsum.photos/200',
        address: 'Some Address 5, 12345 Some City',
        description: 'This is our first meetUp'
    },
    {
        id: 'm2',
        title: 'second meetup',
        image: 'https://picsum.photos/200',
        address: 'Some Address 5, 12345 Some City',
        description: 'This is our first meetUp'
    },
    {
        id: 'm3',
        title: 'first meetup',
        image: 'https://picsum.photos/200',
        address: 'Some Address 5, 12345 Some City',
        description: 'This is our first meetUp'
    }
]

const HomePage = () => {
    return(
        <MeetupList meetups={Dummy_Meetups}/>
    )
}

export default HomePage