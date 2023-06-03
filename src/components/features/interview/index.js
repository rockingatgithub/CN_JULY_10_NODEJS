import {createSlice} from '@reduxjs/toolkit'
import Cookies from "js-cookie"
import { API_BASE_URL } from '../../../constant'


export const interviewSlice = createSlice({
    name: 'interviews',
    initialState: [],
    reducers: {

        getInterviews: (state, action) => {

            return async (dispatch, getState) => {

                const interviews = await fetch(API_BASE_URL + '/interview', {
                    headers: {
                      Authorization: 'Bearer ' + Cookies.get('user')
                    }
                  })
            
                  const parsedResponse = await interviews.json()
                  console.log("the interviews", parsedResponse)
            
                  if(interviews.status === 200)
                    dispatch(setInterviews(parsedResponse.data))

            }

        },

        setInterviews: (state, action) => {

            return [...state, ...action.payload]

        }
    },
})

export const {setInterviews, getInterviews} = interviewSlice.actions

export default interviewSlice.reducer