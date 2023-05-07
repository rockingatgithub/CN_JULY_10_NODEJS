import React, { useContext } from  "react"

export const theme = React.createContext({
    color: 'blue'
})
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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


            <theme.Provider value={{color: 'red'}} >
                <Component1/>
            </theme.Provider>
            

        </div>
    }


}


export default Login



const Component1 = (props) => {

    return <div>
        Component1
        <Component2/>

    </div>

}


const Component2 = (props) => {

    const value = useContext(theme)

    return <div>
        Component2

        <h1>{value.color}</h1>

        
    </div>

}