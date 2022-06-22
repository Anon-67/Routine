import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit"

const stateAdapter = createEntityAdapter()
const initialState = stateAdapter.getInitialState({
    status: "idle",
    user: null,
    conversation: null,
    events: [],
    articles: [],
    tasks: [],
    messages: [],
    allUsers: []

})

export const fetchAllUsers = createAsyncThunk("slice/fetchAllUsers", () => {
    return fetch('/users')
        .then(r => r.json())
        .then(users => users)
})


const slice = createSlice({
    name: "slice",
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        setConversation(state, action) {
            state.conversation = action.payload
        }
    },
    extraReducers: {
        [fetchAllUsers.pending](state) {
            state.status = "loading"
        },
        [fetchAllUsers.fulfilled](state, action) {
            state.allUsers = action.payload
            state.status = "idle"
        }
    }
})

const { setUser, setConversation } = slice.actions

export { setUser, setConversation }

export default slice.reducer