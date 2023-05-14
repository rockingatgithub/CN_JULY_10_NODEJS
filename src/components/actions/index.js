// Action(functions) rules:-
// 1. It return simple JS objects.
// 2. It's pure JS function.

import Cookies from "js-cookie"

export const loginUser =  (email, password)  => {

  return async ( dispatch, getState ) => {
    const loginResponse = await fetch('https://calm-gold-monkey-fez.cyclic.app/auth/jwt', 
    {
      method: 'POST',
      body: JSON.stringify({
        email, password
      }),

      headers: {
        'Content-Type': 'application/json'
      }

    })

    const parsedResponse = await loginResponse.json()
    console.log("the parsedresponse", parsedResponse)

    if(loginResponse.status === 200) {
      Cookies.set('user', parsedResponse.token)
       dispatch(setUser(parsedResponse.user))
    }

  }
}


const setUser = (data) => {

  return {
    type: "LOGIN",
    data
  }

}


export const googleLogin = (credentialResponse) => {

  
  return async (dispatch, getState) => {

    // console.log(credentialResponse.credential)

    if(credentialResponse.credential){
        const response = await fetch('https://calm-gold-monkey-fez.cyclic.app/auth/google', {
        method: 'POST',
        body: JSON.stringify({token: credentialResponse.credential}),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const loginResponse = await response.json()
      console.log("The response", loginResponse)
      if(response.status === 200) {
        dispatch(setUser(loginResponse.user))
        Cookies.set('user', loginResponse.token)
      }
    }

  }


}