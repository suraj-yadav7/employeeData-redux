import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./slice/UserSlice";

const store= configureStore({
    reducer:{
        users: userSlice,
        //or we can use userSlice.reducer if exported file name is only slice name ex: userSlice without object like userSlice.reducer

    }

})

export default store