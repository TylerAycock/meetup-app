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

export default MeetUpDetails