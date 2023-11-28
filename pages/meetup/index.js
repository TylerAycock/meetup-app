//our domain.com/meetup
import NewMeetupForm from "@/components/meetups/NewMeetupForm"

const NewMeetUpPage = () => {

    async function addMeetUpHandler(meetUpData) {
        const response = await fetch('/api/new-meetup')
    }
    return <NewMeetupForm onAddMeetup={addMeetUpHandler} />
}

export default NewMeetUpPage