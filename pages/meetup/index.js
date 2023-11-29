//our domain.com/meetup
import NewMeetupForm from "@/components/meetups/NewMeetupForm"
import { useRouter } from "next/router";

const NewMeetUpPage = () => {
    const router = useRouter()

    async function addMeetUpHandler(meetUpData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POSt',
            body: JSON.stringify(meetUpData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();

        // console.log(data)

        router.push('/')
    }
    return <NewMeetupForm onAddMeetup={addMeetUpHandler} />
}

export default NewMeetUpPage