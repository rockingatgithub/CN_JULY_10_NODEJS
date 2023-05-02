import Cookies from "js-cookie"
import { useState, useEffect } from "react"
import Button from "react-bootstrap/esm/Button"
import { connect } from "react-redux"
import { decreaseBy, increaseBy } from "../actions"

const InterviewsList = (props) => {

    const [ interviews, setInterviews ] = useState([])
  
    useEffect(() => {
      
      async function getInterviews () {
  
        // console.log("it runs on mount")
  
        const interviews = await fetch('http://localhost:8000/interview', {
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


      const response = await fetch('http://localhost:8000/interview/assign/' + interviewID + '/' + props.user._id )
      const parsedResponse = await response.json()

      if (response.status === 200) {
        alert("Added successfully!")
      }

    }

    console.log("the store props", props.main)

    const increaseCounter = () => {
      props.dispatch(increaseBy(40))
    }
    
    const decreaseCounter = () => {
      props.dispatch(decreaseBy(30))
    }
  
    return <>

      <div>
        <h4> Counter section </h4>

        Counter value:- {props.main.counter}
        <br/>
        <Button onClick={increaseCounter} > + </Button>
        <Button onClick={decreaseCounter} > - </Button>

      </div>

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
    </>
  
  }

const mapStateToProps = (state) => {
  return { main: state }
}

  export default  connect(mapStateToProps)(InterviewsList)