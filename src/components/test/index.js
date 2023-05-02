import { useEffect, useState } from "react"

const Clock = (props) => {

    const [date, setDate] = useState('')
    const [intervalID, setIntervalID] = useState('')

    useEffect(() => {

        
        const id =  setInterval(() => {
            const currentTime = new Date()
            setDate( currentTime.toString() )
        }, 1000)

        // setIntervalID(id)

        return () => {
            // console.log(" the component unmounted ")
            clearInterval(id)
        }

    }, [])

    useEffect(() => {

        console.log("The date got change", date.toString())

    }, [])

   

    return <>
        Current Time { date }
    </>

}


export default Clock