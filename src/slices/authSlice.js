import {createSlice} from "redux-toolkit"
//  here slices are created to store data and access the data across the whole website 
const initialState ={
    token : localStorage.getItem("token")?JSON.parse(localStorage.getItem("token")):null,
};

const authSlice = createSlice({

    name:"auth",
    initialState:initialState,
    reducers:{
        setToken(state,value){
            state.token =value.payload;
        },
    },
});
export const {setToken}=authSlice.actions;
export default authSlice.reducer;