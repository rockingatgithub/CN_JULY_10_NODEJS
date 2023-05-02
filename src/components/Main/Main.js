import React from 'react'
class UserForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            list: [],
            counter: 0,
            heading: '',
            showStudentList: false
        }
        // this.emailHandlerFunction = this.emailHandler.bind(this)
    }

    componentDidMount = () => {
        // do any operation when compnents mount!
        console.log("Hey! The compoent is mounted")
    }

    componentDidUpdate = () => {
        console.log("The component got updated")
    }



    nameHandler = (event) => {
        // console.log("name handler called", event)
        this.setState({
            name: event.target.value
        })
    }

    emailHandler = (event) => {
        this.setState({
            email: event.target.value
        }, () =>
            console.log("updated", this.state.email)
        )
    }

    addStudentHandler = (event) => {
        event.preventDefault()

        const studentObj = {
            name: this.state.name,
            email: this.state.email
        }

        // this.state.list.push(studentObj)
        // console.log(this.state.list)

        this.setState((prevState) => ({
            list: [...prevState.list, studentObj]
        }))
    }

    increaseCount = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
    }

    decreaseCount = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    headingChangeHandler = (value) => {
        this.setState({
            heading: value
        })
    }

    toggleStudentList = () => {
        this.setState({
            showStudentList: !this.state.showStudentList
        })
    }

    render() {

        const { name, email, heading, list, showStudentList } = this.state

        console.log("class list", this.state.list)
        return <>

            <h1>Welcome {name}</h1>

            <form onSubmit={this.addStudentHandler} >

                Name:-<input type="text" value={name} onChange={this.nameHandler} />
                Email:-<input type="text" value={email} onChange={this.emailHandler} />
                <button type='submit' > Add Student </button>

            </form>

            <button onClick={this.toggleStudentList} > Show List </button>
            {showStudentList && <StudentList list={list} heading={heading} headingChangeHandler={this.headingChangeHandler} />}

            <button onClick={this.increaseCount} >Increase</button>
            {this.state.counter}
            <button onClick={this.decreaseCount} >Decrease</button>


        </>

    }

}

export default UserForm


class StudentList extends React.Component {

    // const newList = list.push({ name: 'a', email: 'cn@gmail.com' })

    componentWillUnmount = () => {
        console.log("component got unmounted!")
    }

    render() {

        const { heading, list, headingChangeHandler, customComp } = this.props


        return <>
            <h3>{heading}</h3>
            <input onChange={event => headingChangeHandler(event.target.value)} />

            {customComp}
            <ul>
                {list.map((student, index) => <li key={student.email}>
                    <span>{student.name}</span>
                    <br />
                    <span>{student.email}</span>
                </li>)}
            </ul>
        </>

    }

}