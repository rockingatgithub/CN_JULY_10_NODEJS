import Cookies from "js-cookie"
import { useEffect, useState } from "react"

const Profile = (props) => {

    const [student, setStudent] = useState({})

    useEffect(() => {

        async function getStudent () {

            const student = await fetch('http://localhost:8000/student', {
            headers: {
                Authorization: 'Bearer ' + Cookies.get('user')
              }
            })

            const parsedResponse = await student.json()
            setStudent(parsedResponse.student)

        }
        getStudent()

    }, [])

    return <div>

        <h3>My Dashboard</h3>
        <div> Name:- {student.name} </div>
        <div> Email:- {student.email} </div>


    </div>

}

export default Profile