import { useEffect, useState } from 'react'
import {io} from 'socket.io-client'

const socket = io('http://localhost:8000')


const ChatBox = (props) => {

    const [message, setMessage] = useState('')
    const [list, setList] = useState([])

    // socket.on('hello-back', (data) => {
    //     console.log("data", data)
    // })

    useEffect(() => {

        socket.on('hello-back', (data) => {
            console.log("data", data)
            list.push(data)
            setList([...list])
        })

    }, [socket])

    const submitHandler = (event) => {

        event.preventDefault()

        list.push(message)
        setList([...list])
        socket.emit('hello', message)


    }

    return  <div>

        <h3> Chat Box </h3>
        <ul>
            { list.map((msg) => <li>{msg}</li>) }
        </ul>
        <form onSubmit={submitHandler} >

            <input type="text" value={message} onChange={(event) => setMessage(event.target.value)} />

            <button type='submit' > Submit </button>

        </form>

    </div>

}

export default ChatBox