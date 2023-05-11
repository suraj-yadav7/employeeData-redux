import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
            console.log("the name: userslice", action.payload)
        },
        removeUser(state,action){},
        deleteUsers(state,action){}

    },

})

console.log("It will show all actions of the userSlices",userSlice.actions)

export default userSlice.reducer;
export const {addUser} = userSlice.actions