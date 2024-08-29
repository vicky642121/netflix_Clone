import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    isLoading:false,
}

const UserSlice = createSlice({

    name:"user",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user = action.payload;
        },
        setLoading:(state,action) => {
            state.isLoading = action.payload;
        }
    }
});

export const{setUser,setLoading} = UserSlice.actions;
export default UserSlice.reducer;
