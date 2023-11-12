import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    email: '',
    access_token: '',
    exp: '',
    id: ''
 }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
        const { name, email, access_token, exp, id } = action.payload 
        console.log('action', action)
        state.name = name || email;
        state.email = email;
        state.access_token = access_token;
        state.exp = exp;
        state.id = id
   },
  },
})

// Action creators are generated for each case reducer function
export const { updateUser } = userSlice.actions

export default userSlice.reducer