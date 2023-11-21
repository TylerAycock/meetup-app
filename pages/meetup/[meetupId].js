//we can connect this to an actual backend which allows you to make a pull request and then display specific data 
//this page is pulled up from the meetup item component when a user clicks the buttons activating the router functionality with its pull request 

import MeetupDetail from "@/components/meetups/MeetupDetail"

const MeetUpDetails = () => {

    return (
        <MeetupDetail
            image="https://picsum.photos/800/500"
            title="First Meet Up"
            address='Some Street 5, 12345 Some City'
            description='This is a first meet up'
        />
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            },
            {
                params: {
                    meetupId: 'm3'
                }
            }
        ],
        fallback: false
    }
}

export async function getStaticProps(context) {
    //fetch the data for a single meetup 
    const meetupId = context.params.meetupId

    //this will show up in the developer tools below not on the page 
    console.log(meetupId)
    return {
        props: {
            meetupData: {
                image: 'https://picsum.photos/800/500',
                id: meetupId,
                title: 'First Meet Up',
                address: 'Some Street 5, 12345 Some City',
                description: 'This is a first meet up'
            }
        }
    }
}

export default MeetUpDetails