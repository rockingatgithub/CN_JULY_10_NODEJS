import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from "js-cookie"
import { API_BASE_URL } from '../../../constant'

export const fetchContent = createAsyncThunk(
    'interviews/fetchContent',
    async () => {
        const interviews = await fetch(API_BASE_URL + '/interview', {
            headers: {
                Authorization: 'Bearer ' + Cookies.get('user')
            }
        })

        const parsedResponse = await interviews.json()
        console.log("the interviews", parsedResponse)

        return parsedResponse.data
    }
)

export const interviewSlice = createSlice({
    name: 'interviews',
    initialState: {
        isLoading: false,
        interviews: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchContent.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchContent.fulfilled, (state, action) => {
            state.isLoading = false
            state.interviews = action.payload
        })
        builder.addCase(fetchContent.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },
})

export const { setInterviews, getInterviews } = interviewSlice.actions

export default interviewSlice.reducer