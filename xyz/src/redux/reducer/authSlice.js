import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    msg: "",
    user: "",
    token: "",
    loading: "",
    error: "" 
}

export const signUpUser = createAsyncThunk('signupuser', async (body) => {
    const res = await fetch(`https://secure-refuge-14993.herokuapp.com/add_user?username=${body.name}&password=${body.password}&role=${body.role}`, {
        method: "post",
        headers: {
            'Content-Type': "application/json",
        },
        // body: JSON.stringify(body)
    })
    return await res.json();
})
export const signInUser = createAsyncThunk('signinuser', async (body) => {
    const res = await fetch(`https://secure-refuge-14993.herokuapp.com/login?username=${body.username}&password=${body.pass}`, {
        method: "post",
        headers: {
            'Content-Type': "application/json",
        },
        // body: JSON.stringify(body)
    })
    return await res.json();
})


const authSlice = createSlice({
    
    name: "user",
    initialState,
    reducers: {

        addToken: (state, action) => {
            state.token = localStorage.getItem("token")
        },

        addUser: (state, action) => {
            state.token = localStorage.getItem("user")
        },

        logout: (state, action) => {
            state.token = null;
            localStorage.clear();
        }

    },
    extraReducers: {
        [signInUser.pending]: (state, action) => {
            state.loading = true;
        },
        // register user
        [signInUser.fulfilled]: (state, { payload: { error, msg, token, user, data } }) => {
            console.log(error, msg, token, user, data);
            state.loading = false;
            if (error) {
                state.error = data;
            }
            else {
                state.msg = msg;
                state.token = token;
                state.user = user;
                state.error = null;

                localStorage.setItem('msg', msg)
                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('token', token)
            }
        },// reg success
        [signInUser.rejected]: (state, action) => {
            state.loading = false
        },

        [signUpUser.pending]: (state, action) => {
            state.loading = true;
        },

        [signUpUser.fulfilled]: (state, { payload: { error, msg, token, data } }) => {
            console.log(error, msg, token, data);
            state.loading = false;
            if (error) {
                state.error = data;
            }
            else {
                state.msg = msg;
                state.error = null;
            }
        },
        [signUpUser.rejected]: (state, action) => {
            state.loading = true
        }

    }
})

export const { addToken, addUser, logout } = authSlice.actions;
export default authSlice.reducer;