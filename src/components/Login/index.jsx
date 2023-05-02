import React from  "react"
class Login extends React.Component {

    constructor(props) {
        super(props);
        state = {
            name: '',
            roll: '',
            token: null,
        }
    }

    nameChangeHandler = (value) => {
        this.setState({name: value})
    } 

    rollChangeHandler = (value) => {
        this.setState({roll: value})
    } 

    loginHandler = async (event) => {

        event.preventDefault()

        const {name, roll} = this.state

        const loginObj = {
            name,
            roll
        }

        const response = await fetch('http://localhost:8001/auth/jwt',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginObj)
            })
        const parsedResponse = await response.json()

        console.log("login", parsedResponse)

        if(response.status === 200) {
            this.setState({token: parsedResponse.token})
        }

    }

    getStudent = async () => {

        const response = await fetch('http://localhost:8001/student', {
            headers: {
                "Authorization": "Bearer " + this.state.token
            }
        })

        const parsedResponse = await response.json()
        console.log("the parsed response", parsedResponse)


    }

    render() {
        return <div>

            <h3>Login</h3>
            <form onSubmit={(event) => this.loginHandler(event)} >

                <input type="text" value={this.state.name} onChange={(event) => this.nameChangeHandler(event.target.value)}  />
                <input type="number" value={this.state.roll} onChange={(event) => this.rollChangeHandler(event.target.value)}  />
                <button type="submit" > Submit </button>

            </form>

            { this.state.token && <button onClick={this.getStudent} > Get student  </button>  }

        </div>
    }


}


export default Login