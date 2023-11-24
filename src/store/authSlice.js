
import { createSlice  } from "@reduxjs/toolkit";



const initialState = {
    status:true,
    userData:null,
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        
        login:(state, action) => {
            console.log("redux login");
            
            state.status = true;
            state.userData = action.payload.userData    
        },

        logout: (state, action)=>{
            console.log("redux logout");

            state.status = false;
            status.userData = null;
        }

    }
})


export const { login, logout } = authSlice.actions;


export default authSlice.reducer;




























