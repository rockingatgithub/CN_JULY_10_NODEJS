import Cookies from "js-cookie"
import { useState, useEffect } from "react"
import Button from "react-bootstrap/esm/Button"
import { connect } from "react-redux"
// import ChatBox from "../ChatBox"

const InterviewsList = (props) => {

    const [ interviews, setInterviews ] = useState([])
  
    useEffect(() => {
      
      async function getInterviews () {
  
        // console.log("it runs on mount")
  
        const interviews = await fetch('https://calm-gold-monkey-fez.cyclic.app/interview', {
          headers: {
            Authorization: 'Bearer ' + Cookies.get('user')
          }
        })
  
        const parsedResponse = await interviews.json()
        console.log("the interviews", parsedResponse)
  
        if(interviews.status === 200)
          setInterviews(parsedResponse.data)
  
      }
      getInterviews()
  
    }, [])

    const applyInterviewHandler = async (interviewID) => {


      const response = await fetch('https://calm-gold-monkey-fez.cyclic.app/interview/assign/' + interviewID + '/' + props.main.user._id )
      const parsedResponse = await response.json()

      if (response.status === 200) {
        alert("Added successfully!")
      }

    }

    return <>

      <h3> Interview List </h3>
      <ul>{
        interviews.map((interview) => 
          <li key={interview._id}>
                <h3>{interview.role} - {interview.company}</h3>
                <div>
                  {interview.description}
                </div>

                <Button onClick={() => applyInterviewHandler(interview._id)} > Apply </Button>

          </li>
        )
      }</ul>
      {/* <ChatBox/> */}
    </>
  
  }

const mapStateToProps = (state) => {
  return { main: state }
}

  export default  connect(mapStateToProps)(InterviewsList)