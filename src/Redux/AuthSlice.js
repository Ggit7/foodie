import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "./Helper";
import { reg_end_point, log_end_point,profile_end_point } from "../Api/Endpoint/ApiEndpoints";
const initialState = {
  upload_status: "idle",
  pfl:[],
  isRegistration: false,
  isLogin: false,
  redirectContact: null,
  redirectTo: null,
  userpic:localStorage.getItem('pic')||null,
};
export const register = createAsyncThunk("signup", async (formData,{rejectWithValue}) => {
  const res = await axiosInstance.post(reg_end_point.registration, formData);
 if(res.status===200){
  return res?.data
 }else{
  alert('invalid registration')
  return rejectWithValue()
 }
});
export const logIn = createAsyncThunk("signin", async (formData,{rejectWithValue}) => {
  const res = await axiosInstance.post(log_end_point.login, formData);
  if(res.status===200){
    return res?.data
  }
  else{
    alert('invalid login')
    return rejectWithValue()
  }
  
});
export const profile_dt=createAsyncThunk('profile',async(fromData)=>{
  const res=await axiosInstance.get(profile_end_point.profile,fromData);
  const resData=await res?.data;
  return resData;
})
export const authSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    reset_redirectContact: (state, { payload }) => {
      state.redirectContact = payload;
    },
    check_myname: (state, { payload }) => {
      const name = localStorage.getItem("name");
      if (name !== null && name !== undefined) {
        state.isRegistration = true;
      }
    },
    handleRedirectContact: (state, { payload }) => {
      localStorage.removeItem("name");
      state.isRegistration = false;
    },
    reset_redirectTo: (state, { payload }) => {
      state.redirectTo = payload;
    },
    check_token: (state, { payload }) => {
      const token = localStorage.getItem("token");
      if (token !== null && token !== undefined) {
        state.isLogin = true;
      }
    },
  
    handlelogout: (state, { payload }) => {
      localStorage.removeItem("token");
      localStorage.removeItem('Name');
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, { payload }) => {
        state.upload_status = "loading";
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.upload_status = "success";
        localStorage.setItem("name", payload?.data?.name);
        state.redirectContact='/login'
        state.isRegistration = true;
       
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.upload_status = "failed";
      })
      .addCase(logIn.pending, (state, { payload }) => {
        state.upload_status = "loading";
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.upload_status = "success";
        console.log(payload)
        localStorage.setItem("token", payload?.token);
        localStorage.setItem("Name", payload?.data?.first_name);
        state.userpic=payload?.data?.profile_pic
        localStorage?.setItem('pic',payload?.data?.profile_pic)
        state.isLogin = true;

        
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.upload_status = "failed";
      })
      .addCase(profile_dt.pending,(state,{payload})=>{ 
          state.upload_status='pending';
      })
      .addCase(profile_dt.fulfilled,(state,{payload})=>{ 
        state.upload_status='succes';
        state.pfl=payload?.data;
    })
    .addCase(profile_dt.rejected,(state,{payload})=>{ 
      state.upload_status='failed';
  })
  },
});
export const{
  reset_redirectContact,
  reset_redirectTo,
  check_myname,
  check_status,
  check_token,
  handleRedirectContact,
  handlelogout,
} = authSlice.actions;
